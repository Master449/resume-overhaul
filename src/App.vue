<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './components/Sidebar.vue'
</script>

<template>
    <div class="flex-container">
        <div class="flexitems">
            <SideBar />
        </div>
        <div class="flexitems">
            <div class="router-view">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<style>
.flex-container {
    display: flex;
    height: 100%;
    flex-direction: row;
    margin-bottom: auto;
}

.flex-items:nth-child(1) {
    flex: 1;
    top: 0;
    flex-grow: 0;
    flex-shrink: 1;
    height: 100%;
    top: 0;
    position: sticky;
}

.flex-items:nth-child(2) {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    height: 100vh;
}

.router-view {
    margin: 5%;
}

@media only screen and (max-width: 600px) {
    .flex-container {
        flex-direction: column;
    }
}
</style>