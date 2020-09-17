import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from "react-router-dom";

import { onUserExit } from '../../actions';

import './header.sass';

const Header = (props) => {

    const history = useHistory();

    const onExit = () => {
        history.push('/models/')
        props.onExit()
    }

    let switchLoginButton;

    if (props.isLoggedIn) {
        switchLoginButton = {
            text: "Личный кабинет",
            link: "/user/",
            exitBtn: "btn btn-outline-primary visible",
        };
    } else {
        switchLoginButton = {
            text: "Логин / Регистрация",
            link: "/login",
            exitBtn: "invisible",
        };
    }

    return (
        <div className="header d-flex">
            <h3>
                <Link to="/">FinDataHub</Link>
            </h3>
            <ul className="d-flex align-items-center">

                <Link to="/models/">
                    <li>
                        Модели
                    </li>
                </Link>

                <Link to="/datasets/">
                    <li>
                        Датасеты
                    </li>
                </Link>

                <Link to={switchLoginButton.link} className="ml-auto">
                    <li>
                        {switchLoginButton.text}
                    </li>
                </Link>

                <button className={switchLoginButton.exitBtn} onClick={onExit}>
                    Выйти
                </button>

            </ul>
        </div>
    );
};

const mapStateToProps = ({
    loginData: { isLoggedIn }}) => {
return { isLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onExit: onUserExit,
    }, dispatch);
    };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
