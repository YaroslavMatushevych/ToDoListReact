import React, {Component} from 'react';
import PopupProfile from '../PopupProfile/PopupProfile';
import MenuNavigation from '../MenuNavigation/MenuNavigation'
import Yarma from '../../images/YARMA.png'
import './Sidebar.scss';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    toggleOpenHandler = e => {
        e.preventDefault();
        const {open} = this.state;
        this.setState({open: !open})
    };

    render() {
        const { openNav } = this.props;
        const { open } = this.state;
        return (
            <div className={openNav ? "sidebar active" : "sidebar"}>
                <div className="user-menu">
                    <a href="#" className="togglePopupProfile" onClick={this.toggleOpenHandler}>
                        <img src={Yarma} alt="Yaroslav Matushevych"/>
                            <div className="user-info">
                                <p>Yaroslav Matushevych</p>
                                <span>Web Developer</span>
                            </div>
                    </a>
                    {open && <PopupProfile/>}
                </div>
                <MenuNavigation/>
            </div>
        );
    }
}

export default Sidebar;