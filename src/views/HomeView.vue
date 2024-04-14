<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-2">
                <UserBalance />
            </div>

            <div class="col-lg-10">
                <GamesList />
            </div>
        </div>
    </div>
</template>

<script setup>
import UserBalance from "@/components/UserBalance.vue";
import GamesList from "@/components/GamesList.vue";
</script>

<style scoped lang="scss">

</style>