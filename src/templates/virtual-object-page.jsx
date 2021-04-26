/* src/templates/virtual-object-page.js */

import React, { useState } from 'react';
import Helmet from 'react-helmet';

import Navigation from '~/components/molecules/navigation';
import Leporello from '~/components/atoms/leporello';
import LeporelloGraphicDetailsItem from '~/components/organisms/leporello-graphic-details-item';
import LeporelloGraphicReprintsItem from '~/components/organisms/leporello-graphic-reprints-item';
import LeporelloArtefactRelatedWorksItem from '~/components/organisms/leporello-artefact-related-works-item';
import LeporelloGraphicRealItem from '~/components/organisms/leporello-graphic-real-item';

import i18n from '~/i18n';

const PageTemplate = ({ pageContext, location }) => {
  const graphic = pageContext;
  const title = (graphic.titles[0] && graphic.titles[0].title) || '';

  i18n(graphic.metadata.langCode);

  const [selectedReprintItem, setSelectedReprintItem] = useState(null);

  return (
    <div
      className="template"
      data-template="virtual-object-page"
    >
      <Helmet>
        <title>Grafiken | {title} | Virtual</title>
      </Helmet>

      <Navigation
        goBackTo={`/${graphic.metadata.langCode}/`}
      />

      <section className="body">
        <Leporello>
          <LeporelloGraphicDetailsItem graphic={graphic} location={location.href} />
          {selectedReprintItem
            ? (
              <LeporelloGraphicRealItem
                graphic={selectedReprintItem}
                onClose={() => setSelectedReprintItem(null)}
              />
            )
            : (
              <LeporelloGraphicReprintsItem
                reprints={graphic.references.reprints}
                onItemClick={setSelectedReprintItem}
              />
            )
          }

          {graphic.references.relatedWorks.length > 0
            && (
              <LeporelloArtefactRelatedWorksItem
                relatedWorks={graphic.references.relatedWorks}
              />
            )
          }
        </Leporello>
      </section>
    </div>
  );
};

export default PageTemplate;
