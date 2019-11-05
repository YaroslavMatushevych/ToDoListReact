import React, { memo } from "react";
import shortid from 'shortid'

const TagsInput = props => {
    const { tags, handleTagSubmit, handleTagChange, handleTagDelete, listTags } = props;
        return (
            <>
            <form onSubmit={handleTagSubmit}>
                <label>
                    <h1>Tags</h1>
                    <input className="tags" type="text" value={tags.tag}
                           onChange={handleTagChange} pattern="(?=.*[a-z]).{2,20}" />
                </label>
                <input className="addTags" type="submit" value="" />
            </form>
            <div className="tagsContainer">
            {listTags.map(item => (
                <div key ={shortid()} id={item.id} className="tag-on-modal">
                    <p className='tag-name'>{item.tag}
                        <i className="fas fa-times cross delete-tag" onClick={() => handleTagDelete(item.id)}></i>
                    </p>
                </div>
                ))}
            </div>
                </>
        );
};

export default memo(TagsInput);
