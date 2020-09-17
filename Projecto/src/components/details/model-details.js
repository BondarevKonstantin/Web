import React from 'react';
import ItemDetails, { Record } from './item-details.js';
import { connect } from 'react-redux';


const ModelDetails = (props) => {

    let { itemId, onUseItem, info } = props;

    let btnVisibility = info ? 'visible' : 'invisible'

    return(
        <div className="model-details">
            <ItemDetails resource="models" itemId={itemId}>
                <Record field="id" label="Id" />
                <Record field="name" label="Название модели" />
                <Record field="user_id" label="Id Автора" />
                <Record field="desc" label="Описание" />
                <Record field="version" label="Версия" />
                <Record field="price" label="Цена" />
                <hr/>
                <button
                    className={`btn btn-outline-success ${btnVisibility}`}
                    onClick={onUseItem}
                >
                    Использовать на моем датасете
                </button>
            </ItemDetails>
        </div>
    );
};

const mapStateToProps = ({ loginData: { info }}) => {
    return { info };
};

export default connect(mapStateToProps)(ModelDetails);
