import React, { memo } from 'react';
import './Header.scss';
import logo from '../../images/logo-text.png'

const Header = props => {
        return (
            <header className='header'>
                <div className="navbar-header">
                    <a href="#" className="navbar-logo">
                        <img src={logo} alt="ToDo List Logo"/>
                    </a>
                    <a className="sidebar-toggle" onClick={props.toggleOpenHandler}>
                        <i className="fas fa-bars"/>
                    </a>
                </div>
                <div>
                    <h2 className="navbar-greeting">Hi, from Yaroslav!</h2>
                </div>
            </header>
        );
};

export default memo(Header);