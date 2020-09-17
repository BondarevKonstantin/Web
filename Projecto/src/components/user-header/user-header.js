import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link} from "react-router-dom";

import './user-header.sass';

const UserHeader = (props) => {

    if (!props.isLoggedIn) {
        return <Redirect to="/" />
    }

    return (
        <div className="user-header d-flex">
            <ul className="d-flex align-items-center">

                <Link to="/user/models/">
                    <li>
                        Модели
                    </li>
                </Link>

                <Link to="/user/datasets/">
                    <li>
                        Датасеты
                    </li>
                </Link>

            </ul>
        </div>
    );
};

const mapStateToProps = ({
                             loginData: { isLoggedIn }}) => {
    return { isLoggedIn };
};


export default connect(mapStateToProps)(UserHeader);
