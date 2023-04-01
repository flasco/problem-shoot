// 注入html
let $section = document.createElement("section");
$section.innerHTML = `<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="author" content="毛静文,Momo">
  <meta name="keywords" content="m3u8 下载工具, 毛静文的博客,Momo's Blog">
  <meta name="description" content="m3u8 下载工具,无需下载软件,打开网站即可下载,自动检测,一键下载">
  <title>m3u8 downloader</title>
  <style>
  /*全局设置*/
  html, body {
    margin: 0;
    padding: 0;
  }
  body::-webkit-scrollbar { display: none}
  p {
    margin: 0;
  }
  [v-cloak] {
    display: none;
  }
  #m-app {
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 10px 50px 80px;
    box-sizing: border-box;
  }
  .m-p-action {
    margin: 20px auto;
    max-width: 1100px;
    width: 100%;
    font-size: 35px;
    text-align: center;
    font-weight: bold;
  }
  .m-p-other, .m-p-tamper, .m-p-github, .m-p-language, .m-p-mse{
    position: fixed;
    right: 50px;
    background-color: #eff3f6;
    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
    color: #24292e;
    border: 1px solid rgba(27, 31, 35, .2);
    border-radius: 3px;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding: 6px 12px;
    z-index: 99;
  }
  
  .m-p-help {
    position: fixed;
    right: 50px;
    top: 50px;
    width: 30px;
    height: 30px;
    color: #666666;
    z-index: 2;
    line-height: 30px;
    font-weight: bolder;
    border-radius: 50%;
    border: 1px solid rgba(27, 31, 35, .2);
    cursor: pointer;
    background-color: #eff3f6;
    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
  }
  .m-p-github:hover, .m-p-other:hover, .m-p-tamper:hover, .m-p-help:hover, .m-p-language:hover, .m-p-mse:hover{
    opacity: 0.9;
  }
  .m-p-language {
    bottom: 70px;
  }
  .m-p-other {
    bottom: 150px;
  }
  .m-p-tamper {
    bottom: 30px;
  }
  .m-p-github {
    bottom: 190px;
  }
  .m-p-mse {
    bottom: 110px;
  }
  /*广告*/
  .m-p-refer {
    position: absolute;
    left: 50px;
    bottom: 50px;
  }
  .m-p-refer .text {
    position: absolute;
    top: -80px;
    left: -40px;
    animation-name: upAnimation;
    transform-origin: center bottom;
    animation-duration: 2s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-delay: .5s;
  }
  .m-p-refer .close {
    display: block;
    position: absolute;
    top: -110px;
    right: -50px;
    padding: 0;
    margin: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    z-index: 3;
    transition: 0.3s all;
    background-size: 30px 30px;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/imgs/close.png);
    background-color: rgba(0, 0, 0, 0.5);
  }
  .m-p-refer .close:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .m-p-refer .link {
    border-radius: 4px;
    text-decoration: none;
    background-color: #4E84E6;
    transition: 0.3s all;
  }
  .m-p-refer .link:hover {
    top: -10px;
    color: #333333;
    border: 1px solid transparent;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: 2px 11px 20px 0 rgba(0, 0, 0, 0.6);
  }
  @keyframes upAnimation {
    0% {
      transform: rotate(0deg);
      transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }

    10% {
      transform: rotate(-12deg);
      transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }

    20% {
      transform: rotate(12deg);
      transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }

    28% {
      transform: rotate(-10deg);
      transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }

    36% {
      transform: rotate(10deg);
      transition-timing-function: cubic-bezier(0.755, .5, .855, .06)
    }

    42% {
      transform: rotate(-8deg);
      transition-timing-function: cubic-bezier(0.755, .5, .855, .06)
    }

    48% {
      transform: rotate(8deg);
      transition-timing-function: cubic-bezier(0.755, .5, .855, .06)
    }

    52% {
      transform: rotate(-4deg);
      transition-timing-function: cubic-bezier(0.755, .5, .855, .06)
    }

    56% {
      transform: rotate(4deg);
      transition-timing-function: cubic-bezier(0.755, .5, .855, .06)
    }

    60% {
      transform: rotate(0deg);
      transition-timing-function: cubic-bezier(0.755, .5, .855, .06)
    }

    100% {
      transform: rotate(0deg);
      transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }
  }
  /*顶部信息录入*/
  .m-p-temp-url {
    padding-top: 50px;
    padding-bottom: 10px;
    width: 100%;
    color: #999999;
    text-align: left;
    font-style: italic;
    word-break: break-all;
  }
  .m-p-input-container {
    display: flex;
  }
  .m-p-input-container input {
    flex: 1;
    margin-bottom: 20px;
    display: block;
    width: 280px;
    padding: 16px;
    font-size: 24px;
    border-radius: 4px;
    box-shadow: none;
    color: #444444;
    border: 1px solid #cccccc;
  }
  .m-p-input-container .range-input {
    margin-left: 10px;
    flex: 0 0 100px;
    width: 100px;
    box-sizing: border-box;
  }
  .m-p-input-container div {
    position: relative;
    display: inline-block;
    margin-left: 10px;
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #eeeeee;
    background-color: #3D8AC7;
    opacity: 1;
    transition: 0.3s all;
  }
  .m-p-input-container div:hover {
    opacity: 0.9;
  }
  .m-p-input-container div {
    width: 200px;
  }
  .m-p-input-container .disable {
    cursor: not-allowed;
    background-color: #dddddd;
  }
  /*下载状态*/
  .m-p-line {
    margin: 20px 0 50px;
    vertical-align: top;
    width: 100%;
    height: 5px;
    border-bottom: dotted;
  }
  .m-p-tips {
    width: 100%;
    color: #999999;
    text-align: left;
    font-style: italic;
    word-break: break-all;
  }
  .m-p-tips p {
    width: 100px;
    display: inline-block;
  }
  .m-p-tips.error-tips{
    color: #DC5350;
  }
  .m-p-segment {
    text-align: left;
  }
  .m-p-segment .item {
    display: inline-block;
    margin: 10px 6px;
    width: 50px;
    height: 40px;
    color: white;
    line-height: 40px;
    text-align: center;
    border-radius: 4px;
    cursor: help;
    border: solid 1px #eeeeee;
    background-color: #dddddd;
    transition: 0.3s all;
  }
  .m-p-segment .finish {
    background-color: #0ACD76;
  }
  .m-p-segment .error {
    cursor: pointer;
    background-color: #DC5350;
  }
  .m-p-segment .error:hover {
    opacity: 0.9;
  }
  .m-p-stream, .m-p-report, .m-p-cross, .m-p-final {
    margin-top: 10px;
    display: inline-block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #eeeeee;
    background-color: #3D8AC7;
    opacity: 1;
    transition: 0.3s all;
  }
  .m-p-stream {
    background-color: #0ACD76 !important;
  }
  .m-p-report {
    background-color: #e74c3c !important;
    text-decoration: none;
  }
  .m-p-final {
    text-decoration: none;
  }
  .m-p-force, .m-p-retry {
    position: absolute;
    right: 50px;
    display: inline-block;
    padding: 6px 12px;
    font-size: 18px;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #eeeeee;
    background-color: #3D8AC7;
    opacity: 1;
    transition: 0.3s all;
  }
  .m-p-retry {
    right: 250px;
  }
  .m-p-force:hover, .m-p-retry:hover {
    opacity: 0.9;
  }

  </style>
</head>

<body>
<div id="m-loading">
  页面加载中，请耐心等待...
  <h1 style="white-space: pre;">
    推荐一个 m3u8 网页版提取工具，无需下载软件，打开网站即可下载，自动检测，一键下载。
    工具链接：https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index.html
    工具教程：https://segmentfault.com/a/1190000021847172?_ea=32289224
    <img src="https://upyun.luckly-mjw.cn/Assets/blog/m3u8-downloader-121-75.jpeg" alt="m3u8 视频下载工具" title="logo"/>
    <a target="_blank" href="https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index.html">点击跳转</a>
  </h1>
</div>
<section id="m-app" v-cloak>
  <!--顶部操作提示-->
  <section class="m-p-action g-box">{{tips}}</section>
  <a class="m-p-help" target="_blank" href="https://segmentfault.com/a/1190000021847172">?</a>
  <a class="m-p-mse" target="_blank" href="https://segmentfault.com/a/1190000025182822">无差别提取工具</a>
  <a class="m-p-tamper" target="_blank" href="https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/m3u8-downloader.user.js">手动添加/更新油猴插件</a>
  <a class="m-p-github" target="_blank" href="https://github.com/Momo707577045/m3u8-downloader">github</a>
  <a class="m-p-other" target="_blank" href="http://blog.luckly-mjw.cn/tool-show/index.html">其他实用工具</a>
  <a class="m-p-language" href="http://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index-en.html">English version</a>

  <!--广告-->
  <a v-if="isShowRefer" class="m-p-refer" target="_blank" href="https://segmentfault.com/a/1190000024416860">
    <img src="https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/imgs/001.png" class="link">
    <img src="https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/imgs/003.png" class="text">
    <i class="close" @click.prevent="isShowRefer=false"></i>
  </a>

  <!--文件载入-->
  <div class="m-p-temp-url">测试链接：http://1257120875.vod2.myqcloud.com/0ef121cdvodtransgzp1257120875/3055695e5285890780828799271/v.f230.m3u8</div>
  <section class="m-p-input-container">
    <input type="text" v-model="url" :disabled="downloading" placeholder="请输入 m3u8 链接">

    <!--范围查询-->
    <template v-if="!downloading || rangeDownload.isShowRange">
      <div v-if="!rangeDownload.isShowRange" @click="getM3U8(true)">特定范围下载</div>
      <template v-else>
        <input class="range-input" type="number" v-model="rangeDownload.startSegment" :disabled="downloading" placeholder="起始片段">
        <input class="range-input" type="number" v-model="rangeDownload.endSegment" :disabled="downloading" placeholder="截止片段">
      </template>
    </template>

    <!--还未开始下载-->
    <template v-if="!downloading">
      <div @click="getM3U8(false)">原格式下载</div>
      <div @click="getMP4">转码为MP4下载</div>
    </template>
    <div v-else-if="finishNum === rangeDownload.targetSegment && rangeDownload.targetSegment > 0" class="disable">下载完成</div>
    <div v-else @click="togglePause">{{ isPause ? '恢复下载' : '暂停下载' }}</div>
  </section>
  <div v-if="!downloading && isSupperStreamWrite" class="m-p-stream" @click="streamDownload(false)">特大视频原格式下载，边下载边保存，彻底解决大文件下载内存不足问题 </div>
  <div v-if="!downloading && isSupperStreamWrite" class="m-p-stream" @click="streamDownload(true)">特大视频 MP4 格式下载，边下载边保存，彻底解决大文件下载内存不足问题 </div>
  <a v-if="!downloading" class="m-p-report" target="_blank" href="https://segmentfault.com/a/1190000021847172">运行出现问题，可点击此按钮留言反馈，作者将第一时间跟进，共同维护本项目</a>

  <div class="m-p-cross" @click="copyCode">当无法下载，资源发生跨域限制时，在视频源页面打开控制台，注入代码解决，点击本按钮复制代码</div>
  <a class="m-p-final" target="_blank" href="https://segmentfault.com/a/1190000025182822">下载的视频看不了？试试这个终结解决方案「无差别视频提取工具」，有配套「油猴」插件啦！！！</a>

  <template v-if="finishList.length > 0">
    <div class="m-p-line"></div>
    <!-- <div class="m-p-retry" v-if="errorNum && downloadIndex >= rangeDownload.targetSegment" @click="retryAll">重新下载错误片段</div> -->
    <div class="m-p-force" v-if="mediaFileList.length && !streamWriter" @click="forceDownload">强制下载现有片段</div>
    <div class="m-p-tips">待下载碎片总量：{{ rangeDownload.targetSegment }}，已下载：{{ finishNum }}，错误：{{ errorNum }}，进度：{{ (finishNum / rangeDownload.targetSegment * 100).toFixed(2) }}%</div>
    <div class="m-p-tips" :class="[errorNum ? 'error-tips' : '']">若某视频碎片下载发生错误，将标记为红色，可点击相应图标进行重试</div>
    <section class="m-p-segment">
      <div class="item" v-for="(item, index) in finishList" :class="[item.status]" :title="item.title" @click="retry(index)">{{ index + 1 }}</div>
    </section>
  </template>
</section>
</body>
`;
$section.style.width = "100%";
$section.style.height = "800px";
$section.style.top = "0";
$section.style.left = "0";
$section.style.position = "relative";
$section.style.zIndex = "9999";
$section.style.backgroundColor = "white";
document.body.appendChild($section);

// 加载 ASE 解密
let $ase = document.createElement("script");
$ase.src = "https://upyun.luckly-mjw.cn/lib/aes-decryptor.js";

// 加载 mp4 转码
let $mp4 = document.createElement("script");
$mp4.src = "https://upyun.luckly-mjw.cn/lib/mux-mp4.js";

// 加载 vue
let $vue = document.createElement("script");
$vue.src = "https://upyun.luckly-mjw.cn/lib/vue.js";

// 加载 stream 流式下载器
let $streamSaver = document.createElement("script");
$streamSaver.src = "https://upyun.luckly-mjw.cn/lib/stream-saver.js";

// 监听 vue 加载完成，执行业务代码
$vue.addEventListener("load", () => {
  document.getElementById("m-loading") &&
    document.getElementById("m-loading").remove();
  new Vue({
    el: "#m-app",

    data() {
      return {
        url: "", // 在线链接
        tips: "m3u8 视频在线提取工具", // 顶部提示
        title: "", // 视频标题
        isPause: false, // 是否暂停下载
        isGetMP4: false, // 是否转码为 MP4 下载
        durationSecond: 0, // 视频持续时长
        isShowRefer: false, // 是否显示推送
        downloading: false, // 是否下载中
        beginTime: "", // 开始下载的时间
        errorNum: 0, // 错误数
        finishNum: 0, // 已下载数
        downloadIndex: 0, // 当前下载片段
        finishList: [], // 下载完成项目
        tsUrlList: [], // ts URL数组
        mediaFileList: [], // 下载的媒体数组
        isSupperStreamWrite:
          window.streamSaver && !window.streamSaver.useBlobFallback, // 当前浏览器是否支持流式下载
        streamWriter: null, // 文件流写入器
        streamDownloadIndex: 0, // 文件流写入器，正准备写入第几个视频片段
        rangeDownload: {
          // 特定范围下载
          isShowRange: false, // 是否显示范围下载
          startSegment: "", // 起始片段
          endSegment: "", // 截止片段
          targetSegment: 1, // 待下载片段
        },
        aesConf: {
          // AES 视频解密配置
          method: "", // 加密算法
          uri: "", // key 所在文件路径
          iv: "", // 偏移值
          key: "", // 秘钥
          decryptor: null, // 解码器对象

          stringToBuffer: function (str) {
            return new TextEncoder().encode(str);
          },
        },
      };
    },

    created() {
      this.getSource();
      window.addEventListener("keyup", this.onKeyup);
      setInterval(this.retryAll.bind(this), 2000); // 每两秒重新下载一遍错误片段，实现错误自动重试
    },

    beforeDestroy() {
      window.removeEventListener("keyup", this.onKeyup);
    },

    methods: {
      // 获取链接中携带的资源链接
      getSource() {
        let { href } = location;
        if (href.indexOf("?source=") > -1) {
          this.url = href.split("?source=")[1];
        }
      },

      // 获取顶部 window title，因可能存在跨域问题，故使用 try catch 进行保护
      getDocumentTitle() {
        let title = document.title;
        try {
          title = window.top.document.title;
        } catch (error) {
          console.log(error);
        }
        return title;
      },

      // 退出弹窗
      onKeyup(event) {
        if (event.keyCode === 13) {
          // 键入ESC
          this.getM3U8();
        }
      },

      // ajax 请求
      ajax(options) {
        options = options || {};
        let xhr = new XMLHttpRequest();
        if (options.type === "file") {
          xhr.responseType = "arraybuffer";
        }

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            let status = xhr.status;
            if (status >= 200 && status < 300) {
              options.success && options.success(xhr.response);
            } else {
              options.fail && options.fail(status);
            }
          }
        };

        xhr.open("GET", options.url, true);
        xhr.send(null);
      },

      // 合成URL
      applyURL(targetURL, baseURL) {
        baseURL = baseURL || location.href;
        if (targetURL.indexOf("http") === 0) {
          // 当前页面使用 https 协议时，强制使 ts 资源也使用 https 协议获取
          if (location.href.indexOf("https") === 0) {
            return targetURL.replace("http://", "https://");
          }
          return targetURL;
        } else if (targetURL[0] === "/") {
          let domain = baseURL.split("/");
          return domain[0] + "//" + domain[2] + targetURL;
        } else {
          let domain = baseURL.split("/");
          domain.pop();
          return domain.join("/") + "/" + targetURL;
        }
      },

      // 使用流式下载，边下载边保存，解决大视频文件内存不足的难题
      streamDownload(isMp4) {
        this.isGetMP4 = isMp4;
        this.title = new URL(this.url).searchParams.get("title") || this.title; // 获取视频标题
        let fileName =
          this.title || this.formatTime(new Date(), "YYYY_MM_DD hh_mm_ss");
        if (document.title !== "m3u8 downloader") {
          fileName = this.getDocumentTitle();
        }
        this.streamWriter = window.streamSaver
          .createWriteStream(`${fileName}.${isMp4 ? "mp4" : "ts"}`)
          .getWriter();
        this.getM3U8();
      },

      // 解析为 mp4 下载
      getMP4() {
        this.isGetMP4 = true;
        this.getM3U8();
      },

      // 获取在线文件
      getM3U8(onlyGetRange) {
        if (!this.url) {
          alert("请输入链接");
          return;
        }
        if (this.url.toLowerCase().indexOf("m3u8") === -1) {
          alert("链接有误，请重新输入");
          return;
        }
        if (this.downloading) {
          alert("资源下载中，请稍后");
          return;
        }

        // 在下载页面才触发，代码注入的页面不需要校验
        // 当前协议不一致，切换协议
        if (
          location.href.indexOf("blog.luckly-mjw.cn") > -1 &&
          this.url.indexOf(location.protocol) === -1
        ) {
          //alert('当前协议不一致，跳转至正确页面重新下载')
          location.href = `${
            this.url.split(":")[0]
          }://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index.html?source=${
            this.url
          }`;
          return;
        }

        // 在下载页面才触发，修改页面 URL，携带下载路径，避免刷新后丢失
        if (location.href.indexOf("blog.luckly-mjw.cn") > -1) {
          window.history.replaceState(
            null,
            "",
            `${location.href.split("?")[0]}?source=${this.url}`
          );
        }

        this.title = new URL(this.url).searchParams.get("title") || this.title; // 获取视频标题
        this.tips = "m3u8 文件下载中，请稍后";
        this.beginTime = new Date();
        this.ajax({
          url: this.url,
          success: (m3u8Str) => {
            this.tsUrlList = [];
            this.finishList = [];

            // 提取 ts 视频片段地址
            m3u8Str.split("\n").forEach((item) => {
              // if (/.(png|image|ts|jpg|mp4|jpeg)/.test(item)) {
              // 放开片段后缀限制，下载非 # 开头的链接片段
              if (/^[^#]/.test(item)) {
                console.log(item);
                this.tsUrlList.push(this.applyURL(item, this.url));
                this.finishList.push({
                  title: item,
                  status: "",
                });
              }
            });

            // 仅获取视频片段数
            if (onlyGetRange) {
              this.rangeDownload.isShowRange = true;
              this.rangeDownload.endSegment = this.tsUrlList.length;
              this.rangeDownload.targetSegment = this.tsUrlList.length;
              return;
            } else {
              let startSegment = Math.max(
                this.rangeDownload.startSegment || 1,
                1
              ); // 最小为 1
              let endSegment = Math.max(
                this.rangeDownload.endSegment || this.tsUrlList.length,
                1
              );
              startSegment = Math.min(startSegment, this.tsUrlList.length); // 最大为 this.tsUrlList.length
              endSegment = Math.min(endSegment, this.tsUrlList.length);
              this.rangeDownload.startSegment = Math.min(
                startSegment,
                endSegment
              );
              this.rangeDownload.endSegment = Math.max(
                startSegment,
                endSegment
              );
              this.rangeDownload.targetSegment =
                this.rangeDownload.endSegment -
                this.rangeDownload.startSegment +
                1;
              this.downloadIndex = this.rangeDownload.startSegment - 1;
              this.downloading = true;
            }

            // 获取需要下载的 MP4 视频长度
            if (this.isGetMP4) {
              let infoIndex = 0;
              m3u8Str.split("\n").forEach((item) => {
                if (item.toUpperCase().indexOf("#EXTINF:") > -1) {
                  // 计算视频总时长，设置 mp4 信息时使用
                  infoIndex++;
                  if (
                    this.rangeDownload.startSegment <= infoIndex &&
                    infoIndex <= this.rangeDownload.endSegment
                  ) {
                    this.durationSecond += parseFloat(
                      item.split("#EXTINF:")[1]
                    );
                  }
                }
              });
            }

            // 检测视频 AES 加密
            if (m3u8Str.indexOf("#EXT-X-KEY") > -1) {
              this.aesConf.method = (m3u8Str.match(/(.*METHOD=([^,\s]+))/) || [
                "",
                "",
                "",
              ])[2];
              this.aesConf.uri = (m3u8Str.match(/(.*URI="([^"]+))"/) || [
                "",
                "",
                "",
              ])[2];
              this.aesConf.iv = (m3u8Str.match(/(.*IV=([^,\s]+))/) || [
                "",
                "",
                "",
              ])[2];
              this.aesConf.iv = this.aesConf.iv
                ? this.aesConf.stringToBuffer(this.aesConf.iv)
                : "";
              this.aesConf.uri = this.applyURL(this.aesConf.uri, this.url);

              // let params = m3u8Str.match(/#EXT-X-KEY:([^,]*,?METHOD=([^,]+))?([^,]*,?URI="([^,]+)")?([^,]*,?IV=([^,^\n]+))?/)
              // this.aesConf.method = params[2]
              // this.aesConf.uri = this.applyURL(params[4], this.url)
              // this.aesConf.iv = params[6] ? this.aesConf.stringToBuffer(params[6]) : ''
              this.getAES();
            } else if (this.tsUrlList.length > 0) {
              // 如果视频没加密，则直接下载片段，否则先下载秘钥
              this.downloadTS();
            } else {
              this.alertError("资源为空，请查看链接是否有效");
            }
          },
          fail: () => {
            this.alertError("链接不正确，请查看链接是否有效");
          },
        });
      },

      // 获取AES配置
      getAES() {
        // alert('视频被 AES 加密，点击确认，进行视频解码')
        this.ajax({
          type: "file",
          url: this.aesConf.uri,
          success: (key) => {
            // console.log('getAES', key)
            // this.aesConf.key = this.aesConf.stringToBuffer(key)
            this.aesConf.key = key;
            this.aesConf.decryptor = new AESDecryptor();
            this.aesConf.decryptor.constructor();
            this.aesConf.decryptor.expandKey(this.aesConf.key);
            this.downloadTS();
          },
          fail: () => {
            this.alertError("视频已加密，可试用右下角入口的「无差别提取工具」");
          },
        });
      },

      // ts 片段的 AES 解码
      aesDecrypt(data, index) {
        let iv =
          this.aesConf.iv ||
          new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, index]);
        return this.aesConf.decryptor.decrypt(data, 0, iv.buffer || iv, true);
      },

      // 下载分片
      downloadTS() {
        this.tips = "ts 视频碎片下载中，请稍后";
        let download = () => {
          let isPause = this.isPause; // 使用另一个变量来保持下载前的暂停状态，避免回调后没修改
          let index = this.downloadIndex;
          if (index >= this.rangeDownload.endSegment) {
            return;
          }
          this.downloadIndex++;
          if (this.finishList[index] && this.finishList[index].status === "") {
            this.finishList[index].status = "downloading";
            this.ajax({
              url: this.tsUrlList[index],
              type: "file",
              success: (file) => {
                this.dealTS(
                  file,
                  index,
                  () =>
                    this.downloadIndex < this.rangeDownload.endSegment &&
                    !isPause &&
                    download()
                );
              },
              fail: () => {
                this.errorNum++;
                this.finishList[index].status = "error";
                if (this.downloadIndex < this.rangeDownload.endSegment) {
                  !isPause && download();
                }
              },
            });
          } else if (this.downloadIndex < this.rangeDownload.endSegment) {
            // 跳过已经成功的片段
            !isPause && download();
          }
        };

        // 建立多少个 ajax 线程
        for (
          let i = 0;
          i < Math.min(6, this.rangeDownload.targetSegment - this.finishNum);
          i++
        ) {
          download();
        }
      },

      // 处理 ts 片段，AES 解密、mp4 转码
      dealTS(file, index, callback) {
        const data = this.aesConf.uri ? this.aesDecrypt(file, index) : file;
        this.conversionMp4(data, index, (afterData) => {
          // mp4 转码
          this.mediaFileList[index - this.rangeDownload.startSegment + 1] =
            afterData; // 判断文件是否需要解密
          this.finishList[index].status = "finish";
          this.finishNum++;
          if (this.streamWriter) {
            for (
              let index = this.streamDownloadIndex;
              index < this.mediaFileList.length;
              index++
            ) {
              if (this.mediaFileList[index]) {
                this.streamWriter.write(
                  new Uint8Array(this.mediaFileList[index])
                );
                this.mediaFileList[index] = null;
                this.streamDownloadIndex = index + 1;
              } else {
                break;
              }
            }
            if (this.streamDownloadIndex >= this.rangeDownload.targetSegment) {
              this.streamWriter.close();
            }
          } else if (this.finishNum === this.rangeDownload.targetSegment) {
            let fileName =
              this.title ||
              this.formatTime(this.beginTime, "YYYY_MM_DD hh_mm_ss");
            if (document.title !== "m3u8 downloader") {
              fileName = this.getDocumentTitle();
            }
            this.downloadFile(this.mediaFileList, fileName);
          }
          callback && callback();
        });
      },

      // 转码为 mp4
      conversionMp4(data, index, callback) {
        if (this.isGetMP4) {
          let transmuxer = new muxjs.Transmuxer({
            keepOriginalTimestamps: true,
            duration: parseInt(this.durationSecond),
          });
          transmuxer.on("data", (segment) => {
            if (index === this.rangeDownload.startSegment - 1) {
              let data = new Uint8Array(
                segment.initSegment.byteLength + segment.data.byteLength
              );
              data.set(segment.initSegment, 0);
              data.set(segment.data, segment.initSegment.byteLength);
              callback(data.buffer);
            } else {
              callback(segment.data);
            }
          });
          transmuxer.push(new Uint8Array(data));
          transmuxer.flush();
        } else {
          callback(data);
        }
      },

      // 暂停与恢复
      togglePause() {
        this.isPause = !this.isPause;
        !this.isPause && this.retryAll(true);
      },

      // 重新下载某个片段
      retry(index) {
        if (this.finishList[index].status === "error") {
          this.finishList[index].status = "";
          this.ajax({
            url: this.tsUrlList[index],
            type: "file",
            success: (file) => {
              this.errorNum--;
              this.dealTS(file, index);
            },
            fail: () => {
              this.finishList[index].status = "error";
            },
          });
        }
      },

      // 重新下载所有错误片段
      retryAll(forceRestart) {
        if (!this.finishList.length || this.isPause) {
          return;
        }

        let firstErrorIndex = this.downloadIndex; // 没有错误项目，则每次都递增
        this.finishList.forEach((item, index) => {
          // 重置所有错误片段状态
          if (item.status === "error") {
            item.status = "";
            firstErrorIndex = Math.min(firstErrorIndex, index);
          }
        });
        this.errorNum = 0;
        // 已经全部下载进程都跑完了，则重新启动下载进程
        if (
          this.downloadIndex >= this.rangeDownload.endSegment ||
          forceRestart
        ) {
          this.downloadIndex = firstErrorIndex;
          this.downloadTS();
        } else {
          // 否则只是将下载索引，改为最近一个错误的项目，从那里开始遍历
          this.downloadIndex = firstErrorIndex;
        }
      },

      // 下载整合后的TS文件
      downloadFile(fileDataList, fileName) {
        this.tips = "ts 碎片整合中，请留意浏览器下载";
        let fileBlob = null;
        let a = document.createElement("a");
        if (this.isGetMP4) {
          fileBlob = new Blob(fileDataList, { type: "video/mp4" }); // 创建一个Blob对象，并设置文件的 MIME 类型
          a.download = fileName + ".mp4";
        } else {
          fileBlob = new Blob(fileDataList, { type: "video/MP2T" }); // 创建一个Blob对象，并设置文件的 MIME 类型
          a.download = fileName + ".ts";
        }
        a.href = URL.createObjectURL(fileBlob);
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        a.remove();
      },

      // 格式化时间
      formatTime(date, formatStr) {
        const formatType = {
          Y: date.getFullYear(),
          M: date.getMonth() + 1,
          D: date.getDate(),
          h: date.getHours(),
          m: date.getMinutes(),
          s: date.getSeconds(),
        };
        return formatStr.replace(/Y+|M+|D+|h+|m+|s+/g, (target) =>
          (new Array(target.length).join("0") + formatType[target[0]]).substr(
            -target.length
          )
        );
      },

      // 强制下载现有片段
      forceDownload() {
        if (this.mediaFileList.length) {
          let fileName =
            this.title ||
            this.formatTime(this.beginTime, "YYYY_MM_DD hh_mm_ss");
          if (document.title !== "m3u8 downloader") {
            fileName = this.getDocumentTitle();
          }
          this.downloadFile(this.mediaFileList, fileName);
        } else {
          alert("当前无已下载片段");
        }
      },

      // 发生错误，进行提示
      alertError(tips) {
        alert(tips);
        this.downloading = false;
        this.tips = "m3u8 视频在线提取工具";
      },

      // 拷贝本页面本身，解决跨域问题
      copyCode() {
        if (this.tips !== "代码下载中，请稍后") {
          this.tips = "代码下载中，请稍后";
          this.ajax({
            url: "./index.html",
            success: (fileStr) => {
              let fileList = fileStr.split(`<!--vue 前端框架--\>`);
              let dom = fileList[0];
              let script = fileList[1] + fileList[2];
              script = script.split("");
              script = script[1] + script[2];

              if (this.url) {
                script = script.replace(
                  `url: '', // 在线链接`,
                  `url: '${this.url}',`
                );
              }

              let codeStr = `
          // 注入html
          let $section = document.createElement('section')
          $section.innerHTML = \`${dom}\`
          $section.style.width = '100%'
          $section.style.height = '800px'
          $section.style.top = '0'
          $section.style.left = '0'
          $section.style.position = 'relative'
          $section.style.zIndex = '9999'
          $section.style.backgroundColor = 'white'
          document.body.appendChild($section);

          // 加载 ASE 解密
          let $ase = document.createElement('script')
          $ase.src = 'https://upyun.luckly-mjw.cn/lib/aes-decryptor.js'

          // 加载 mp4 转码
          let $mp4 = document.createElement('script')
          $mp4.src = 'https://upyun.luckly-mjw.cn/lib/mux-mp4.js'

          // 加载 vue
          let $vue = document.createElement('script')
          $vue.src = 'https://upyun.luckly-mjw.cn/lib/vue.js'

          // 加载 stream 流式下载器
          let $streamSaver = document.createElement('script')
          $streamSaver.src = 'https://upyun.luckly-mjw.cn/lib/stream-saver.js'

          // 监听 vue 加载完成，执行业务代码
          $vue.addEventListener('load', () => {${script}})
          document.body.appendChild($mp4);
          document.body.appendChild($ase);
          document.body.appendChild($streamSaver);
          document.body.appendChild($vue);
          alert('注入成功，请滚动到页面底部，若白屏则等待资源加载')
          `;
              this.copyToClipboard(codeStr);
              this.tips = "复制成功，打开视频网页控制台，注入本代码";
            },
            fail: () => {
              this.alertError("链接不正确，请查看链接是否有效");
            },
          });
        }
      },

      // 拷贝剪切板
      copyToClipboard(content) {
        clearTimeout(this.timeouter);

        if (!document.queryCommandSupported("copy")) {
          return false;
        }

        let $input = document.createElement("textarea");
        $input.style.opacity = "0";
        $input.value = content;
        document.body.appendChild($input);
        $input.select();

        const result = document.execCommand("copy");
        document.body.removeChild($input);
        $input = null;

        return result;
      },
    },
  });
});
document.body.appendChild($mp4);
document.body.appendChild($ase);
document.body.appendChild($streamSaver);
document.body.appendChild($vue);
alert("注入成功，请滚动到页面底部，若白屏则等待资源加载");
