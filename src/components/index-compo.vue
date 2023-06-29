<script lang="ts">
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
        <p class="display-3">David Flowers II</p>
        <p class="display-6">Full-Stack Developer</p>

        <ul>
            <li class="icon solid fa-code-branch">C++, Python, PHP, JS</li>
            <li class="icon solid fa-database">SQL, MariaDB, PDO</li>
            <li class="icon solid fa-desktop">Computer Diagnostic and Repair</li>
            <li class="icon solid fa-terminal">Linux, PowerShell, Git</li>
            <li class="icon solid fa-object-group">Adobe Suite</li>
            <li class="icon solid fa-file-word">Microsoft Suite</li>
            <li class="icon solid fa-users">6+ Years of Customer Service</li>
            <li class="icon solid fa-memory">10+ Years of Computer Hardware</li>
        </ul>
</template>

<style scoped>
hr {
    color: white;
    border: 2px solid white;
    width: 100%;
}

.img-fluid {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}

@media only screen and (max-width: 600px) {
    .img-fluid {
        height: 35vh;
    }
}

.container {
    margin: 5%;
    width: 100%;
}

p {
    width: 100%;
}

.display-1,
.display-2,
.display-3,
.display-4,
.display-5,
.display-6 {
    text-align: center;
}
</style>
