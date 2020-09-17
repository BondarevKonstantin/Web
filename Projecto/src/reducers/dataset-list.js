import {toFilter} from '../utils'

const updateDatasetList = (state, action) => {

    if (state === undefined) {
        return {
            datasets: [],
            viewedDatasets: [],
            selectedDatasetItem: null,
            loading: true,
            error: null,
        }
    }

    switch (action.type) {
        case 'FETCH_DATASETS_REQUEST':
            return {
                datasets: [],
                viewedDatasets: [],
                selectedDatasetItem: null,
                loading: true,
                error: null,
            }

        case 'FETCH_DATASETS_SUCCESS':
            return {
                datasets: action.payload,
                viewedDatasets: action.payload,
                selectedDatasetItem: null,
                loading: false,
                error: null,
            };

        case 'FETCH_DATASETS_FAILURE':
            return {
                ...state.datasetList,
                loading: false,
                error: action.payload,
            };

        case 'FILTER_DATASET_DATA':
            return {
                ...state.datasetList,
                datasets: action.payload,
                viewedDatasets: toFilter(action.payload, action.filter),

            };

        case 'SELECT_DATASET_ITEM':
            const target = action.payload.target;
            return {
                ...state.datasetList,
                selectedDatasetItem: target.id,
            };

        default:
            return state.datasetList;
    }

};

export default updateDatasetList;
