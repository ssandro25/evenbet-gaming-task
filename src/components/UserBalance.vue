<template>
    <div>
        User Balance
        <p class="mb-0">
            Available: {{ available }} {{ currency }}
        </p>

        <p class="mb-0">
            Bonus: {{ bonus }} {{ currency }}
        </p>

        <p class="mb-0">
            In play: {{ inPlay }} {{ currency }}
        </p>
    </div>
</template>

<script setup>
import Api from "@/requests/Request"
import {useStore} from "vuex";
import {onMounted, ref} from "vue";

const api = new Api()
const store = useStore()

const available = ref(null)
const bonus = ref(null)
const currency = ref('')
const inPlay = ref(null)

onMounted(()=> {
    api.getBalance(store.state.token).then(response => {
        available.value = response.data.data[0].attributes.available
        bonus.value = response.data.data[0].attributes.bonus
        currency.value = response.data.data[0].attributes.currency
        inPlay.value = response.data.data[0].attributes['in-play']
        // console.log(response)
    })
})
</script>

<style scoped lang="scss">

</style>