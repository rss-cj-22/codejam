import 'regenerator-runtime/runtime';
import 'bootstrap';
import './styles/main.scss';
import './styles/index.scss';

import './components/all/index';
import './components/person/index';
import './components/timeline/index';
import './components/author-of-day/index';
import './components/header/index';
import './components/footer/index';
import './components/main-info/index';
import metaData from './utils/meta';

window.onload = () => {
  metaData();
};
