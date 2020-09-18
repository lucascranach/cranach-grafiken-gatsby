import React from 'react';

import './accordion.scss';

const Accordion = ({ children }) => (
  <div
    className="accordion"
    data-component="molecules/accordion"
  >
    { children }
  </div>
);

Accordion.Entry = ({
  title,
  children,
  toggle = [false, () => { }],
}) => (
  <div
    className={ `accordion-entry ${toggle[0] ? '-open' : ''}` }
  >
    <header className="head">
      <span className="entry-title">{ title }</span>
      <span
        className="toggle-control"
        onClick={ () => { toggle[1](!toggle[0]); } }
      >
        <i className="icon material-icons">expand_more</i>
      </span>
    </header>
    <main className="content">
      <div className="box">
        { children }
      </div>
    </main>
  </div>
);

export default Accordion;
