import {
    fetchModels,
    fetchDatasets,
} from './fetch-actions'

import {
    fetchLogin,
    onUserExit,
} from './login-actions'

import { sendFiles } from './file-actions';

const filterModelData = (data, filter) => {
    return {
        type: 'FILTER_MODEL_DATA',
        payload: data,
        filter: filter,
    }
}

const filterDatasetData = (data, filter) => {
    return {
        type: 'FILTER_DATASET_DATA',
        payload: data,
        filter: filter,
    }
}

const modelItemSelect = (selectedItem) => {
    return {
        type: 'SELECT_MODEL_ITEM',
        payload: selectedItem
    }
}

const datasetItemSelect = (selectedItem) => {
    return {
        type: 'SELECT_DATASET_ITEM',
        payload: selectedItem
    }
}

export {
    fetchModels,
    fetchDatasets,
    filterModelData,
    modelItemSelect,
    datasetItemSelect,
    filterDatasetData,
    fetchLogin,
    onUserExit,
    sendFiles,
}
