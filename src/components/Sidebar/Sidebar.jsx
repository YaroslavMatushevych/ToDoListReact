import React, {useState, memo} from 'react';
import PopupProfile from '../PopupProfile/PopupProfile';
import MenuNavigation from '../MenuNavigation/MenuNavigation'
import Yarma from '../../images/YARMA.png'
import PropTypes from "prop-types";

const Sidebar = ({openNav}) => {

  const [sidebar, showSidebar] = useState(false);
  const toggleOpenHandler = e => {
    e.preventDefault();
    showSidebar(!sidebar);
  };

  return (
    <div className={openNav ? "sidebar active" : "sidebar"}>
      <div className="user-menu">
        <a href="#/" className="togglePopupProfile" onClick={toggleOpenHandler}>
          <img src={Yarma} alt="Yaroslav Matushevych"/>
          <div className="user-info">
            <p>Yaroslav Matushevych</p>
            <span>Web Developer</span>
          </div>
        </a>
        {sidebar && <PopupProfile/>}
      </div>
      <MenuNavigation/>
    </div>
  );
};

Sidebar.propTypes = {
  openNav: PropTypes.bool.isRequired,
};

Sidebar.defaultProps = {
  openNav: false,
};

export default memo(Sidebar);