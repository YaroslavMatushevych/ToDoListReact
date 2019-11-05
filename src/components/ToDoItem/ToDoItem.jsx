import React, from 'react';
import PropTypes from 'prop-types';
import TimerDeadline from '../TimerDeadline/TimerDeadline';
import MyContext from '../../MyContext/MyContext';

const ToDoItem = ({data, makeDoneUndone, deleteItemWrapper}) => {

  const wrapperOnClick = e => {
    if (e.target.id === "complete") {
      makeDoneUndone(e);
    }
    if (e.target.id === "delete") {
      deleteItemWrapper(e);
    }
  };


  const {title, description, priority, date, id, day, month, year, isDone, attachedImage} = data;
  let done = '';
  if (isDone) done = 'done';

  return (
    <MyContext.Consumer>
      {context => (
        <div className={'task-item ' + priority.toLocaleLowerCase() + '-border ' + done} id={id}>
          <div style={{position: "relative", height: "100%", width: "100%"}}>
            <div className="overlay-complete">
              <i className="fas fa-check"/>
              <p>Completed</p>
            </div>
            <div className="task-main">
              <div className="task-description">
                <div style={{overflowY: 'auto', maxHeight: "90px"}}>
                  <h6 className='task-heading'>{title}</h6>
                  <p className="task-description-text">{description}</p>
                </div>
              </div>
              <div className="task-info">
                <p className="task-info-added">{month} {day}, {year} </p>
                <p className="priority-text"><span
                  className={'priority-item ' + priority.toLocaleLowerCase()}>{priority}</span></p>
                <p className="task-info-deadline-day"/>
              </div>
            </div>
          </div>
          <div className="task-footer">
            <TimerDeadline deadline={date}/>
            <div className="task-tools">
              {attachedImage &&
              <a href={attachedImage} download><i className="fas fa-file-download" id="download"/></a>
              }
              <i className="fas fa-check" id="complete" onClick={wrapperOnClick}/>
              <i className="fas fa-pencil-alt" id="edit" onClick={context.openEditModal}/>
              <i className="far fa-trash-alt" id="delete" onClick={wrapperOnClick}/>
            </div>
          </div>
        </div>
      )}
    </MyContext.Consumer>
  );
};

ToDoItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.string,
  day: PropTypes.string,
  month: PropTypes.string,
  year: PropTypes.string,
  description: PropTypes.string,
  priority: PropTypes.string,
  attachedImage: PropTypes.bool,
  isDone: PropTypes.bool,
};

ToDoItem.defaultProps = {
  title: "Title",
  date: "Mon, 01 Jan 2020 00:00:00 GMT",
  id: "2342434",
  day: "1",
  month: "1",
  year: "2020",
  description: "Description",
  priority: "Low",
  deadline: "Deadline",
  attachedImage: false,
  isDone: false,
};


export default ToDoItem;