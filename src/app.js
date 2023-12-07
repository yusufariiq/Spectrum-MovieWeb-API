import 'regenerator-runtime';
import './styles/style.css';
import './script/component/content-title.js';
import './script/component/footer-bottom.js';
import {main, search} from './script/view/main.js';

document.addEventListener('DOMContentLoaded', main);
document.addEventListener('DOMContentLoaded', search);