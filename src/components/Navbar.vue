<script lang="ts">
export default {
  data() {
    return {
      isMobile: true
    }
  },
  mounted() {
    this.isMobile = this.DeviceType()
  },
  methods: {
    DeviceType() {
      return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
  }
}
</script>

<template>
  <div class="container" id="mobile" v-if="isMobile">
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
  <div class="container" id="Nav-Not-Mobile" v-else>
    <div id="navbar" class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
      <img src="/img/avatar.png" />
      <hr>
      <h3 class="text-center"><strong>David Flowers II</strong></h3>
      <p class="text-center m-1"><i>Computer Science Undergrad</i></p>
      <p class="text-center m-2"><i>dsflowers2000@gmail.com</i></p>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">
            <i class="fa-solid fa-house"></i> Home
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            <i class="fa-solid fa-briefcase"></i>
            Experience
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            <i class="fa-solid fa-school"></i>
            Education
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            <i class="fa-brands fa-github"></i>
            Projects
          </a>
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
</template>

<style>
#Nav-Not-Mobile {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: nowrap;
  height: 100vh;
  max-height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
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

#Nav-Not-Mobile #navbar {
  width: 100%;
}

.mobileImg {
  height: 5%;
  margin: 0;
}

#mobile {
  position: absolute;
  margin: 0;
  padding: 0;
  z-index: 2;
}
</style>