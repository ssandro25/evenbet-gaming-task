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

    getBalance(token) {
        return axios.get(`https://poker.evenbetpoker.com/api/web/v2/users/me/balance?clientId=default&auth=${token}`)
    }

    getGames() {
        return axios.get('https://poker.evenbetpoker.com/api/web/v2/casino/games?clientId=default')
    }
}