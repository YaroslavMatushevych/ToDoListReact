import React, {Component} from 'react';
import shortid from 'shortid';
import ToDoItem from '../ToDoItem/ToDoItem';
import NavTabs from "../NavTabs/NavTabs";
import SelectSorts from '../SelectSorts/SelectSorts';

import TagsContainer from '../TagsContainer/TagsContainer';
import {
    sortListByTabs,
    sortByPriority,
    sortByIsDone,
    sortByIsDeadline,
    sortItems,
    deleteItem,
    getItems,
    filterByDate,
} from "../../utils/helpers";
import './ToDoList.scss';

const pStyle = {
    fontSize: "30px",
    marginTop:'40px'
};

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "1",
            selectedOption: null,
            openSortSelect: false,
            data: this.props.data,
            filtered: this.props.data,
        };
    }

    componentDidUpdate (prevProps) {
        if(prevProps.data !== this.props.data){
            const filtered = this.props.data;
            this.setState({filtered: filtered})
        }
    };

    componentDidMount () {
        this.sorting('default');
    };


    sorting = e => {
        let filtered = this.state.filtered;
        if(e === 'default')filtered = sortItems(filtered);
        else{
            if (e.target.id === "priority") filtered = sortByPriority(filtered);
            if (e.target.id === "isDone") filtered = sortByIsDone(filtered);
            if (e.target.id === "deadline") filtered = sortByIsDeadline(filtered)
        }

        this.setState({filtered: filtered})
    };

    deleteItemWrapper = e => {
        let id = e.target.closest('.task-item').getAttribute('id');
        const data = deleteItem(id);
        this.setState({
            filtered: data,
            data: data
        });
    };

    makeDoneUndone = e => {
        let id = e.target.closest('.task-item').getAttribute('id');
        let data = this.state.filtered;
        let toDoListData = JSON.parse(localStorage["toDoListData"]);

        for(let i = 0 ; i < toDoListData.length; i++){
            if(toDoListData[i].id === id) {
                data[i].isDone = !data[i].isDone;
                this.setState({filtered: data});

                toDoListData[i].isDone = !toDoListData[i].isDone;
                localStorage.setItem("toDoListData", JSON.stringify(toDoListData));
            }
        }
    };

    openSelect = () => {
        const { openSortSelect } = this.state;
        this.setState({ openSortSelect: !openSortSelect});
    };

    toggleClass = e => {
        e.preventDefault();
        this.setState({ activeTab: e.target.getAttribute('id')});
    };

    renderToDoItems = items => {
        items = sortListByTabs(items, this.state.activeTab);
        if (items === undefined) { return <p style={pStyle}>Wait, please...</p> }
        else if (items === null || !items.length) { return <p style={pStyle}>The list is empty, add something, please</p> }
        else {
            return items.map(item => {
                return (
                    <ToDoItem key={shortid()}
                              data={item}
                              makeDoneUndone={this.makeDoneUndone}
                              deleteItemWrapper={this.deleteItemWrapper}
                    />
                )
            })
        }
    };

    onSearchHandler = e => {
        let currentList = [];
        let newList = [];

        if (e.target.value !== "") {
            currentList = this.state.data;

                newList = currentList.filter(item => {
                    for (let key in item) {
                        const lc = item[key].toString().toLowerCase();
                        const filter = e.target.value.toLowerCase();
                        if(lc.includes(filter)) return item;
                    }
                });
            }
        else {
            newList = this.state.data;
        }
        this.setState({
            filtered: newList
        });
    };

    onFilterChange = e => { this.setState({ byDateSelectFilter: e.target.value, filtered: filterByDate(e.target.value), }) };

        render() {
        const { activeTab, openSortSelect, filtered } = this.state;
        const { handleTagChange, handleTagDelete, handleTagSubmit, listTags, tags } = this.props;

            return (
            <>
                <NavTabs toggleClass={this.toggleClass} activeTab={activeTab}/>
                <div className="todo-list-tools">
                    <div className="todo-list-search">
                        <label>
                            <span className='search-label'>Search:</span>
                            <input
                                type="search"
                                onChange={this.onSearchHandler}
                                className="search"
                                placeholder="Cards search..."/>
                            <i className="search-icon fas fa-search"/>
                        </label>
                    </div>
                    <div className="todo-list-sort">
                        <label>
                            <span className='sort-label'>Sorting:</span>
                            <button className="sort" onClick={this.openSelect}>
                                Sort by isDone
                                {openSortSelect && <SelectSorts sorting={this.sorting} />}
                            </button>
                            <i className="sort-icon fas fa-sort"/>
                        </label>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent:'center', margin:'35px'}}>
                    <select className="item positive select-deadline btn" onChange={this.onFilterChange}>
                        <option defaultValue="select">Choose deadline</option>
                        <option value="today">Today</option>
                        <option value="tomorrow">Tomorrow</option>
                        <option value="week">Week</option>
                        <option value="month">During the month</option>
                    </select>
                </div>
                    <div className="task-list grid"
                    >
                        <div className="tasks-container">
                            {this.renderToDoItems(filtered)}
                        </div>
                        <div className="task-tags-container">
                            <TagsContainer
                                listTags={listTags}
                                tags={tags}
                                onSearchHandler={this.onSearchHandler}
                                handleTagDelete={handleTagDelete}
                                handleTagChange={handleTagChange}
                                handleTagSubmit={handleTagSubmit}
                            />
                        </div>
                    </div>
            </>
        );
    }
}

export default ToDoList;