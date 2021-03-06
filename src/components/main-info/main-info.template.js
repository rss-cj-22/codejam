import translate from '../../utils/translate';

export default function () {
  return ` <div class="container py-5">
          <div class="row">
            <h1 class="content-item-title">${translate("Выдающиеся фотографы Беларуси")}</h1>
            <article class="content-article welcome-article">
              <p>
                ${translate('website-info-first')}
              </p>
              <p>
                ${translate('website-info-second')}
              </p>
            </article>
          </div>
        </div>`;
}
