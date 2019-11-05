import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TimerDeadline from '../TimerDeadline/TimerDeadline';
import MyContext from '../../MyContext/MyContext';
import './ToDoItem.scss';

class ToDoItem extends Component {

    wrapperOnClick = e => {
        if (e.target.id === "complete") {
            this.props.makeDoneUndone(e);
        }
        if (e.target.id === "delete") {
            this.props.deleteItemWrapper(e);
        }
    };


    render() {
        const {title, description, priority, date, id, day, month, year, isDone, attachedImage} = this.props.data;
        let done = '';
        if (isDone){done = 'done'}

        return (
                <MyContext.Consumer>
                    {context => (
                        <div className={'task-item ' + priority.toLocaleLowerCase()+'-border ' + done} id={id}
                        >
                    <div style={{position: "relative", height:"100%", width: "100%"}}>
                        <div className="overlay-complete">
                            <i className="fas fa-check"/>
                            <p>Completed</p>
                        </div>
                        <div className="task-main">
                            <div className="task-description">
                                <div style={{overflowY: 'auto', maxHeight:"90px"}}>
                                    <h6 className='task-heading'>{title}</h6>
                                    <p className="task-description-text">{description}</p>
                                </div>
                            </div>
                            <div className="task-info">
                                <p className="task-info-added">{month} {day}, {year} </p>
                                <p className="priority-text"><span className={'priority-item ' + priority.toLocaleLowerCase()}>{priority}</span></p>
                                <p className="task-info-deadline-day"/>
                            </div>
                        </div>
                    </div>
                    <div className="task-footer">
                        <TimerDeadline deadline={date}/>
                        <div className="task-tools">
                            {attachedImage && <a href={attachedImage} download><i className="fas fa-file-download" id="download"/></a>}
                            <i className="fas fa-check" id="complete" onClick={this.wrapperOnClick}/>
                            <i className="fas fa-pencil-alt" id="edit" onClick={context.openEditModal}/>
                            <i className="far fa-trash-alt" id="delete" onClick={this.wrapperOnClick}/>
                        </div>
                    </div>
                </div>
                    )}
                </MyContext.Consumer>
        );
    }
}

ToDoItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    priority: PropTypes.string,
    isDone: PropTypes.bool,
};

ToDoItem.defaultProps = {
    title: "Title",
    description: "Description",
    priority: "Low",
    deadline: "Deadline",
    isDone: false,
};


export default ToDoItem;