import React from 'react';

import Link from '~/components/atoms/link';
import Image from '~/components/atoms/image';

import './graphics-list.scss';

export default ({
  items,
  onItemClick,
}) => (
    <ul
      className="graphics-list"
      data-component="molecules/graphics-list"
    >
      {
        items.map(
          item => <li
            key={item.imgSrc}
            className="graphics-list-item"
          >
            <Link
              to={item.to}
              onClick={ (e) => {
                if (item.preventLinkFollowing) {
                  if ((typeof onItemClick) === 'function') {
                    onItemClick(item);
                  }

                  e.preventDefault();
                  return false;
                }

                return true;
              } }
            >
              <Image
                src={item.imgSrc}
                alt={item.title}
                classNamePrefix={'graphics-list-item'}
                caption={item.title}
              ></Image>
            </Link>
          </li>,
        )
      }
    </ul>

);
