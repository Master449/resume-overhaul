<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './components/navbar-sidebar.vue'
</script>

<template>
    <div class="flex-container" v-cloak>
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

[v-cloak] {
    display: block;
    padding: 50px 0;
  }
  
  @keyframes spinner {
    to {
        transform: rotate(360deg);
    }
  }
  
  [v-cloak]:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: #333;
    animation: spinner 0.6s linear infinite;
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
  
  [v-cloak]>* {
    display: none;
  }
</style>