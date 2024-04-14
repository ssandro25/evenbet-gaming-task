<template>
    <div class="row row-cols-lg-4 row-cols-md-2 row-cols-1 gy-4">
        <div
            v-for="game in games"
            :key="game.id"
            class="col"
        >
            <GameItem :game="game"/>
        </div>
    </div>
</template>

<script setup>
import Api from "@/requests/Request"
import {onMounted, ref} from "vue";
import GameItem from "@/components/GameItem.vue";

const api = new Api()

const games = ref([])

onMounted(() => {
    api.getGames().then(response => {
        games.value = response.data.data
    })
})

</script>

<style scoped lang="scss">

</style>