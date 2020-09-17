export default class ApiService {

    // Стартовая строка для API

    _apiBase = 'http://127.0.0.1:8000/api/v1';

    // Получение любого ресурса со стартовой строкой

    async getResource(url, headers={}) {
        const res = await fetch(` ${ this._apiBase}${url}`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    ...headers,
                }
            });

        if (!res.ok) {
            console.log(res.json());
            throw new Error(`Could not fetch ${ url }` +
                `, received ${ res.status }`)
        }

        return await res.json();
    }

    async postResource(url, data={}, headers={}, is_json=true) {
        let req;
        if (is_json) {
            req = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    ...headers,
                }
            };
        } else {
            req = {
                method: 'POST',
                body: data,
                headers: {
                    ...headers,
                }
            };
        }

        const res = await fetch(` ${ this._apiBase}${url} `, req)

        if (!res.ok) {
            throw new Error(`Could not fetch ${ url }` +
                `, received ${ res.status }`)
        }

        // const json = await res.json();
        // console.log(JSON.stringify(json));

        return await res.json();
    };

    // Получение списка всех моделей

    getAllModels = async() => {
        return await this.getResource('/models/');
    }

    getAllDatasets = async() => {
        const res = await this.getResource('/datasets/');
        return res.map(this._transformDataset);
    }

    // Получение данных  id

    getItem = async (resource, id) => {
        if (!id || !resource) {
            return null
        }
        return await this.getResource(`/${resource}/${id}`);
    }

    // Получить токен от логина и пароля

    getToken = async (data) => {
        return this.postResource(`/auth/login/`, data)
    }

    // Получить информацию о пользователе при помощи токена

    getUserInfo = async (token) => {
        return this.getResource('/user/', {'Authorization' : `token ${token.key}`})
    }

    // Регистрирует пользователя на сервере

    registerUser = async (data) => {
        return this.postResource(`/users/`, data)
    }

    sendModelToServer = async (data, token) => {
        console.log(...data);
        return this.postResource('/models/', data, {'Authorization' : `token ${token}`}, false);
    }

    sendDatasetToServer = async (data, token) => {
        console.log(...data);
        return this.postResource('/datasets/', data, {'authorization' : `token ${token}`}, false);
    }

    useModelOnDataset = (model, dataset, token) => {
        let dataBody = { dataset_id: Number(dataset) }
        return this.postResource(`/models/${model}/use/`, dataBody, {'Authorization' : `token ${token}`})
    }

    // Инициализация данных

    _transformDataset = (dataset) => {
        return {
            ...dataset,
            uploadTime: dataset.upload_dt
        }
    }
}
