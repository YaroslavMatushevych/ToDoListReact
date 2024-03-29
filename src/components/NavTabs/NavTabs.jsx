import React from 'react';
import {tabsCollection} from '../../constants/constants.js'
import PropTypes from "prop-types";

const NavTabs = ({toggleClass, activeTab}) => {
  const countDoneItems = () => {
    let count = 0;
    let toDoListData;

    if (!localStorage["toDoListData"]) return count;

    toDoListData = JSON.parse(localStorage["toDoListData"]);

    for (let i = 0; i < toDoListData.length; i++) {
      if (!!toDoListData[i].isDone) {
        count++
      }
    }
    return count;
  };

  const navTabsRender = tabsCollection.map((item) => {
    const {id, href, iconCssClass, title} = item;
    return (
      <li key={id}
          className={`nav-item ${activeTab === id && "active"}`}
          onClick={(e) => toggleClass(e)}>
        <a id={id} href={href}>
          <i className={iconCssClass}/>
          {title}
          {id === "3" && <span className="amount closed">{countDoneItems()}</span>}
        </a>
      </li>
    )
  });

  return (
    <ul className="nav-tabs">
      {navTabsRender}
    </ul>
  );
};

NavTabs.propTypes = {
  toggleClass: PropTypes.func.isRequired,
  activeTab: PropTypes.string,
};

NavTabs.defaultProps = {
  toggleClass: () => {
  },
  activeTab: "1",
};

export default NavTabs;