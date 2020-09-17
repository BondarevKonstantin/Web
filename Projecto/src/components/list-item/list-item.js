import React from 'react';

import './list-item.sass';


const ListItem = ({ item, onSelect }) => {
    let { name, id } = item;

    return (
        <div className="list-item">
            <span className="list-item-name" onClick={onSelect} id={id}>
                { name }
            </span>
        </div>
    );
};

export default ListItem;
