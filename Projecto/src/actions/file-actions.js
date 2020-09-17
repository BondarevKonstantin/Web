const sendFiles = (file, dataType) => {
    if (dataType === 'model') {
        return {
            type: 'UPLOAD_MODEL_FILE',
            payload: file,
        }
    } else {
        return {
            type: 'UPLOAD_DATASET_FILE',
            payload: file,
        }
    }
}

export { sendFiles }
