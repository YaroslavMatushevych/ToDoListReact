import React, {Component, useState, useEffect, memo } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ModalForm from '../ModalForm/ModalForm';
import ToDoList from '../ToDoList/ToDoList';
import Footer from '../Footer/Footer';
import MyContext from '../../MyContext/MyContext';
import './PageContainer.scss';
import {
    generateId,
    getItems,
    setItems,
    findArrayId,
    getTagsItems,
    deleteTagItem,
    addTagsItem,
    editItem } from '../../utils/helpers.jsx';


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

    const [listTags, setListTags] = useState(getTagsItems());
    const handleTagDelete = id => {
        deleteTagItem(id);
        setListTags(getTagsItems());
    };

    const [tags, changeTag] = useState([]);
    const handleTagChange = e => {
        const tag = {
            tag: e.target.value,
            id: e.target.value
        };
        changeTag(tag);
    };

    const handleTagSubmit = e => {
        e.preventDefault();
        addTagsItem(tags);
        setListTags(getTagsItems());
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
                <Sidebar openNav={openNav} />
                <div className={openNav ? 'page-content active': 'page-content'}>
                    {modal && <ModalForm
                        newItemSubmitHandler={newItemSubmitHandler}
                        toggleOpenHandler={toggleOpenHandler}
                        edit={edit}
                        editionItem={editionItem}
                        listTags={listTags}
                        tags={tags}
                        editItem={wrapperEditItem}
                    />}
                    <div className="page-header">
                        <div className="page-title">
                            <h3>Task list <small>Task list inside data table</small></h3>
                        </div>
                        <div className='create-btn-container'>
                            <button className="show-modal-btn" onClick={toggleOpenHandler}>
                                <i className="fas fa-plus"></i>
                                Add Task
                            </button>
                        </div>
                        <button className="show-modal-btn fixed-btn" onClick={toggleOpenHandler}>
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                    <ToDoList
                        data={data}
                        listTags={listTags}
                        tags={tags}
                        handleTagDelete={handleTagDelete}
                        handleTagChange={handleTagChange}
                        handleTagSubmit={handleTagSubmit}
                    />
                    <Footer/>
                </div>
            </main>


            </MyContext.Provider>

        );
};

export default memo(PageContainer);