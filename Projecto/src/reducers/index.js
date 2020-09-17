import updateModelList from './model-list';
import updateDatasetList from './dataset-list';
import updateLoginData from './login-data';

const reducer = (state, action) => {

    const updateModelFile = (state, action) => {

        const initialState = {
            modelFile: null
        }

        if (state === undefined) {
            return initialState.modelFile;
        }

        switch (action.type) {
            case 'UPLOAD_MODEL_FILE':
                return action.payload

            default:
                return state.modelFile;
        }

    }

    const updateDatasetFile = (state, action) => {

        const initialState = {
            datasetFile: null
        }

        if (state === undefined) {
            return initialState.datasetFile;
        }

        switch (action.type) {
            case 'UPLOAD_DATASET_FILE':
                return action.payload

            default:
                return state.datasetFile;
        }

    }


    return {
        modelList: updateModelList(state, action),
        datasetList: updateDatasetList(state, action),
        loginData: updateLoginData(state, action),
        modelFile: updateModelFile(state, action),
        datasetFile: updateDatasetFile(state, action),
    };
};

export default reducer;
