// src/templates/page.js

import React from 'react';
import Helmet from 'react-helmet';

import Leporello from '~/components/atoms/leporello';
import LeporelloGraphicRealItem from '~/components/organisms/leporello-graphic-real-item';

import i18n from '~/i18n';


const PageTemplate = ({ pageContext }) => {
  const graphic = pageContext;
  const title = (graphic.titles[0] && graphic.titles[0].title) || '';

  i18n(graphic.langCode);

  return (
    <div
      className="page"
      data-template="page"
    >
      <Helmet>
        <title>Grafiken | {title} | Real</title>
      </Helmet>

      <section className="body">
        <Leporello>
          <LeporelloGraphicRealItem
            graphic={graphic}
          />
        </Leporello>
      </section>
    </div>
  );
};

export default PageTemplate;
