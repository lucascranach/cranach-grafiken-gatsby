import React from 'react';

import Image from '~/components/atoms/image';
import Link from '~/components/atoms/link';

import './artefact-card.scss';

export default ({
  title = '',
  subtitle = '',
  to = '',
  imgSrc = '',
  imgAlt = '',
}) => (
  <div
    className="artefact-card"
    data-component="molecules/artefact-card"
  >
    <div className="card-image">
      <Link
        to={ to }
      >
        <Image
          src={ imgSrc }
          alt={ imgAlt }
        ></Image>
      </Link>
    </div>
    { title
      && (<div className="card-text">
      <h2 className="card-title">{ title }</h2>
      <h3 className="card-subtitle">{ subtitle }</h3>

      </div>)
    }
  </div>
);