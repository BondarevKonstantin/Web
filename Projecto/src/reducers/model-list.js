import {toFilter} from '../utils'

const updateModelList = (state, action) => {

    if (state === undefined) {
        return {
            models: [],
            viewedModels: [],
            selectedModelItem: null,
            loading: true,
            error: null,
        }
    }

    switch (action.type) {
        case 'FETCH_MODELS_REQUEST':
            return {
                models: [],
                viewedModels: [],
                selectedModelItem: null,
                loading: true,
                error: null,
            }

        case 'FETCH_MODELS_SUCCESS':
            return {
                models: action.payload,
                viewedModels: action.payload,
                selectedModelItem: null,
                loading: false,
                error: null,
            };

        case 'FETCH_MODELS_FAILURE':
            return {
                ...state.modelList,
                loading: false,
                error: action.payload,
            };

        case 'FILTER_MODEL_DATA':
            return {
                ...state.modelList,
                models: action.payload,
                viewedModels: toFilter(action.payload, action.filter),
            };


        case 'SELECT_MODEL_ITEM':
            const target = action.payload.target;
            return {
                ...state.modelList,
                selectedModelItem: target.id,
            };

        default:
            return state.modelList;
    }

};

export default updateModelList;
