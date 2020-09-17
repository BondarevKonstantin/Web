import DatasetPage from "../pages/dataset-page";
import React from "react";
import {compose} from "../../utils";
import {withApiService} from "../hoc";
import {connect} from "react-redux";

import './popup-dataset.sass';

let PopupDataset = (props) => {

    const onHandleClick = () => {
        props.apiService.useModelOnDataset(props.selectedModelItem, props.selectedDatasetItem, props.token)
    }

    let popupUserId

    if (!props.info) {
        popupUserId = null
    } else {
        popupUserId = props.info.id
    }


    return (
        <div className={`popup-dataset ${props.popupVisibility}`}>
            <div className="popup-content">
                <div className="popup-header d-flex justify-content-between">
                    <h2>Выберите датасет из списка</h2>
                    <p onClick={() => props.onToggleVisibility('invisible')}>X</p>
                </div>
                <DatasetPage userId={popupUserId} modelChoosing={true}/>
                <button
                    className="btn btn-outline-danger"
                    onClick={onHandleClick}>
                    Совместить
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (
    {
        loginData: { info, token },
        modelList: { selectedModelItem },
        datasetList: { selectedDatasetItem }
    }) => {
    return { info, selectedDatasetItem, selectedModelItem, token };
};

export default compose (
    withApiService(),
    connect(mapStateToProps)
)(PopupDataset);
