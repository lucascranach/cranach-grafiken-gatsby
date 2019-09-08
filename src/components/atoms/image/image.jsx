import React from 'react';

import './image.scss';

export default ({
  src,
  alt,
  caption,
}) => (
  <figure
    className="image"
  >
    <img
      src={ src }
      alt={ alt }
    ></img>

    { caption && <figcaption>
        { caption }
      </figcaption>
    }
  </figure>
);