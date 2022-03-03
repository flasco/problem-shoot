// 注入html
let $section = document.createElement('section');
$section.innerHTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="keywords" content="m3u8 downloader for web">
  <meta name="description" content="m3u8 downloader for web, Momo's Blog, LuckyMomo">
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
    margin-bottom: 30px;
    margin-right: 12px;
    display: block;
    width: 280px;
    padding: 16px;
    font-size: 24px;
    border-radius: 4px;
    box-shadow: none;
    color: #444444;
    border: 1px solid #cccccc;
  }
  .m-p-input-container div {
    position: relative;
    display: inline-block;
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
  .m-p-input-container div:last-child {
    margin-left: 10px;
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
  }
  .m-p-segment .finish {
    background-color: #0ACD76;
    cursor: not-allowed;
  }
  .m-p-segment .error {
    cursor: pointer;
    background-color: #DC5350;
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
<section id="m-app" v-cloak>
  <!--顶部操作提示-->
  <section class="m-p-action g-box">{{tips}}</section>
  <a class="m-p-help" target="_blank" href="https://segmentfault.com/a/1190000021847172">?</a>
  <!--文件载入-->
  <div class="m-p-temp-url">测试链接：http://1257120875.vod2.myqcloud.com/0ef121cdvodtransgzp1257120875/3055695e5285890780828799271/v.f230.m3u8</div>
  <section class="m-p-input-container">
    <input type="text" v-model="url" accept=".ttf" :disable="downloading" placeholder="请输入 m3u8 链接">
    <div @click="getM3U8" :class="{'disable':downloading}">原格式下载</div>
    <div @click="autoGet" :class="{'disable':downloading}">auto-get</div>
  </section>
  <template v-if="workList.length > 0">
    <div class="m-p-line"></div>
    <div class="m-p-retry" v-if="errorNum" @click="retryAll">重新下载错误片段</div>
    <div class="m-p-force" v-if="mediaFileList.length" @click="forceDownload">强制下载现有片段</div>
    <div class="m-p-tips">碎片总量：{{ workList.length }}，已下载：{{ finishNum }}，错误：{{ errorNum }}，进度：{{ (finishNum / workList.length * 100).toFixed(2) }}%</div>
    <div class="m-p-tips">若某视频碎片下载发生错误，将标记为红色，可点击相应图标进行重试</div>
    <section class="m-p-segment">
      <div class="item" v-for="(item, index) in workList" :class="[item.status]" :title="item.title" @click="retry(index)">{{ index + 1 }}</div>
    </section>
  </template>
</section>
</body>
`;
$section.style.width = '100%';
$section.style.height = '800px';
$section.style.top = '0';
$section.style.left = '0';
$section.style.position = 'relative';
$section.style.zIndex = '9999';
$section.style.backgroundColor = 'white';
document.body.appendChild($section);

// 加载 vue
let $vue = document.createElement('script');
$vue.src = 'https://cdn.bootcss.com/vue/2.6.10/vue.min.js';

class Queue {
  #defferedQueue = [];
  #workingSet = new Set();
  #isKilled = false;
  #concurrent;

  constructor(concurrent = 5) {
    if (concurrent < 1) {
      throw new Error('make sure concurrent >=1');
    }
    this.#concurrent = concurrent;
  }

  get inProgress() {
    return this.#workingSet.size;
  }

  _workPush = () => {
    if (this.#isKilled) {
      return;
    }
    while (this.#workingSet.size < this.#concurrent && this.#defferedQueue.length > 0) {
      const item = this.#defferedQueue.shift();
      const task = this.work(item);
      task.finally(() => {
        this.#workingSet.delete(task);
        // console.log('delete!', this.#workingSet.entries());
        this._workPush();
      });
      this.#workingSet.add(task);
      // console.log('add!', this.#workingSet.entries());
    }

    if (this.#workingSet.size === 0) {
      this.drain();
    }
  };

  drain() {
    console.log('empty...');
  }

  push(...item) {
    this.#defferedQueue.push(...item);
    this._workPush();
  }

  kill() {
    this.#workingSet.clear();
    this.#defferedQueue = [];
    this.#isKilled = true;
  }

  reset() {
    this.#isKilled = false;
  }

  work(item) {
    return new Promise(resolve => {
      console.log('current - ', this.inProgress, 'default work, plz overload it', item);
      setTimeout(resolve, (Math.random() * 5000) | 0);
    });
  }
}

function removePadding(buffer) {
  const outputBytes = buffer.byteLength;
  const paddingBytes = outputBytes && new DataView(buffer).getUint8(outputBytes - 1);
  if (paddingBytes) {
    return buffer.slice(0, outputBytes - paddingBytes);
  } else {
    return buffer;
  }
}

function AESDecryptor() {
  return {
    constructor() {
      this.rcon = [0x0, 0x1, 0x2, 0x4, 0x8, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
      this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)];
      this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)];
      this.sBox = new Uint32Array(256);
      this.invSBox = new Uint32Array(256);

      // Changes during runtime
      this.key = new Uint32Array(0);

      this.initTable();
    },

    // Using view.getUint32() also swaps the byte order.
    uint8ArrayToUint32Array_(arrayBuffer) {
      let view = new DataView(arrayBuffer);
      let newArray = new Uint32Array(4);
      for (let i = 0; i < 4; i++) {
        newArray[i] = view.getUint32(i * 4);
      }

      return newArray;
    },

    initTable() {
      let { sBox } = this;
      let { invSBox } = this;
      let { subMix } = this;
      let subMix0 = subMix[0];
      let subMix1 = subMix[1];
      let subMix2 = subMix[2];
      let subMix3 = subMix[3];
      let { invSubMix } = this;
      let invSubMix0 = invSubMix[0];
      let invSubMix1 = invSubMix[1];
      let invSubMix2 = invSubMix[2];
      let invSubMix3 = invSubMix[3];

      let d = new Uint32Array(256);
      let x = 0;
      let xi = 0;
      let i = 0;
      for (i = 0; i < 256; i++) {
        if (i < 128) {
          d[i] = i << 1;
        } else {
          d[i] = (i << 1) ^ 0x11b;
        }
      }

      for (i = 0; i < 256; i++) {
        let sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
        sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
        sBox[x] = sx;
        invSBox[sx] = x;

        // Compute multiplication
        let x2 = d[x];
        let x4 = d[x2];
        let x8 = d[x4];

        // Compute sub/invSub bytes, mix columns tables
        let t = (d[sx] * 0x101) ^ (sx * 0x1010100);
        subMix0[x] = (t << 24) | (t >>> 8);
        subMix1[x] = (t << 16) | (t >>> 16);
        subMix2[x] = (t << 8) | (t >>> 24);
        subMix3[x] = t;

        // Compute inv sub bytes, inv mix columns tables
        t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
        invSubMix0[sx] = (t << 24) | (t >>> 8);
        invSubMix1[sx] = (t << 16) | (t >>> 16);
        invSubMix2[sx] = (t << 8) | (t >>> 24);
        invSubMix3[sx] = t;

        // Compute next counter
        if (!x) {
          x = xi = 1;
        } else {
          x = x2 ^ d[d[d[x8 ^ x2]]];
          xi ^= d[d[xi]];
        }
      }
    },

    expandKey(keyBuffer) {
      // convert keyBuffer to Uint32Array
      let key = this.uint8ArrayToUint32Array_(keyBuffer);
      let sameKey = true;
      let offset = 0;

      while (offset < key.length && sameKey) {
        sameKey = key[offset] === this.key[offset];
        offset++;
      }

      if (sameKey) {
        return;
      }

      this.key = key;
      let keySize = (this.keySize = key.length);

      if (keySize !== 4 && keySize !== 6 && keySize !== 8) {
        throw new Error(`Invalid aes key size=${keySize}`);
      }

      let ksRows = (this.ksRows = (keySize + 6 + 1) * 4);
      let ksRow, invKsRow;

      let keySchedule = (this.keySchedule = new Uint32Array(ksRows));
      let invKeySchedule = (this.invKeySchedule = new Uint32Array(ksRows));
      let sbox = this.sBox;
      let { rcon } = this;

      let { invSubMix } = this;
      let invSubMix0 = invSubMix[0];
      let invSubMix1 = invSubMix[1];
      let invSubMix2 = invSubMix[2],
             invSubMix3 = invSubMix[3];

           let prev;
           let t;

      for (ksRow = 0; ksRow < ksRows; ksRow++) {
        if (ksRow < keySize) {
          prev = keySchedule[ksRow] = key[ksRow];
          continue;
        }
        t = prev;

        if (ksRow % keySize === 0) {
          // Rot word
          t = (t << 8) | (t >>> 24);

          // Sub word
          t = (sbox[t >>> 24] << 24) | (sbox[(t >>> 16) & 0xff] << 16) | (sbox[(t >>> 8) & 0xff] << 8) | sbox[t & 0xff];

          // Mix Rcon
          t ^= rcon[(ksRow / keySize) | 0] << 24;
        } else if (keySize > 6 && ksRow % keySize === 4) {
          // Sub word
          t = (sbox[t >>> 24] << 24) | (sbox[(t >>> 16) & 0xff] << 16) | (sbox[(t >>> 8) & 0xff] << 8) | sbox[t & 0xff];
        }

        keySchedule[ksRow] = prev = (keySchedule[ksRow - keySize] ^ t) >>> 0;
      }

      for (invKsRow = 0; invKsRow < ksRows; invKsRow++) {
        ksRow = ksRows - invKsRow;
        if (invKsRow & 3) {
          t = keySchedule[ksRow];
        } else {
          t = keySchedule[ksRow - 4];
        }

        if (invKsRow < 4 || ksRow <= 4) {
          invKeySchedule[invKsRow] = t;
        } else {
          invKeySchedule[invKsRow] =
            invSubMix0[sbox[t >>> 24]] ^
            invSubMix1[sbox[(t >>> 16) & 0xff]] ^
            invSubMix2[sbox[(t >>> 8) & 0xff]] ^
            invSubMix3[sbox[t & 0xff]];
        }

        invKeySchedule[invKsRow] = invKeySchedule[invKsRow] >>> 0;
      }
    },

    // Adding this as a method greatly improves performance.
    networkToHostOrderSwap(word) {
      return (word << 24) | ((word & 0xff00) << 8) | ((word & 0xff0000) >> 8) | (word >>> 24);
    },

    decrypt(inputArrayBuffer, offset, aesIV, removePKCS7Padding) {
      let nRounds = this.keySize + 6;
      let { invKeySchedule } = this;
      let invSBOX = this.invSBox;

      let { invSubMix } = this;
      let invSubMix0 = invSubMix[0];
      let invSubMix1 = invSubMix[1];
      let invSubMix2 = invSubMix[2];
      let invSubMix3 = invSubMix[3];

      let initVector = this.uint8ArrayToUint32Array_(aesIV);
      let initVector0 = initVector[0];
      let initVector1 = initVector[1];
      let initVector2 = initVector[2];
      let initVector3 = initVector[3];

      let inputInt32 = new Int32Array(inputArrayBuffer);
      let outputInt32 = new Int32Array(inputInt32.length);

      let t0, t1, t2, t3, s0, s1, s2, s3, inputWords0, inputWords1, inputWords2, inputWords3, ksRow, i;
      let swapWord = this.networkToHostOrderSwap;

      while (offset < inputInt32.length) {
        inputWords0 = swapWord(inputInt32[offset]);
        inputWords1 = swapWord(inputInt32[offset + 1]);
        inputWords2 = swapWord(inputInt32[offset + 2]);
        inputWords3 = swapWord(inputInt32[offset + 3]);

        s0 = inputWords0 ^ invKeySchedule[0];
        s1 = inputWords3 ^ invKeySchedule[1];
        s2 = inputWords2 ^ invKeySchedule[2];
        s3 = inputWords1 ^ invKeySchedule[3];

        ksRow = 4;

        // Iterate through the rounds of decryption
        for (i = 1; i < nRounds; i++) {
          t0 =
            invSubMix0[s0 >>> 24] ^
            invSubMix1[(s1 >> 16) & 0xff] ^
            invSubMix2[(s2 >> 8) & 0xff] ^
            invSubMix3[s3 & 0xff] ^
            invKeySchedule[ksRow];
          t1 =
            invSubMix0[s1 >>> 24] ^
            invSubMix1[(s2 >> 16) & 0xff] ^
            invSubMix2[(s3 >> 8) & 0xff] ^
            invSubMix3[s0 & 0xff] ^
            invKeySchedule[ksRow + 1];
          t2 =
            invSubMix0[s2 >>> 24] ^
            invSubMix1[(s3 >> 16) & 0xff] ^
            invSubMix2[(s0 >> 8) & 0xff] ^
            invSubMix3[s1 & 0xff] ^
            invKeySchedule[ksRow + 2];
          t3 =
            invSubMix0[s3 >>> 24] ^
            invSubMix1[(s0 >> 16) & 0xff] ^
            invSubMix2[(s1 >> 8) & 0xff] ^
            invSubMix3[s2 & 0xff] ^
            invKeySchedule[ksRow + 3];
          // Update state
          s0 = t0;
          s1 = t1;
          s2 = t2;
          s3 = t3;

          ksRow = ksRow + 4;
        }

        // Shift rows, sub bytes, add round key
        t0 =
          (invSBOX[s0 >>> 24] << 24) ^
          (invSBOX[(s1 >> 16) & 0xff] << 16) ^
          (invSBOX[(s2 >> 8) & 0xff] << 8) ^
          invSBOX[s3 & 0xff] ^
          invKeySchedule[ksRow];
        t1 =
          (invSBOX[s1 >>> 24] << 24) ^
          (invSBOX[(s2 >> 16) & 0xff] << 16) ^
          (invSBOX[(s3 >> 8) & 0xff] << 8) ^
          invSBOX[s0 & 0xff] ^
          invKeySchedule[ksRow + 1];
        t2 =
          (invSBOX[s2 >>> 24] << 24) ^
          (invSBOX[(s3 >> 16) & 0xff] << 16) ^
          (invSBOX[(s0 >> 8) & 0xff] << 8) ^
          invSBOX[s1 & 0xff] ^
          invKeySchedule[ksRow + 2];
        t3 =
          (invSBOX[s3 >>> 24] << 24) ^
          (invSBOX[(s0 >> 16) & 0xff] << 16) ^
          (invSBOX[(s1 >> 8) & 0xff] << 8) ^
          invSBOX[s2 & 0xff] ^
          invKeySchedule[ksRow + 3];
        ksRow = ksRow + 3;

        // Write
        outputInt32[offset] = swapWord(t0 ^ initVector0);
        outputInt32[offset + 1] = swapWord(t3 ^ initVector1);
        outputInt32[offset + 2] = swapWord(t2 ^ initVector2);
        outputInt32[offset + 3] = swapWord(t1 ^ initVector3);

        // reset initVector to last 4 unsigned int
        initVector0 = inputWords0;
        initVector1 = inputWords1;
        initVector2 = inputWords2;
        initVector3 = inputWords3;

        offset = offset + 4;
      }

      return removePKCS7Padding ? removePadding(outputInt32.buffer) : outputInt32.buffer;
    },

    destroy() {
      this.key = undefined;
      this.keySize = undefined;
      this.ksRows = undefined;

      this.sBox = undefined;
      this.invSBox = undefined;
      this.subMix = undefined;
      this.invSubMix = undefined;
      this.keySchedule = undefined;
      this.invKeySchedule = undefined;

      this.rcon = undefined;
    },
  };
}

const workStatus = {
  initial: 'initial',
  finish: 'finish',
  error: 'error',
};

// 监听 vue 加载完成，执行业务代码
$vue.addEventListener('load', () => {
  new Vue({
    el: '#m-app',

    data() {
      return {
        url: '', // 在线链接
        tips: 'm3u8 视频在线提取工具', // 顶部提示
        durationSecond: 0, // 视频持续时长
        downloading: false, // 是否下载中
        beginTime: '', // 开始下载的时间
        workList: [], // 下载完成项目
        mediaFileList: [], // 下载的媒体数组
        aesConf: {
          // AES 视频解密配置
          method: '', // 加密算法
          uri: '', // key 所在文件路径
          iv: '', // 偏移值
          key: '', // 秘钥
          decryptor: null, // 解码器对象

          stringToBuffer(str) {
            let val = '';
            for (let i = 0; i < str.length; i++) {
              if (val === '') {
                val = str.charCodeAt(i).toString(16);
              } else {
                val += `,${str.charCodeAt(i).toString(16)}`;
              }
            }

            // 将16进制转化为ArrayBuffer
            return new Uint8Array(
              val.match(/[\da-f]{2}/gi).map(function (h) {
                return parseInt(h, 16);
              })
            ).buffer;
          },
        },
      };
    },

    computed: {
      errorNum() {
        // 错误数
        return this.workList.filter(item => item.status === workStatus.error).length;
      },
      finishNum() {
        // 已下载数
        return this.workList.filter(item => item.status === workStatus.finish).length;
      },
    },

    created() {
      window.addEventListener('keyup', this.onKeyup);
      this.queue = new Queue(6);
      this.queue.work = this.download;
      this.queue.drain = () => {
        const isAllReady = this.workList.every(i => i.status === workStatus.finish);
        if (isAllReady) {
          this.downloadFile(this.mediaFileList, this.formatTime(this.beginTime, 'YYYY_MM_DD hh_mm_ss'));
        }
      };
    },

    beforeDestroy() {
      window.removeEventListener('keyup', this.onKeyup);
    },

    methods: {
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
        return new Promise((resolve, reject) => {
          let xhr = new XMLHttpRequest();
          if (options.type === 'file') {
            xhr.responseType = 'arraybuffer';
          }

          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              const { status } = xhr;
              if (status >= 200 && status < 300) {
                resolve(xhr.response);
              } else {
                reject(status);
              }
            }
          };

          xhr.open('GET', options.url, true);
          xhr.send(null);
        });
      },

      // 合成URL
      applyURL(targetURL, baseURL) {
        baseURL = baseURL || location.href;
        if (targetURL.indexOf('http') === 0) {
          return targetURL;
        } else if (targetURL[0] === '/') {
          let domain = baseURL.split('/');
          return `${domain[0]}//${domain[2]}${targetURL}`;
        } else {
          let domain = baseURL.split('/');
          domain.pop();
          return `${domain.join('/')}/${targetURL}`;
        }
      },

      autoGet() {
        const sourceEle = document.querySelector('[type="application/x-mpegURL"]');
        if (!sourceEle) {
          alert('m3u8 source url not found');
        } else {
          this.url = sourceEle.src;
        }
      },
      // 获取在线文件
      async getM3U8() {
        if (!this.url) {
          alert('请输入链接');
          return;
        }
        if (!this.url.toLowerCase().includes('m3u8')) {
          alert('链接有误，请重新输入');
          return;
        }
        if (this.downloading) {
          alert('资源下载中，请稍后');
          return;
        }

        this.downloading = true;

        this.tips = 'm3u8 文件下载中，请稍后';
        this.beginTime = new Date();

        const m3u8Str = await this.ajax({ url: this.url });

        // 提取 ts 视频片段地址
        m3u8Str.split('\n').forEach((item) => {
          if (item.toLowerCase().includes('.ts')) {
            this.workList.push({
              title: this.applyURL(item, this.url),
              status: '',
            });
          }
        });

        await this.AESConfInit(m3u8Str);

        if (this.workList.length) {
          this.workList
            .filter(item => item.status !== workStatus.finish)
            .forEach((item, index) => {
              item.index = index;
              this.queue.push({ index, url: item.title });
            });
        } else {
          this.alertError('资源为空，请查看链接是否有效');
        }
      },

      // 获取AES配置
      async AESConfInit(m3u8Str) {
        if (m3u8Str.includes('#EXT-X-KEY')) {
          alert('视频被 AES 加密，点击确认，进行视频解码');

          this.aesConf.method = (m3u8Str.match(/(.*METHOD=([^,]+))/) || ['', '', ''])[2];
          this.aesConf.uri = (m3u8Str.match(/(.*URI="([^"]+))"/) || ['', '', ''])[2];
          this.aesConf.iv = (m3u8Str.match(/(.*IV=([^,]+))/) || ['', '', ''])[2];
          this.aesConf.iv = this.aesConf.iv ? this.aesConf.stringToBuffer(this.aesConf.iv) : '';
          this.aesConf.uri = this.applyURL(this.aesConf.uri, this.url);

          const key = await this.ajax({ url: this.aesConf.uri });
          this.aesConf.key = this.aesConf.stringToBuffer(key);
          this.aesConf.decryptor = new AESDecryptor();
          this.aesConf.decryptor.constructor();
          this.aesConf.decryptor.expandKey(this.aesConf.key);
          this.downloadTS();
        }
      },

      // ts 片段的 AES 解码
      aesDecrypt(data, index) {
        let iv = this.aesConf.iv || new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, index]);
        return this.aesConf.decryptor.decrypt(data, 0, iv.buffer, true);
      },

      async download({ url, index }) {
        try {
          const file = await this.ajax({
            url,
            type: 'file',
          });

          const data = this.aesConf.uri ? this.aesDecrypt(file, index) : file;
          this.mediaFileList[index] = data;
          this.workList[index].status = workStatus.finish;
        } catch (error) {
          this.workList[index].status = workStatus.error;
        }
      },

      // 重新下载某个片段
      retry(index) {
        if (this.workList[index].status === workStatus.error) {
          this.workList[index].status = workStatus.initial;
          this.queue.push({ index, url: this.workList[index].title });
        }
      },

      // 重新下载所有错误片段
      retryAll() {
        this.workList
          .filter(item => item.status !== workStatus.finish)
          .forEach(item => {
            this.workList[item.index].status = workStatus.initial;
            this.queue.push({ index: item.index, url: item.title });
          });
      },

      // 下载整合后的TS文件
      downloadFile(fileDataList, fileName) {
        this.tips = 'ts 碎片整合中，请留意浏览器下载';
        const a = document.createElement('a');
        
        const fileBlob = new Blob(fileDataList, { type: 'video/MP2T' }); // 创建一个Blob对象，并设置文件的 MIME 类型
        a.download = `${fileName}.ts`;
        a.href = URL.createObjectURL(fileBlob);
        a.style.display = 'none';
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
        return formatStr.replace(/Y+|M+|D+|h+|m+|s+/g, target =>
          (new Array(target.length).join('0') + formatType[target[0]]).substr(-target.length)
        );
      },

      // 强制下载现有片段
      forceDownload() {
        if (this.mediaFileList.length) {
          this.downloadFile(this.mediaFileList, this.formatTime(this.beginTime, 'YYYY_MM_DD hh_mm_ss'));
        } else {
          alert('当前无已下载片段');
        }
      },

      // 发生错误，进行提示
      alertError(tips) {
        alert(tips);
        this.downloading = false;
        this.tips = 'm3u8 视频在线提取工具';
      },
    },
  });
});

document.body.appendChild($vue);
alert('注入成功，请滚动到页面底部');
