import React, {memo} from 'react';
import Yarma from '../../images/YARMA.png'

const PopupProfile = () => {

  let toDoListData = JSON.parse(localStorage.getItem("toDoListData"));

  return (
    <div className="user-popup">
      <div className="thumbnail">
        <div className="thumb">
          <img className="thumb-photo" alt="Yaroslav Matushevych" src={Yarma}/>
          <div className="thumb-options">
            <div>
              <button className="btn-popup-profile"><i className="fas fa-pencil-alt"/></button>
              <button className="btn-popup-profile"><i className="fas fa-trash"/></button>
            </div>
          </div>
        </div>

        <div className="user-popup-info">
          <h6>Yaroslav Matushevych <small>Front end developer</small></h6>
        </div>
      </div>

      <ul className="list-group">
        <li className="list-group-item">
          <p style={{display: "inline-block"}}>
            <i className="fas fa-edit"/>
            My tasks
          </p>
          <span className="posts-amount">{toDoListData ? toDoListData.length : 0}</span>
        </li>
      </ul>
    </div>
  );
};

export default memo(PopupProfile);