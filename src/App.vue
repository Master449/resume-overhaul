<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './components/navbar-sidebar.vue'
import { Transition } from 'vue';
</script>

<template>
    <div class="flex-container" v-cloak>
        <div id="navbar">
            <SideBar />
        </div>
        <div class="router-view">
            <router-view v-slot="{ Component, route }">
                <Transition name="fade" mode="out-in">
                    <div :key="route.name">
                        <component :is="Component"></component>
                    </div>
                </Transition>
            </router-view>
        </div>
    </div>
</template>

<style scoped>
.flex-container {
    display: flex;
    height: 100%;
    flex-direction: row;
    margin-bottom: auto;
    width: 100%;
}

#navbar {
    flex: 1;
    flex-grow: 0;
    top: 0;
    flex-shrink: 1;
    top: 0;
    position: sticky;
    z-index: 2;
}

.router-view {
    margin: 5%;
    width: 100%;
}

@media only screen and (max-width: 600px) {
    .flex-container {
        flex-direction: column;
    }
}

[v-cloak] {
    display: block;
    padding: 50px 0;
}

@keyframes spinner {
    to {
        transform: rotate(360deg);
    }
}

[v-cloak]>* {
    display: none;
}


.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>