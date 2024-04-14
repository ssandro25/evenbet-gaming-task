<template>
    <div>
        <img
            :src="props.game.attributes.image"
            :alt="props.game.attributes.title"
            class="w-100"
        >
        <p class="d-flex flex-wrap align-items-center gap-2 mb-0">
            <span
                v-for="(category, index) in props.game.attributes.categories"
                :key="index"
            >
                {{ category }}
            </span>
        </p>

        <p class="mb-0">
            {{ props.game.attributes.title }}
        </p>

        <button
            type="submit"
            class="btn btn-primary"
            @click="openGame(props.game.id)"
        >
            Open game
        </button>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';
import Api from "@/requests/Request"

const api = new Api()

const props = defineProps({
    game: Object
})

const openGame = (id) => {
    api.openGame(id).then(response => {
        const gameURl = response.data.data[0].attributes['launch-options']['game-url']

        window.open(gameURl, '_blank')
    })
}
</script>

<style scoped lang="scss">

</style>