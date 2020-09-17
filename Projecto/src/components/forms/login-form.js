import React from 'react';

import { withApiService } from '../hoc';
import { compose } from '../../utils';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from "react-router-dom";

import { fetchLogin } from '../../actions';

import './forms.sass'

const LoginForm = (props) => {

    let data = {
        username: '',
        password: '',
    }

    const history = useHistory();

    const handleSubmit = (e) => {

        e.preventDefault()

        props.fetchLogin(data, history)

    }

    const handleInput = (e) => {
        let value = e.target.value
        let inputType = e.target.type

        if (inputType === "email") {
            data.username = value
        } else {
            data.password = value
        }
    }

    return(
        <div className="login-form">
            <h2 className="login-header">Логин</h2>
            <form>

                <div className="form-group">
                    <label htmlFor="input-email">E-mail</label>
                    <input type="email" className="form-control" id="input-email" placeholder="Введите E-mail" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="input-pass">Пароль</label>
                    <input id="input-pass" type="password" className="form-control" placeholder="Введите пароль" onChange={handleInput} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Войти</button>

            </form>
        </div>
    )
};

const mapStateToProps = ({loginData}) => {
    return { loginData };
};

const mapDispatchToProps = (dispatch, {apiService}) => {
return bindActionCreators({
    fetchLogin: fetchLogin(apiService),
}, dispatch);
};

export default compose (
withApiService(),
connect(mapStateToProps, mapDispatchToProps)
)(LoginForm);
