import React from 'react';

import { withApiService } from '../hoc';
import { compose } from '../../utils';

import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import './forms.sass'

const RegistrationForm = (props) => {

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        props.apiService.registerUser(data)
            .then((data) => {
                switch (Object.keys(data)[0]) {
                    case "detail":
                        alert("Поля с паролями должны быть одинаковыми")
                        return
                    case "password":
                        alert("Поля с паролями не могут быть пустыми")
                        return
                    case "username":
                        alert("Заполните поле username")
                        return
                    default:
                        history.push("/models")
                }
            })

    }

    let data = {
        username: "",
        email: "",
        first_name: "",
        password: "",
        password2: ""
    }

    const handleInput = (e) => {
        let value = e.target.value
        let inputType = e.target.getAttribute('datatype')

        switch (inputType) {
            case 'username':
                data.username = value
                break
            case 'email':
                data.email = value
                break
            case 'name':
                data.first_name = value
                break
            case 'pass1':
                data.password = value
                break
            case 'pass2':
                data.password2 = value
                break
        }
    }

    return(
        <div className="registration-form">
            <h2 className="registration-header">Регистрация</h2>
            <form>

                <div className="form-group">
                    <label htmlFor="input-username">Логин</label>
                    <input datatype="username" type="text" className="form-control" id="input-username" placeholder="Введите логин" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="input-registration-email">E-mail</label>
                    <input datatype="email" type="email" className="form-control" id="input-registration-email"  placeholder="Введите E-mail" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="input-name">Имя</label>
                    <input datatype="name" type="text" className="form-control" id="input-name" placeholder="Введите ваше имя" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="input-registration-password">Пароль</label>
                    <input datatype="pass1" type="password" className="form-control" id="input-registration-password" placeholder="Введите пароль" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="input-registration-password2">Введите пароль еще раз</label>
                    <input datatype="pass2" type="password" className="form-control" id="input-registration-password2" placeholder="Введите пароль еще раз" onChange={handleInput} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Зарегистрироваться</button>
            </form>
        </div>
    )
};

const mapStateToProps = ({loginData}) => {
return { loginData };
};

export default compose (
withApiService(),
connect(mapStateToProps)
)(RegistrationForm);
