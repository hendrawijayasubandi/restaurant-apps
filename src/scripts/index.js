import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/apps';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
