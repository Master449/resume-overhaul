<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
      <div id="Nav-Not-Mobile">
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
          </ul>
        </div>
      </div>
</template>

<style>
#navbar {
  height: 100%;
  width: 100%;
}

#Nav-Not-Mobile {
  margin: 0;
  padding: 0;
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

@media screen and (max-width: 700px) {
  #navbar {
    width: 100%;
    z-index: 2;
  }

  #navbar img {
    height: 2em;
    width: 2em;
  }

  li {
    font-display: none;
  }
}

</style>