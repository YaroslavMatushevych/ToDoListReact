import React from 'react';
import './SelectSorts.scss';

const SelectSorts = props => {
        return (
            <ul className="dropdown-sorts">
                <li className="dropdown-sort" id="isDone" onClick={props.sorting}>Sort by isDone</li>
                <li className="dropdown-sort" id="deadline" onClick={props.sorting}>Sort by deadline</li>
                <li className="dropdown-sort" id="priority" onClick={props.sorting}>Sort by priority</li>
            </ul>
        );
};

export default SelectSorts;