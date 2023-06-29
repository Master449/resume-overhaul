<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './components/navbar-sidebar.vue'
</script>

<template>
    <div class="flex-container">
        <div id="navbar">
            <SideBar />
        </div>
        <div id="content">
            <div class="router-view">
                <RouterView />
            </div>
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

#content {
    height: 100vh;
    overflow: scroll;
    overflow-x: hidden;
    width: 100%;
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