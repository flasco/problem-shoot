const section = document.createElement('section');

section.innerHTML = `
<!doctype html>
<html>
  <head>
    <script async src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.1/umd/react.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.1/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

document.body.appendChild(section);

const loadScript = (str, callback = () => {}) => {
  const scripts = document.createElement('script');
  scripts.src = str;
  scripts.addEventListener('load', callback);
  document.body.appendChild(scripts);
};

loadScript(
  'https://cdnjs.cloudflare.com/ajax/libs/react/17.0.1/umd/react.production.min.js'
);
loadScript(
  'https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.1/umd/react-dom.production.min.js'
);
loadScript('https://unpkg.com/@babel/standalone/babel.min.js');

const scripts = document.createElement('script');
scripts.type = 'text/label';
scripts.innerHTML = () => {
  const Tester = () => {
    return `<div>123</div>`
  };
  ReactDOM.render(React.createElement(Tester, section.querySelector('#root')))
};
document.body.appendChild(scripts);

alert('注入成功，请滚动到页面底部');
