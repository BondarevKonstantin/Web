const loginUser = (data) => {
    alert("Вы успешно вошли")
    return {
        type: 'FETCH_LOGIN_USER',
        payload: data,
    };
};

const getUser = (info) => {
    return {
        type: 'GET_USER',
        payload: info,
    }
}

const onUserExit = () => 'USER_EXIT';

const fetchLogin = (apiService) => (data, history) => (dispatch) => {
    apiService.getToken(data)
        .then((data) =>{
            switch (Object.keys(data)[0]) {
                case "non_field_errors":
                    alert("Неверный логин или пароль")
                    return
                case "password":
                    alert("Поле пароля не можут быть пустым")
                    return
            }
            dispatch(loginUser(data))
            apiService.getUserInfo(data)
                .then((info) => {
                    dispatch(getUser(info))
                    history.push("/models/")
                })

        })
};

export {
    fetchLogin,
    onUserExit,
}
