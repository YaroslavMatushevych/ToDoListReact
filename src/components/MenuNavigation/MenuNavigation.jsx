import React, {memo} from 'react';
import {menuNavCollection} from '../../constants/constants.js'

const MenuNavigation = () => {

  const menuNavRender = menuNavCollection.map((item, index) => {
    const {title, href, iconCssClass} = item;
    return (
      <li key={item.id} className='navigation-item'>
        <a href={href} className='navigation-item-link disabled'>
          <span>{title}</span>
          <i className={iconCssClass}/>
        </a>
        {index === 3 &&
        <ul className='navigation-sub-list'>
          <li className='navigation-subitem'><a className='navigation-subitem-link disabled' href="#">Task grid</a></li>
          <li className='navigation-subitem'><a className="navigation-subitem-link active" href="#">Task list</a></li>
          <li className='navigation-subitem'><a className='navigation-subitem-link disabled' href="#">Task detailed</a>
          </li>
        </ul>
        }
      </li>
    )
  });

  return (
    <ul className='navigation'>
      {menuNavRender}
    </ul>
  );
};

export default memo(MenuNavigation);