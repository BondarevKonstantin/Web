import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';

import { AddModelForm, AddDatasetForm } from '../forms'

import './pages.sass'
import {connect} from "react-redux";

const AddItemPage = (props) => {

    if (!props.isLoggedIn) {
        return <Redirect to="/" />
    }

    let ViewedForm;
    const [ viewedForm, setViewedForm ] = useState('Model')

    if (viewedForm === 'Model') {
        ViewedForm = AddModelForm
    } else {
        ViewedForm = AddDatasetForm
    }

    const onCheckChange = (e) => {
        let target = e.target;
        setViewedForm(target.value)
    }

    return (
        <div className="add-item-page container">
            <h2>Добавить свой элемент</h2>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    id="radio1"
                    value="Model"
                    checked={viewedForm==="Model"}
                    onChange={onCheckChange}/>
                <label className="form-check-label" htmlFor="radio1">
                    Добавить модель
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    id="radio2"
                    value="Dataset"
                    checked={viewedForm==="Dataset"}
                    onChange={onCheckChange} />
                <label className="form-check-label" htmlFor="radio2">
                    Добавить датасет
                </label>
            </div>

            <ViewedForm />

        </div>
    );
};

const mapStateToProps = ({
                             loginData: { isLoggedIn },
                         }) => {
    return { isLoggedIn };
};

export default connect(mapStateToProps)(AddItemPage);
