import React from 'react';

import './image.scss';

export default ({
  src,
  alt,
  caption,
  classNamePrefix,
  modifierWithBox,
  isLazy = true,
}) => {
  const classNameModifier = modifierWithBox ? '--with-box' : '';
  const className = `${classNamePrefix ? `${classNamePrefix} image${classNameModifier}` : `image${classNameModifier}`}`;
  return (
    <figure
      className={className}
      data-component="atoms/image"
    >
      <div
        className="image__holder"
      >
        <img
          src={src}
          alt={alt}
          loading={ isLazy ? 'lazy' : '' }
        />
      </div>

      {caption && <figcaption
        className='image__caption'
      >
        <p className="text">{caption}</p>
      </figcaption>
      }
    </figure>
  );
};
