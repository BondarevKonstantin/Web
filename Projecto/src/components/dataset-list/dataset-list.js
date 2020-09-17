import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { withApiService } from '../hoc';
import { compose } from '../../utils';
import { fetchDatasets, datasetItemSelect } from '../../actions';
import SearchPanel from '../search-panel';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

import './dataset-list.sass';
import ListItem from "../list-item";

const DatasetList = ({ datasets, onDatasetItemSelect, isLoggedIn, userId=null, onItemSelected }) => {

    const history = useHistory();

    const onClick = () => {
        history.push('/add')
    }
    const onSelect = (item) => {
        onDatasetItemSelect(item);
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
        <div className="dataset-section">
            <div className="dataset-list-header d-flex justify-content-between">
                <h3>Датасеты</h3>
                <button className={`btn btn-outline-info ${selfProps.btn}`} onClick={onClick}>Добавить новую</button>
            </div>
            <SearchPanel filter="datasets"/>
            <ul className="dataset-list">
                {
                    datasets.map((dataset) => {
                        if (userId) {
                            if (dataset.user_id === userId) {
                                return (
                                    <li key={dataset.id}>
                                        <ListItem item={dataset} onSelect={onSelect}/>
                                    </li>
                                );
                            }
                        } else {
                            return (
                                <li key={dataset.id}>
                                    <ListItem item={dataset} onSelect={onSelect}/>
                                </li>
                            );
                        }
                    })
                }
            </ul>
        </div>
    );
}

const DatasetListContainer = (props) => {

    useEffect(() => {
        props.fetchDatasets(props.apiService);
    }, [])

    const { viewedDatasets, loading, error, onDatasetItemSelect, isLoggedIn, userId, onItemSelected } = props;

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <ErrorIndicator />
    }

    return <DatasetList
        datasets={viewedDatasets}
        onDatasetItemSelect={onDatasetItemSelect}
        isLoggedIn={isLoggedIn}
        userId={userId}
        onItemSelected={onItemSelected}/>
}

const mapStateToProps = ({
                             datasetList: { viewedDatasets, loading, error },
                             loginData: { isLoggedIn },
                         }) => {
    return { viewedDatasets, loading, error, isLoggedIn };
};

const mapDispatchToProps = (dispatch, {apiService}) => {
    return bindActionCreators({
        fetchDatasets: fetchDatasets(apiService),
        onDatasetItemSelect: datasetItemSelect
    }, dispatch);
};

export default compose (
    withApiService(),
    connect(mapStateToProps, mapDispatchToProps)
)(DatasetListContainer);
