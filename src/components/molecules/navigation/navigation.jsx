import React from 'react';

import Logo from '~/components/atoms/logo';
import Link from '~/components/atoms/link';

import './navigation.scss';

export default ({
  target, targetText,
}) => {
  /* TODO: Pass through as parameter (?) */
  let navStructure = [
    {
      title: 'Grafiken',
      to: '/',
    },
    {
      title: 'Gemälde',
      to: 'http://lucascranach.org/gallery',
    },
    {
      title: 'Archivalien',
      to: 'http://lucascranach.org/archival-documents',
    },
    {
      title: 'Literatur',
      to: 'http://lucascranach.org/publications',
    },
  ];

  // TODO: cn -> häßlich, aber mir ist nix besseres auf die Schnelle eingefallen
  if (target) {
    navStructure = [];
  }
  return (
    <nav
      className="main-navigation"
      role="navigation"
      aria-label="main navigation"
      data-component="molecules/navigation"
    >
      {target
        ? (<Link className="reverse-navigation" to={target}><i className="material-icons">arrow_back_ios</i><span>{targetText}</span></Link>)
        : (<Link className="logo" to="/"><Logo /></Link>)
      }

      <ul className="menu">

        <li><i className="material-icons"></i></li>
        {
          navStructure.map(item => (
            <li className="menu-item"
              key={item.to}

            ><Link
              to={item.to}
              key={item.to}
              activeClassName="is-active"
              partiallyActive={true}
            >
                {item.title}
              </Link></li>
          ))
        }
      </ul>
    </nav>
  );
};
