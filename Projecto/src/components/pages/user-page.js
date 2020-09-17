import React from 'react';
import { connect } from 'react-redux';
import {DatasetPage, ModelPage} from '../pages';
import { Route, Switch, Redirect } from "react-router-dom";
import UserHeader from "../user-header";

const UserPage = (props) => {

    if (!props.isLoggedIn) {
        return <Redirect to="/" />
    }

    let info = props.info

    const WrappedModelPage = () => {
        return <ModelPage userId={info.id} />
    }

    const WrappedDatasetPage = () => {
        return <DatasetPage userId={info.id} />
    }

    return(
        <div className="user-page container">
            <div className="user-page-details">
                <h2>{`Логин: ${info.username}`}</h2>
                <h2>{`Присоединился: ${new Date(info.date_joined).toLocaleString()}`}</h2>
                <h2>{`Email: ${info.email}`}</h2>
            </div>
            <hr/>

            <h2 className="text-center user-page-works">
                Мои работы
            </h2>

            <UserHeader />

            <Switch>
                <Route path="/user/models/:id?"
                       component={WrappedModelPage}
                       exact
                />

                <Route path="/user/datasets/:id?"
                       component={WrappedDatasetPage}
                       exact
                />

            </Switch>
        </div>
    )
}

const mapStateToProps = ({
    loginData: { isLoggedIn, info },
}) => {
return { isLoggedIn, info };
};

export default connect(mapStateToProps)(UserPage);
