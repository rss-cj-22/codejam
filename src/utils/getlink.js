import { getLanguage } from './translate';

const getLink = (link, lang, params) => {
  if (!lang) {
    lang = getLanguage(); // eslint-disable-line no-param-reassign
  }

  const urlParams = new URLSearchParams(params ? window.location.search : '');
  urlParams.set('lang', lang);

  return `${link}?${urlParams.toString()}`;
};

export default getLink;
