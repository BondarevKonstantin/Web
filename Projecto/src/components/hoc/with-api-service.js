import React, { useContext } from 'react';
import ApiServiceContext from '../api-service-context';

// Вложенный в withApiService компонент получит доступ к API
// Wrapped - Компонент, который должен получить доступ к API

const withApiService = () => (Wrapped) => {

    return (props) => {
        const apiService = useContext(ApiServiceContext)

        return <Wrapped {...props} apiService={apiService}/>
    };
};

export default withApiService;
