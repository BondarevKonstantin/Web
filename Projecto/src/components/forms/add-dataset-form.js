import React from 'react';
import { compose } from '../../utils';
import { withApiService } from '../hoc';

import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

const AddDatasetForm = (props) => {

    const onClick = () => {

        let formData = new FormData;

        formData.append('file', document.getElementById('dataset-form-file').files[0])
        formData.append('name', document.getElementById('dataset-form-name').value)
        formData.append('desc', document.getElementById('dataset-form-desc').value)

        props.apiService.sendDatasetToServer(formData, props.token)
    }

    return (
        <div className="add-dataset-form">
            <input id="dataset-form-name" className="form-control" type="text" placeholder="Название Датасета"/>
            <input id="dataset-form-desc" className="form-control" type="textarea" placeholder="Описание Датасета"/>

            <input id="dataset-form-file" type="file"/>

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
    )(AddDatasetForm);
