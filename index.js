const $section = document.createElement("section");
$section.innerHTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="rootxxx"></div>
  </body>
  <script type="text/babel" name="qwe">
  const { useState, useRef } = React;

  const App = () => {
    const [href, setHref] = useState('');
    const downloadingRef = useRef(false);
    const onClick = () => {
      if (!href) {
        alert('请输入链接');
        return;
      }
      if (!href.toLowerCase().includes('m3u8')) {
        alert('链接有误，请重新输入');
        return;
      }

      if (downloadingRef.current) {
        alert('下载中');
        return;
      }
      downloadingRef.current = true;
    }

    return (
      <div style={{ padding: '20px 16px' }}>
        <input type="text" value={href} onChange={e => setHref(e.target.value)} accept=".ttf" placeholder="请输入 m3u8 链接" />
        <button onClick={onClick}>解析m3u8</button>
      </div>
    );
  };
  ReactDOM.render(React.createElement(App), document.getElementById('rootxxx'));
  </script>
</html>
`;

$section.style.width = "100%";
$section.style.height = "800px";
$section.style.top = "0";
$section.style.left = "0";
$section.style.position = "relative";
$section.style.zIndex = "9999";
$section.style.backgroundColor = "white";
document.body.appendChild($section);

function __loadScript(url) {
  return new Promise((res) => {
    const s = document.createElement("script");
    s.src = url;
    s.addEventListener("load", () => res(s));
    document.body.appendChild(s);
  });
}

Promise.all([
  __loadScript("https://unpkg.com/react@17/umd/react.production.min.js"),
  __loadScript("https://unpkg.com/@babel/standalone@7.13.15/babel.min.js"),
])
.then(() => __loadScript("https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"))
.then(() => {
  const scripts = document.querySelector('script[name="qwe"]');
  const { code } = Babel.transform(scripts.innerText, { presets: ["react"] });
  eval(code);
  alert("inject ok, scroll end to get it");
});
