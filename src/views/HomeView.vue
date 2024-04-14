<template>
    <header class="container-fluid sticky-top bg-dark py-3 px-0">
        <div class="container">
            <UserBalance />
        </div>
    </header>

    <main class="container-fluid">
        <div class="container">
            <GamesList />
        </div>
    </main>
</template>

<script setup>
import UserBalance from "@/components/UserBalance.vue";
import GamesList from "@/components/GamesList.vue";
</script>

<style scoped lang="scss">

</style>