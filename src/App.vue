<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex-container">
  <div class="flexitems">
  <div id="mobile" v-if="isMobile">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/img/avatar.png" alt="" width="40" />
          David Flowers II</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a href="#" class="nav-link active" aria-current="page">
                <i class="fa-solid fa-house"></i> Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link text-white">
                <i class="fa-solid fa-briefcase"></i>
                Experience
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link text-white">
                <i class="fa-solid fa-school"></i>
                Education
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link text-white">
                <i class="fa-brands fa-github"></i>
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div id="Nav-Not-Mobile" v-else>
    <div id="navbar" class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
      <img src="/img/avatar.png" />
      <hr>
      <h3 class="text-center"><strong>David Flowers II</strong></h3>
      <p class="text-center m-1"><i>Computer Science Undergrad</i></p>
      <p class="text-center m-2"><i>dsflowers2000@gmail.com</i></p>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link"><i class="fa-solid fa-house"></i> Home</router-link>
        </li>
        <li>
          <router-link to="/experience" class="nav-link"><i class="fa-solid fa-briefcase"></i> Experience</router-link>
        </li>
        <li>
          <router-link to="/education" class="nav-link"><i class="fa-solid fa-school"></i> Education</router-link>
        </li>
        <li>
          <router-link to="/projects" class="nav-link"><i class="fa-brands fa-github"></i> Projects</router-link>
        </li>
      </ul>
      <hr>
      <ul class="links list-group list-group-flush list-group-horizontal-md">
        <li class="list-group-item"><a href="https://github.com/Master449" class="stretched-link"><i
              class="fa-brands fa-github"></i></a></li>
        <li class="list-group-item"><a href="https://www.linkedin.com/in/dflowersii" class="stretched-link"><i
              class="fa-brands fa-linkedin"></i></a></li>
        <li class="list-group-item"><a href="https://github.com/Master449" class="stretched-link"><i
              class="fa-brands fa-twitter"></i></a></li>
      </ul>
    </div>
  </div>
</div>
<div class="flexitems">
  <RouterView />
</div>
</div>
</template>

<style>
html {
  height: 100vh;
}

* {
  box-sizing: border-box;
}

body {
  background-color: #323b44;
  color: white;
  margin: 0;
}

.card {
  background-color: #212529;
  color: white;
}

.flex-container {
  display: flex;
  height: 100vh;
  flex-direction: row;
}

.flex-items:nth-child(1) {
  flex: 1;
  flex-grow: 0;
  flex-shrink: 1;
}

.flex-items:nth-child(2) {
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  margin: 5%;
}

#navbar {
  height: 100%;
  width: 100%;
}

#Nav-Not-Mobile {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  height: 100vh;
}

#Nav-Not-Mobile .links li {
  border: none;
  width: 100%;
  background-color: #212529;
  text-align: center;
  font-size: 24px;
}

#Nav-Not-Mobile ul li a {
  color: #FFFF;
  width: 100%;
  height: 100%;
  font-size: 20px;
}

.mobileImg {
  height: 5%;
  margin: 0;
}

#mobile {
  margin: 0;
  padding: 0;
  z-index: 2;
  position: absolute;
  width: 100%;
}
</style>