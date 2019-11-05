import React, {memo} from 'react';
import PropTypes from "prop-types";

const SelectSorts = ({sorting}) => {
  return (
    <ul className="dropdown-sorts">
      <li className="dropdown-sort" id="isDone" onClick={sorting}>Sort by isDone</li>
      <li className="dropdown-sort" id="deadline" onClick={sorting}>Sort by deadline</li>
      <li className="dropdown-sort" id="priority" onClick={sorting}>Sort by priority</li>
    </ul>
  );
};

SelectSorts.propTypes = {
  sorting: PropTypes.func.isRequired,
};

SelectSorts.defaultProps = {
  sorting: () => {
  },
};

export default memo(SelectSorts);