import axios from "axios";

export default class Api {
    auth(login, password) {
        return axios.post('https://poker.evenbetpoker.com/api/web/v2/login?clientId=default', {
            clientId: "default",
            login: login,
            password: password
        })
    }

    refreshToken(refreshToken) {
        return axios.post('https://poker.evenbetpoker.com/api/web/auth/token?clientId=default', {
            clientId: "default",
            refreshToken: refreshToken
        });
    }
}