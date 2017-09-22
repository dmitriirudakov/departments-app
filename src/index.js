import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
window.jQuery = window.$ = $;
require('bootstrap');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
