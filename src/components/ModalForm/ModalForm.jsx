import React, {Component} from 'react';
import {attachedImageValidation, toBase64Promise} from '../../utils/helpers.jsx';
import DateTimePicker from 'react-datetime-picker';

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      date: new Date(),
      day: '',
      month: '',
      year: '',
      priority: 'Low',
      attachedImage: '',
      isDone: false,
    };
    this.attachedImageRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.edit) {
      this.setState({
        ...this.state,
        title: this.props.editionItem.title,
        description: this.props.editionItem.description,
        date: this.props.editionItem.date,
        priority: this.props.editionItem.priority,
        tag: this.props.editionItem.tag,
        attachedImage: this.props.editionItem.attachedImage,
      })
    }
  }

  onChangeHandler = e => {
    const {name, value} = e.target;
    this.setState({...this.state, [name]: value});
  };

  onChangeDateHandler = date => {
    let day, month, year;
    let monthDay = ["January", "February", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    month = monthDay[date.getMonth()];
    day = date.getDate();
    year = date.getFullYear();

    this.setState({
      date: date,
      day: day,
      month: month,
      year: year,
    });
  };

  wrapperOnSubmit = e => {
    e.preventDefault();
    this.props.newItemSubmitHandler(this.state);
  };

  wrapperOnEdit = e => {
    e.preventDefault();
    this.props.editItem(this.props.editionItem.id, this.state);
  };

  setAttachedImageState = (files) => {
    if (attachedImageValidation(files)) {
        toBase64Promise(files[0]).then((file) => {
        this.setState({attachedImage: file,});
      });
    }
  };

  onAttachedImageChange = () => {
    this.setAttachedImageState(this.attachedImageRef.current.files);
  };
  onAttachedImageDragEnter = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };
  onAttachedImageDragOver = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };
  onAttachedImageDrop = (event) => {
    this.setAttachedImageState(event.dataTransfer.files);
    event.stopPropagation();
    event.preventDefault();
  };

  render() {
    const {title, description, priority, date, attachedImage} = this.state;
    const {edit, toggleOpenHandler} = this.props;

    return (
      <div className="overlay">
        <div className="modal">
          <header className="modal-header">
            <h2 className="modal-heading">{edit ? `Edit item` : `Add new item`}</h2>
            <i className="fas fa-times cross" onClick={toggleOpenHandler}/>
          </header>
          <form className="modal-form" id="modal-form"
                onSubmit={edit ? this.wrapperOnEdit : this.wrapperOnSubmit}>
            <p className="info-input-descript">Enter title(One big and small letter, max 20 length)</p>
            <input onChange={this.onChangeHandler}
                   pattern="(?=.*[a-z])(?=.*[A-Z]).{2,20}"
                   className="info-input"
                   required
                   type="text"
                   name="title"
                   placeholder="Title *"
                   value={title}
            />
            <p className="info-input-descript">Enter description</p>
            <input onChange={this.onChangeHandler}
                   className="info-input"
                   maxLength="300"
                   type="text"
                   name="description"
                   placeholder="Description"
                   value={description}
            />
            <p className="info-input-descript">Select priority</p>
            <select onChange={this.onChangeHandler}
                    className="info-input"
                    required
                    name="priority"
                    value={priority}>
              <option className="option low" value="Low">Low</option>
              <option className="option middle" value="Middle">Middle</option>
              <option className="option high" value="High">High</option>
            </select>
            <p className="info-input-descript">Enter deadline</p>
            <DateTimePicker
              minDate={new Date()}
              onChange={this.onChangeDateHandler}
              value={date}
              className='info-input'
            />
            <div className="attach-image-block"
                 onDragEnter={this.onAttachedImageDragEnter}
                 onDragOver={this.onAttachedImageDragOver} onDrop={this.onAttachedImageDrop}>
              <input type="file" name="image-input" className="attach-image"
                     ref={this.attachedImageRef} accept="image/*"
                     onChange={this.onAttachedImageChange}/>
              <p className="text">Attach image (200kb max)</p>
            </div>
            {attachedImage ? <img src={attachedImage} className="thumnail-img" alt="thumbnail"/>
              : <p className="thumbnail-text">no file or invalid file</p>
            }
            <div className="btn-container">
              <div>
                <button className="cancel-btn btn" onClick={toggleOpenHandler}>Cancel</button>
              </div>
              <div>
                <button type="submit" className="create-btn btn">
                  {edit ? `Edit item` : `Add item`}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default ModalForm;