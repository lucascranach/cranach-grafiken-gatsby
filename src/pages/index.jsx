
import React, { useState } from 'react';
import Helmet from 'react-helmet';

import { graphql } from 'gatsby';

import Navigation from '~/components/molecules/navigation';
import ArtefactOverview from '~/components/organisms/artefact-overview';

import graphic from '~/libs/transformers/graphic';

import i18n from '~/i18n';


export default ({ data }) => {
  i18n('de');

  const items = graphic.flattenGraphQlEdges(data.allGraphicsJson)
    .filter(graphic.byImageExistence)
    .map(graphic.toArtefact);

  const [currentArtefactView, setCurrentArtefactView] = useState(ArtefactOverview.DefaultView);

  return (
    <div
      className="page"
      data-page="index"
    >
      <Helmet>
        <title>Cranach Digital Archive | Home</title>
      </Helmet>

      <div
        className="page-dark"
      >
        <Navigation>
          <ArtefactOverview.Switcher
            view={ currentArtefactView }
            handleChange={ setCurrentArtefactView }
          />
        </Navigation>

        <main
          className="main-content"
        >
          <ArtefactOverview
            view={ currentArtefactView }
            items={ items }
          />
        </main>
      </div>
    </div>
  );
};

export const query = graphql`
  query VirtualCranachGraphicObjects {
    allGraphicsJson(filter: {
      items: {
        elemMatch: {
          isVirtual: {
            eq: true
          },
          langCode: {
            eq: "de"
          },
        }
      }
    }) {
      edges {
        node {
          items {
            langCode
            slug
            objectName
            inventoryNumber
            objectId
            dimensions
            dating {
              dated
            }
            isVirtual
            sortingNumber
            titles {
              remarks
              title
              type
            }
            classification {
              classification
              condition
            }
            references {
              reprints {
                inventoryNumber
              }
              relatedWorks {
                inventoryNumber
              }
            }
            images {
              infos {
                maxDimensions {
                  width
                  height
                }
              }
              sizes {
                xs {
                  dimensions {
                    width
                    height
                  }
                  src
                }
                s {
                  dimensions {
                    width
                    height
                  }
                  src
                }
                m {
                  dimensions {
                    width
                    height
                  }
                  src
                }
                l {
                  dimensions {
                    width
                    height
                  }
                  src
                }
                xl {
                  dimensions {
                    width
                    height
                  }
                  src
                }
              }
            }
            involvedPersons {
              name
              role
            }
          }
        }
      }
    }
  }
`;
