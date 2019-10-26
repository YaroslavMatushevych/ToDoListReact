import React, {Component} from 'react';
import shortid from 'shortid'
import './ModalForm.scss';
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
      tag: [],
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
      let promise = toBase64Promise(files[0]).then((file) => {
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

  onTagAdd = e => {
    let currentTags = this.state.tag;
    let index = e.target.selectedIndex;
    let optionElement = e.target.childNodes[index];
    let tagId = optionElement.getAttribute('id');
    let tagValue = e.target.value;

    let newTag = {};

    if (tagValue === 'None') {
      tagValue = [];
    } else {
      newTag.tag = tagValue;
      newTag.id = tagId;
      for (let i = 0; i <= currentTags.length - 1; i++) {
        if (currentTags[i].tag === newTag.tag) {
          return null;
        }
      }
      currentTags.push(newTag);
    }

    this.setState({
      tag: currentTags
    })

  };

  deleteTagFromModal = (event) => {
    let deletedTag = event.target.textContent;
    let currentTags = this.state.tag;
    let id = currentTags.indexOf(deletedTag);

    currentTags.splice(id, 1);

    this.setState({tags: currentTags})
  };

  renderChoosenTags = tag => {
    console.log(tag);
    return tag.map(item => {
      return (
        <div key={shortid()} id={item.id} className="tag-on-modal">
          <p onClick={this.deleteTagFromModal} className='tag-name'>
            {item.tag}
            <i className="fas fa-times cross delete-tag"/>
          </p>
        </div>
      );
    })
  };

  render() {
    const {title, description, priority, date, attachedImage} = this.state;
    const {edit, toggleOpenHandler, listTags} = this.props;
    console.log(this.state.tag);

    const allTags = listTags.map((item) => {
      return (
        <option id={item.id} key={shortid()} className="option" value={item.tag}>{item.tag}</option>
      );
    });


    return (
      <div className="overlay">
        <div className="modal">
          <header className="modal-header">
            <h2 className="modal-heading">{edit ? `Edit item` : `Add new item`}</h2>
            <i className="fas fa-times cross" onClick={toggleOpenHandler}/>
          </header>
          <form className="modal-form" id="modal-form"
                onSubmit={edit ? this.wrapperOnEdit : this.wrapperOnSubmit}>
            <p className="info-input-descript">Enter todo title</p>
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
            <p className="info-input-descript">Select Tags</p>
            <select className="info-input" onChange={this.onTagAdd}>
              <option key="default" defaultValue disabled className="option" value="Choose Tag">Choose
                Tag
              </option>
              {allTags}
              <option className="option" key="none">None</option>
            </select>
            <div className="choosen-tags">
              {this.renderChoosenTags(this.state.tag)}
            </div>

            <p className="info-input-descript">Enter deadline</p>
            <DateTimePicker
              minDate={new Date()}
              onChange={this.onChangeDateHandler}
              value={date}
              className='info-input'
            />
            <div className="attach-image-block" name="image-drop"
                 onDragEnter={this.onAttachedImageDragEnter}
                 onDragOver={this.onAttachedImageDragOver} onDrop={this.onAttachedImageDrop}>
              <input type="file" name="image-input" className="attach-image"
                     ref={this.attachedImageRef} accept="image/*"
                     onChange={this.onAttachedImageChange}/>
              <p className="text">Attach image (200kb max)</p>
            </div>
            {attachedImage ? <img src={attachedImage} className="thumnail-img" alt="thumbnail"/>
              : <p className="thumbnail-text">no file or invalid file</p>}

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