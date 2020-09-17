const updateLoginData = (state, action) => {

    if (state === undefined) {
        return {
            info: {
                date_joined: "2020-05-06T16:55:49.281603Z",
                email: "john@gmail.com",
                first_name: "John",
                id: 1,
                last_name: "Coltrane",
                username: "john",
            },
            token: "9912d55e30a939f4760e0e0262ced8badd057f4e",
            isLoggedIn: true,

        }
    }

    switch (action.type) {
        case 'FETCH_LOGIN_USER':
            return {
                token: action.payload.key,
                isLoggedIn: true,
                ...state.loginData,
            }

        case 'GET_USER':
            return {
                info: {...action.payload},
                ...state.loginData,
            }

        case 'USER_EXIT':
            return "";

        default:
            return state.loginData
    }
}

export default updateLoginData
