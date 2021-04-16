// ==UserScript==
// @name         ks-prefetch
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        live.kuaishou.com/playback/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const getM3u8Url = () => {
    const obj = window.__APOLLO_STATE__.clients.graphqlServerClient;
    let m3u8Url = "";
    Object.keys(obj).some((key) => {
      if (key.includes("$ROOT_QUERY.playbackDetail")) {
        m3u8Url = obj[key + ".product"].m3u8Url;
        return true;
      }
      return false;
    });
    return m3u8Url;
  };

  const fetchUrl = (url) => {
    return fetch(url).then((val) => val.text());
  };

  const prefetchUrl = (url) => {
    return fetch(url, { ksPrefetch: true });
  };

  const VolStep = 0.05;
  const TimeStep = 5;

  const injectVideoControl = () => {
    const videoEl = document.querySelector(".player-video");
    if (!videoEl) return console.log("查询视频元素失败");
    console.log('video control inject success');

    document.onkeyup = function (event) {
      console.log("keyCode:", event.code);
      const e = event || window.event || arguments.callee.caller.arguments[0];
      if (!e) return;
      switch (e.code) {
        case "ArrowUp": {
          videoEl.volume += VolStep;
          return;
        }
        case "ArrowDown": {
          const res = videoEl.volume - VolStep;
          videoEl.volume = res >= 0 ? res : 0;
          return;
        }
        case "ArrowLeft": {
          const res = videoEl.currentTime - TimeStep;
          videoEl.currentTime = res >= 0 ? res : 0;
          return;
        }
        case "ArrowRight": {
          videoEl.currentTime += TimeStep;
          return;
        }

        default:
          break;
      }
    };
  };

  const start = async () => {
    console.log("inject...");
    setTimeout(() => injectVideoControl(), 2000);
    const m3u8Url = getM3u8Url();
    const m3u8listStr = await fetchUrl(m3u8Url);
    const prefix = /(htt.*\/).*\.m3u8/.exec(m3u8Url)[1];
    const m3u8List = m3u8listStr
      .split("\n")
      .filter((str) => str.includes(".ts"))
      .map((str) => prefix + str);

    const prefetch = (respUrl, type) => {
      const index = Array.prototype.findIndex.call(
        m3u8List,
        (i) => i === respUrl
      );
      if (index > -1) {
        console.log(type, "prefetch", index + 2);
        console.log();
        const nextUrl = m3u8List[index + 2];
        prefetchUrl(nextUrl);
      }
    };

    injectXHRHttpRequest(prefetch);
    injectFetchReuquest(prefetch);
  };

  function injectFetchReuquest(prefetchCallback) {
    const prevFetch = window.fetch;
    window.fetch = function (...args) {
      if (args[1].ksPrefetch === undefined) prefetchCallback(args[0], "fetch");
      return prevFetch.apply(this, args);
    };
  }

  function injectXHRHttpRequest(prefetchCallback) {
    const xhr = window.XMLHttpRequest;
    window.XMLHttpRequest = function () {
      const x = new xhr();
      checkSuccess(x);
      return x;
    };

    const checkSuccess = (xhr) => {
      const respUrl = xhr.responseURL;
      if (respUrl != null) {
        prefetchCallback(respUrl, "xhr");
      } else {
        setTimeout(() => {
          checkSuccess(xhr);
        }, 0);
      }
    };
  }

  start();
})();
