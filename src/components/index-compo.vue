<script lang="ts">
import { Transition } from 'vue';

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
    <hr />
    <Transition appear>
        <div class="parent">
            <div>
                <i class="fa-solid fa-code-branch"></i>
                <p class="skills">C++, Python, PHP, JS</p>
            </div>
            <div>
                <i class="fa-solid fa-database"></i>
                <p class="skills">SQL, MariaDB, SQLite3</p>
            </div>
            <div>
                <i class="fa-solid fa-terminal"></i>
                <p class="skills">Linux, PowerShell, Git</p>
            </div>
            <div>
                <i class="fa-solid fa-desktop"></i>
                <p class="skills">Computer Repair</p>
            </div>
            <div>
                <i class="fa-solid fa-pen-nib"></i>
                <p class="skills">Adobe and Microsoft Office</p>
            </div>
            <div>
                <i class="fa-solid fa-user"></i>
                <p class="skills">7+ Years Customer Service</p>
            </div>
        </div>
    </Transition>

    <ul>
    </ul>
</template>

<style scoped>
hr {
    color: white;
    border: 2px solid white;
    width: 100%;
}

i {
    font-size: 2.25em;
    color: white;
    float: left;
    padding: 5%;
    margin: 0 5% 0 0;
    vertical-align: middle;
    background-color: #212529;
    border-radius: 25px;
}

.skills {
    font-size: 1.5em;
    color: white;
    margin: 5%;
}

.parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin: 2% 0;
}

.display-1,
.display-2,
.display-3,
.display-4,
.display-5,
.display-6 {
    text-align: center;
}

.flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    align-content: stretch;
    width: 50%;
}

.flex-items {
    padding: 0 2%;
    width: 25%;
    display: block;
    flex-basis: calc(100% / 3);
    align-self: center;
}

@media only screen and (max-width: 600px) {
    .flex-items {
        flex-basis: calc(100% / 2);
    }

    .parent {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
    }

    i {
        font-size: 1.75em;
        color: white;
        float: left;
        padding: 5%;
        margin: 0 5% 0 0;
        vertical-align: middle;
        background-color: #212529;
        border-radius: 25px;
    }

    .skills {
        font-size: 1.2em;
        color: white;
        margin: 5%;
    }
}

.v-enter-from {
    opacity: 0;
    transform: translateY(100%);
}

.v-enter-active {
    transition: all 0.5s ease;
}

.v-leave-to {
    opacity: 0;
    transform: translateY(0);
}
</style>
