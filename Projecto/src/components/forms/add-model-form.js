import React from 'react';
import { compose } from '../../utils';
import { withApiService } from '../hoc';

import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

const AddModelForm = (props) => {

    const onClick = () => {

        let formData = new FormData;

        formData.append('file', document.getElementById('model-form-file').files[0])
        formData.append('name', document.getElementById('model-form-name').value)
        formData.append('desc', document.getElementById('model-form-desc').value)
        formData.append('version', document.getElementById('model-form-vers').value)
        formData.append('price', document.getElementById('model-form-price').value)

        props.apiService.sendModelToServer(formData, props.token)
    }

    return (
        <div className="add-model-form">
            <input id="model-form-name" className="form-control" type="text" placeholder="Название Модели"></input>
            <input id="model-form-desc" className="form-control" type="textarea" placeholder="Описание Модели"></input>
            <input id="model-form-vers" className="form-control" type="text" placeholder="Версия модели"></input>
            <input id="model-form-price" className="form-control" type="text" placeholder="Цена (В рублях)"></input>

            <input id="model-form-file" type="file"></input>

            <button className="btn btn-success" onClick={onClick}>Отправить</button>
        </div>
    );
};

const mapStateToProps = (
    {loginData: {token}}
    ) => {
    return { token };
};

export default compose (
    withApiService(),
    connect(mapStateToProps)
    )(AddModelForm);
