import React, {memo} from 'react';
import logo from '../../images/logo-text.png'
import PropTypes from "prop-types";

const Header = ({toggleOpenHandler}) => {
  return (
    <header className='header'>
      <div className="navbar-header">
        <a href="#" className="navbar-logo">
          <img src={logo} alt="ToDo List Logo"/>
        </a>
        <a className="sidebar-toggle" onClick={toggleOpenHandler}>
          <i className="fas fa-bars"/>
        </a>
      </div>
      <div>
        <h2 className="navbar-greeting">Hi, from Yaroslav!</h2>
      </div>
    </header>
  );
};

Header.propTypes = {
  toggleOpenHandler: PropTypes.func.isRequired,
};

Header.defaultProps = {
  toggleOpenHandler: () => {},
};


export default memo(Header);