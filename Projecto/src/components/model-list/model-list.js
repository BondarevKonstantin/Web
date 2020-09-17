import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { withApiService } from '../hoc';
import { compose } from '../../utils';
import { fetchModels, modelItemSelect } from '../../actions';
import SearchPanel from '../search-panel';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

import './model-list.sass';
import ListItem from "../list-item";

const ModelList = ({ models, onModelItemSelect, isLoggedIn, userId=null, onItemSelected }) => {

    const history = useHistory();

    const onClick = () => {
        history.push('/add')
    }
    const onSelect = (item) => {
        onModelItemSelect(item);
        onItemSelected(item.target.id);
    }

    let selfProps = {
        btn: "invisible"
    }

    if (isLoggedIn) {
        selfProps.btn = "visible"
    } else {
        selfProps.btn = "invisible"
    }

    return (
        <div className="model-section">
            <div className="model-list-header d-flex justify-content-between">
                <h3>Модели</h3>
                <button className={`btn btn-outline-info ${selfProps.btn}`} onClick={onClick}>Добавить новую</button>
            </div>
            <SearchPanel filter="models"/>
            <ul className="model-list">
                {
                    models.map((model) => {
                        if (userId) {
                            if (model.user_id === userId) {
                                return (
                                    <li key={model.id}>
                                        <ListItem item={model} onSelect={onSelect}/>
                                    </li>
                                );
                            }
                        } else {
                            return (
                                <li key={model.id}>
                                    <ListItem item={model} onSelect={onSelect}/>
                                </li>
                            );
                        }
                    })
                }
            </ul>
        </div>
    );
}

const ModelListContainer = (props) => {

    useEffect(() => {
        props.fetchModels(props.apiService);
    }, [])

    const { viewedModels, loading, error, onModelItemSelect, isLoggedIn, userId, onItemSelected } = props;

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <ErrorIndicator />
    }

    return <ModelList
        models={viewedModels}
        onModelItemSelect={onModelItemSelect}
        isLoggedIn={isLoggedIn}
        userId={userId}
        onItemSelected={onItemSelected}/>
}

const mapStateToProps = ({
    modelList: { viewedModels, loading, error },
    loginData: { isLoggedIn },
}) => {
return { viewedModels, loading, error, isLoggedIn };
};

const mapDispatchToProps = (dispatch, {apiService}) => {
    return bindActionCreators({
        fetchModels: fetchModels(apiService),
        onModelItemSelect: modelItemSelect
    }, dispatch);
};

export default compose (
    withApiService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ModelListContainer);
