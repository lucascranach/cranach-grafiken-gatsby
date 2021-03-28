import React, { useState } from 'react';
import Helmet from 'react-helmet';

import { graphql } from 'gatsby';

import Navigation from '~/components/molecules/navigation';
import ArtefactOverview from '~/components/organisms/artefact-overview';

import graphic from '~/libs/transformers/graphic';

import i18n from '~/i18n';

export default ({ data }) => {
  i18n('en');

  const items = graphic.flattenGraphQlEdges(data.allGraphicsJson)
    .filter(graphic.byImageExistence)
    .map(graphic.toAddedRepresentativeImage)
    .map(graphic.toArtefact);

  const [currentArtefactView, setCurrentArtefactView] = useState(ArtefactOverview.DefaultView);

  return (
    <div
      className="page"
      data-page="index.en"
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
  query EnglishVirtualCranachGraphicObjects {
    allGraphicsJson(filter: {
      items: {
        elemMatch: {
          metadata: {
            langCode: { eq: "de" }
          },
          isVirtual: { eq: true }
        }
      }
    }) {
      edges {
        node {
          items {
            metadata {
              langCode
            }
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
              printProcess
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
              representative {
                infos {
                  maxDimensions {
                    width
                    height
                  }
                }
                variants {
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
            }
            involvedPersons {
              name
              role
            }
            exhibitionHistory
            catalogWorkReferences {
              description
              referenceNumber
              remarks
            }
          }
        }
      }
    }
  }
`;
