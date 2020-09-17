
// Действие запроса на получение моделей

const modelsRequested = () => {
    return 'FETCH_MODELS_REQUEST';
};

// Действие после успешной загрузки моделей

const modelsLoaded = (newModels) => {
    return {
        type: 'FETCH_MODELS_SUCCESS',
        payload: newModels,
    };
};

// Действие после ошибки загрузки моделей

const modelsError = (error) => {
    return {
        type: 'FETCH_MODELS_FAILURE',
        payload: error,
    };
};

// Действие запроса на получение датасетов

const datasetsRequested = () => {
    return 'FETCH_DATASETS_REQUEST';
};

// Действие после успешной загрузки датасетов

const datasetsLoaded = (newDatasets) => {
    return {
        type: 'FETCH_DATASETS_SUCCESS',
        payload: newDatasets,
    };
};

// Действие после ошибки загрузки датасетов

const datasetsError = (error) => {
    return {
        type: 'FETCH_DATASETS_FAILURE',
        payload: error,
    };
};

const fetchModels = (apiService) => () => (dispatch) => {
    dispatch(modelsRequested());
    apiService.getAllModels()
    .then(
        (data) => dispatch(modelsLoaded(data))
    )
    .catch((err) => dispatch(modelsError(err)));
};

const fetchDatasets = (apiService) => () => (dispatch) => {
    dispatch(datasetsRequested());
    apiService.getAllDatasets()
    .then((data) => dispatch(datasetsLoaded(data)))
    .catch((err) => dispatch(datasetsError(err)));
};

export {
    fetchModels,
    fetchDatasets,
}
