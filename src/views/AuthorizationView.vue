<template>
    <div class="container">
        <form class="col-lg-5 col-12 p-0 mx-auto">
            <div>
                <label for="login" class="form-label">Логин:</label>

                <input
                    v-model="login"
                    type="text"
                    class="form-control"
                    placeholder="Введите логин"
                    id="login"
                >
            </div>

            <div class="mt-3">
                <label for="password" class="form-label">Пароль:</label>

                <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    placeholder="Введите пароль"
                    id="password"
                >
            </div>

            <div class="mt-3">
                <button
                    type="submit"
                    class="btn btn-dark w-100"
                    @click="auth()"
                >
                    Войти
                </button>
            </div>

            <p v-if="checkMessage" class="text-danger mt-3 mb-0">
                Введите валидные данные
            </p>
        </form>
    </div>

</template>

<script setup>
import {ref} from "vue";
import Api from "@/requests/Request"
import {useStore} from "vuex";

const api = new Api()
const store = useStore()

const login = ref('')
const password = ref('')
const checkMessage = ref(false)

const auth = () => {
    api.auth(login.value, password.value).then(response => {
        if (response && response.status === 200) {
            const token = response.data.data[0].attributes.token
            const refreshToken = response.data.data[0].attributes.refresh-token

            store.dispatch('setToken', token)
            store.dispatch('setRefreshToken', refreshToken)

            console.log(response.data.data[0].attributes)

            // console.log(true)

            checkMessage.value = false

            setInterval(() => {
                refreshTokenFunc();
            }, 800000);
        }
    }).catch(error => {
        if (error.response && error.response.status === 422) {
            checkMessage.value = true
        }
    })
}

const refreshTokenFunc = () => {
    const refreshToken = store.getters.getRefreshToken;
    api.refreshToken(refreshToken).then(response => {
        if (response && response.status === 200) {
            const newToken = response.data.data[0].attributes.token;
            const newRefreshToken = response.data.data[0].attributes.refresh-token
            store.dispatch('setToken', newToken);
            store.dispatch('setRefreshToken', newRefreshToken);
        }
    }).catch(error => console.error(error));
};
</script>

<style scoped lang="scss">

</style>