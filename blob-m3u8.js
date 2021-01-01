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
  .m-p-other, .m-p-github {
    position: fixed;
    right: 50px;
    bottom: 70px;
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
  .m-p-github:hover, .m-p-other:hover, .m-p-help {
    opacity: 0.9;
  }
  .m-p-other {
    bottom: 30px;
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
  }
  .m-p-segment .error {
    cursor: pointer;
    background-color: #DC5350;
  }
  .m-p-cross, .m-p-final {
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
  .m-p-final {
    margin-top: 10px;
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
<section id="m-app" v-cloak>
  <!--顶部操作提示-->
  <section class="m-p-action g-box">{{tips}}</section>
  <a class="m-p-help" target="_blank" href="https://segmentfault.com/a/1190000021847172">?</a>
  <a class="m-p-github" target="_blank" href="https://github.com/Momo707577045/m3u8-downloader">github</a>

  <!--文件载入-->
  <div class="m-p-temp-url">测试链接：http://1257120875.vod2.myqcloud.com/0ef121cdvodtransgzp1257120875/3055695e5285890780828799271/v.f230.m3u8</div>
  <section class="m-p-input-container">
    <input type="text" v-model="url" accept=".ttf" :disable="downloading" placeholder="请输入 m3u8 链接">
    <div class="" v-if="!downloading || !isGetMP4" @click="getM3U8" :class="{'disable':downloading}">原格式下载</div>
    <div class="" v-if="!downloading || isGetMP4" @click="getMP4" :class="{'disable':downloading}">转码为MP4下载</div>
  </section>

  <a class="m-p-final" target="_blank" href="https://segmentfault.com/a/1190000025182822">下载的视频看不了？试试这个终结解决方案「无差别视频提取工具」</a>

  <template v-if="finishList.length > 0">
    <div class="m-p-line"></div>
    <div class="m-p-retry" v-if="errorNum && downloadIndex >= tsUrlList.length" @click="retryAll">重新下载错误片段</div>
    <div class="m-p-force" v-if="mediaFileList.length" @click="forceDownload">强制下载现有片段</div>
    <div class="m-p-tips">碎片总量：{{ tsUrlList.length }}，已下载：{{ finishNum }}，错误：{{ errorNum }}，进度：{{ (finishNum / tsUrlList.length * 100).toFixed(2) }}%</div>
    <div class="m-p-tips">若某视频碎片下载发生错误，将标记为红色，可点击相应图标进行重试</div>
    <section class="m-p-segment">
      <div class="item" v-for="(item, index) in finishList" :class="[item.status]" :title="item.title" @click="retry(index)">{{ index + 1 }}</div>
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
let $mux = document.createElement('script');
$mux.src = 'https://cdn.jsdelivr.net/npm/mux.js@5.7.0/dist/mux.js';

// 监听 vue 加载完成，执行业务代码
$vue.addEventListener('load', () => {
  new Vue({
    el: '#m-app',

    data() {
      return {
        url: '', // 在线链接
        tips: 'm3u8 视频在线提取工具', // 顶部提示
        isGetMP4: false, // 是否转码为 MP4 下载
        durationSecond: 0, // 视频持续时长
        downloading: false, // 是否下载中
        beginTime: '', // 开始下载的时间
        errorNum: 0, // 错误数
        finishNum: 0, // 已下载数
        downloadIndex: 0, // 当前下载片段
        finishList: [], // 下载完成项目
        tsUrlList: [], // ts URL数组
        mediaFileList: [], // 下载的媒体数组
        aesConf: {
          // AES 视频解密配置
          method: '', // 加密算法
          uri: '', // key 所在文件路径
          iv: '', // 偏移值
          key: '', // 秘钥
          decryptor: null, // 解码器对象

          stringToBuffer: function (str) {
            let val = '';
            for (let i = 0; i < str.length; i++) {
              if (val === '') {
                val = str.charCodeAt(i).toString(16);
              } else {
                val += ',' + str.charCodeAt(i).toString(16);
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

    created() {
      window.addEventListener('keyup', this.onKeyup);
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
              let status = xhr.status;
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
          return domain[0] + '//' + domain[2] + targetURL;
        } else {
          let domain = baseURL.split('/');
          domain.pop();
          return domain.join('/') + '/' + targetURL;
        }
      },

      // 解析为 mp4 下载
      getMP4() {
        this.isGetMP4 = true;
        this.getM3U8();
      },

      // 获取在线文件
      getM3U8() {
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
        this.ajax({ url: this.url })
          .then((m3u8Str) => {
            this.tsUrlList = [];

            // 提取 ts 视频片段地址
            m3u8Str.split('\n').forEach((item) => {
              if (this.isGetMP4 && item.toUpperCase().includes('#EXTINF:')) {
                // 计算视频总时长，设置 mp4 信息时使用
                this.durationSecond += parseFloat(item.split('#EXTINF:')[1]);
              }
              if (item.toLowerCase().includes('.ts')) {
                this.tsUrlList.push(this.applyURL(item, this.url));
                this.finishList.push({
                  title: item,
                  status: '',
                });
              }
            });

            // 检测视频 AES 加密
            if (m3u8Str.includes('#EXT-X-KEY')) {
              this.aesConf.method = (m3u8Str.match(/(.*METHOD=([^,]+))/) || [
                '',
                '',
                '',
              ])[2];
              this.aesConf.uri = (m3u8Str.match(/(.*URI="([^"]+))"/) || [
                '',
                '',
                '',
              ])[2];
              this.aesConf.iv = (m3u8Str.match(/(.*IV=([^,]+))/) || [
                '',
                '',
                '',
              ])[2];
              this.aesConf.iv = this.aesConf.iv
                ? this.aesConf.stringToBuffer(this.aesConf.iv)
                : '';
              this.aesConf.uri = this.applyURL(this.aesConf.uri, this.url);

              this.getAES();
            } else if (this.tsUrlList.length > 0) {
              // 如果视频没加密，则直接下载片段，否则先下载秘钥
              this.downloadTS();
            } else {
              this.alertError('资源为空，请查看链接是否有效');
            }
          })
          .catch(() => {
            this.alertError('链接不正确，请查看链接是否有效');
          });
      },

      // 获取AES配置
      getAES() {
        alert('视频被 AES 加密，点击确认，进行视频解码');
        this.ajax({ url: this.aesConf.uri })
          .then((key) => {
            this.aesConf.key = this.aesConf.stringToBuffer(key);
            this.aesConf.decryptor = new AESDecryptor();
            this.aesConf.decryptor.constructor();
            this.aesConf.decryptor.expandKey(this.aesConf.key);
            this.downloadTS();
          })
          .catch(() => {
            this.alertError('AES 配置不正确');
          });
      },

      // ts 片段的 AES 解码
      aesDecrypt(data, index) {
        let iv =
          this.aesConf.iv ||
          new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, index]);
        return this.aesConf.decryptor.decrypt(data, 0, iv.buffer, true);
      },

      // 下载分片
      downloadTS() {
        this.tips = 'ts 视频碎片下载中，请稍后';
        let download = () => {
          let index = this.downloadIndex;
          this.downloadIndex++;
          if (this.finishList[index] && this.finishList[index].status === '') {
            this.ajax({
              url: this.tsUrlList[index],
              type: 'file',
            })
              .then((file) => {
                this.dealTS(
                  file,
                  index,
                  () => this.downloadIndex < this.tsUrlList.length && download()
                );
              })
              .catch(() => {
                this.errorNum++;
                this.finishList[index].status = 'error';
                if (this.downloadIndex < this.tsUrlList.length) {
                  download();
                }
              });
          } else if (this.downloadIndex < this.tsUrlList.length) {
            // 跳过已经成功的片段
            download();
          }
        };

        // 建立多少个 ajax 线程
        for (let i = 0; i < 10; i++) {
          download(i);
        }
      },

      // 处理 ts 片段，AES 解密、mp4 转码
      dealTS(file, index, callback) {
        const data = this.aesConf.uri ? this.aesDecrypt(file, index) : file;
        this.conversionMp4(data, index, (afterData) => {
          // mp4 转码
          this.mediaFileList[index] = afterData; // 判断文件是否需要解密
          this.finishList[index].status = 'finish';
          this.finishNum++;
          if (this.finishNum === this.tsUrlList.length) {
            this.downloadFile(
              this.mediaFileList,
              this.formatTime(this.beginTime, 'YYYY_MM_DD hh_mm_ss')
            );
          }
          callback && callback();
        });
      },

      // 转码为 mp4
      conversionMp4(data, index, callback) {
        if (this.isGetMP4) {
          let transmuxer = new muxjs.mp4.Transmuxer({
            keepOriginalTimestamps: true,
            duration: parseInt(this.durationSecond),
          });
          transmuxer.on('data', (segment) => {
            if (index === 0) {
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
          callback(data, index);
        }
      },

      // 重新下载某个片段
      retry(index) {
        if (this.finishList[index].status === 'error') {
          this.finishList[index].status = '';
          this.ajax({
            url: this.tsUrlList[index],
            type: 'file',
          })
            .then((file) => {
              this.errorNum--;
              this.dealTS(file, index);
            })
            .catch(() => {
              this.finishList[index].status = 'error';
            });
        }
      },

      // 重新下载所有错误片段
      retryAll() {
        this.finishList.forEach((item) => {
          // 重置所有片段状态
          if (item.status === 'error') {
            item.status = '';
          }
        });
        this.errorNum = 0;
        this.downloadIndex = 0;
        this.downloadTS();
      },

      // 下载整合后的TS文件
      downloadFile(fileDataList, fileName) {
        this.tips = 'ts 碎片整合中，请留意浏览器下载';
        let fileBlob = null;
        let a = document.createElement('a');
        if (this.isGetMP4) {
          fileBlob = new Blob(fileDataList, { type: 'video/mp4' }); // 创建一个Blob对象，并设置文件的 MIME 类型
          a.download = fileName + '.mp4';
        } else {
          fileBlob = new Blob(fileDataList, { type: 'video/MP2T' }); // 创建一个Blob对象，并设置文件的 MIME 类型
          a.download = fileName + '.ts';
        }
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
        return formatStr.replace(/Y+|M+|D+|h+|m+|s+/g, (target) =>
          (new Array(target.length).join('0') + formatType[target[0]]).substr(
            -target.length
          )
        );
      },

      // 强制下载现有片段
      forceDownload() {
        if (this.mediaFileList.length) {
          this.downloadFile(
            this.mediaFileList,
            this.formatTime(this.beginTime, 'YYYY_MM_DD hh_mm_ss')
          );
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
document.body.appendChild($mux);
alert('注入成功，请滚动到页面底部');
