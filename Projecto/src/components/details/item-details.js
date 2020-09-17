import React, { useState, useEffect } from 'react';

import './item-details.sass';
import {withApiService} from "../hoc";


const Record = ({ selectedItem, field, label }) => {

    return (
        <li className="list-group-item">
            <span className="term">{ label }:  </span>
            <span>{ selectedItem[field] }</span>
        </li>
    );
}

export {
    Record
};

// ==============================================================================================

const ItemDetails = (props) => {

    const { itemId, resource } = props;

    const [selectedItem, setSelectedItem] = useState(null)

    useEffect(() => {

        if (!itemId) {
            setSelectedItem(null)
        }

        props.apiService.getItem(resource, itemId)
            .then(data => setSelectedItem(data))

    }, [itemId])

    if (!selectedItem) {
        return <span>Пожалуйста, выберите что-либо из списка слева</span>
    }

    return (
        <div className="card-body">
            <h4>{ selectedItem.name }</h4>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(props.children, (child) => {
                        if (child.type === 'hr' || child.type === 'button') {
                            return React.cloneElement(child);
                        }
                        return React.cloneElement(child, { selectedItem });
                    })
                }
            </ul>
        </div>
    );
}

export default withApiService()(ItemDetails)
