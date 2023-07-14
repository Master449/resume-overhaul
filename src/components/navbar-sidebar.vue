<script lang="ts">
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router'

export default {
    data() {
        return {
            isMobile: screen.width < 600
        }
    }
}
</script>

<template>
    <div id="Nav-Not-Mobile" v-if=(!isMobile)>
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
                    <router-link to="/experience" class="nav-link"><i class="fa-solid fa-briefcase"></i>
                        Experience</router-link>
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
    <div class="Nav-Mobile" v-else>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="/img/avatar.png" alt="" width="30" height="30"> David Flowers II
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link"><i class="fa-solid fa-house"></i> Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/experience" class="nav-link"><i class="fa-solid fa-briefcase"></i>
                                Experience</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/education" class="nav-link"><i class="fa-solid fa-school"></i>
                                Education</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/projects" class="nav-link"><i class="fa-brands fa-github"></i>
                                Projects</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Contact
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li class="list-group-item"><a href="https://github.com/Master449" class="stretched-link"><i
                                            class="fa-brands fa-github"></i> GitHub</a></li>
                                <li class="list-group-item"><a href="https://www.linkedin.com/in/dflowersii"
                                        class="stretched-link"><i class="fa-brands fa-linkedin"></i> LinkedIn</a></li>
                                <li class="list-group-item"><a href="mailto:dsflowers2000@gmail.com"
                                        class="stretched-link"><i class="fa-solid fa-envelope"></i> Email</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
#navbar {
    height: 100%;
    width: 100%;
    top: 0;
    position: sticky;
}

#Nav-Not-Mobile {
    margin: 0;
    padding: 0;
    height: 100vh;
    top: 0;
    position: sticky;
}

#Nav-Not-Mobile .links li {
    border: none;
    width: 100%;
    background-color: #212529;
    text-align: center;
    font-size: 24px;
}

.dropdown-menu,
.dropdown-menu li,
.dropdown-menu li a {
    background-color: #1F1F1F;
    text-decoration: none;
}

.nav-link a {
    color: #FFF;
}

ul li a {
    color: #FFFF;
    width: 100%;
    height: 100%;
    font-size: 20px;
}

li {
    border: none;
}

a,
i {
    color: #FFF;
}
</style>