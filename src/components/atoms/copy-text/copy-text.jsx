import React from 'react';

import './copy-text.scss';

export default ({
  text,
}) => (
  <div
    className="copy-text"
  >
    { text && text.split('\n').map((item, i) => <p key={i}>{ decodeURI(item) || '\u200B' }</p>) }
  </div>
);
