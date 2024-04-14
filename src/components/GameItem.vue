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
    </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    game: Object
})
</script>

<style scoped lang="scss">

</style>