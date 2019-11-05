import React, {useState, memo} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ModalForm from '../ModalForm/ModalForm';
import ToDoList from '../ToDoList/ToDoList';
import Footer from '../Footer/Footer';
import MyContext from '../../MyContext/MyContext';
import {
  generateId,
  getItems,
  setItems,
  findArrayId,
  editItem
} from '../../utils/helpers.jsx';
import PropTypes from "prop-types";


const PageContainer = ({openNav}) => {

  const [edit, toggleEditModal] = useState(true);

  const [data, addNewItem] = useState(getItems());
  const newItemSubmitHandler = form => {
    form.id = generateId();
    let newItem = [...data, form];

    setItems(newItem);
    addNewItem(newItem);
    toggleOpenHandler();
  };

  const [editionItem, doEdit] = useState({});
  const wrapperEditItem = (id, item) => {
    let editionItem = editItem(id, item);
    doEdit(editionItem);
    toggleOpenHandler();
  };

  const [modal, showModal] = useState(false);
  const toggleOpenHandler = () => {
    showModal(!modal);
    toggleEditModal(false)
  };

  return (
    <MyContext.Provider
      value={{
        edit,
        openEditModal: (e) => {
          let id = e.target.closest('.task-item').getAttribute('id');
          let list = getItems();
          const i = findArrayId(id, list);
          list[i].date = new Date(list[i].date);
          showModal(true);
          toggleEditModal(!edit);
          doEdit(list[i]);
        }
      }}>
      <main className='main-block'>
        <Sidebar openNav={openNav}/>
        <div className={openNav ? 'page-content active' : 'page-content'}>
          {modal && <ModalForm
            newItemSubmitHandler={newItemSubmitHandler}
            toggleOpenHandler={toggleOpenHandler}
            edit={edit}
            editionItem={editionItem}
            editItem={wrapperEditItem}
          />}
          <div className="page-header">
            <div className="page-title">
              <h3>Task list <small>Task list inside data table</small></h3>
            </div>
            <div className='create-btn-container'>
              <button className="show-modal-btn" onClick={toggleOpenHandler}>
                <i className="fas fa-plus"/>
                Add Task
              </button>
            </div>
            <button className="show-modal-btn fixed-btn" onClick={toggleOpenHandler}>
              <i className="fas fa-plus"/>
            </button>
          </div>
          <ToDoList
            data={data}
          />
        </div>
        <Footer/>
      </main>
    </MyContext.Provider>
  );
};

PageContainer.propTypes = {
  openNav: PropTypes.bool.isRequired,
};

PageContainer.defaultProps = {
  openNav: false,
};

export default memo(PageContainer);