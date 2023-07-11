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
    <div class="container">
        <p class="display-2">David Flowers II</p>
        <p class="display-6">Full-Stack Developer and Computer Technician</p>
        <hr />
        <div class="content-container">
            <h1>About Myself</h1>
            <p class="content">
                Fueled by a lifelong love of computers, I have taken every opportunity to further my
                knowledge and skills in the
                field. Starting with dual-credit courses at my local community college during high school, I went on to earn
                an
                Associate of Science degree from Kishwaukee College. Currently, I am pursuing a Bachelor of Computer Science
                at
                Northern Illinois University, where I am deepening my understanding of computer systems, algorithms, and
                programming languages. With each new step, I am solidifying my passion for technology and preparing to bring
                my
                expertise to real-world challenges and impactful solutions.</p>
        </div>
        <h1>Skillsets</h1>
        <p class="content">Whether skills on the job, or in the classroom, they are listed here proudly.</p>
        <div class="major-container">
            <div class="parent-major">
                <div>
                    <i class="fa-solid fa-toolbox"></i>
                    <p class="skills">12+ Years Computer Repair</p>
                </div>
                <div>
                    <i class="fa-solid fa-user"></i>
                    <p class="skills">7+ Years Customer Service</p>
                </div>
            </div>
        </div>
        <div class="parent">
            <div>
                <i class="fa-solid fa-code-branch"></i>
                <p class="skills">C++, PHP, JS, git</p>
            </div>
            <div>
                <i class="fa-solid fa-database"></i>
                <p class="skills">SQL and DBMS</p>
            </div>
            <div>
                <i class="fa-solid fa-terminal"></i>
                <p class="skills">Bash and PowerShell</p>
            </div>
            <div>
                <i class="fa-solid fa-memory"></i>
                <p class="skills">Computer Repair</p>
            </div>
            <div>
                <i class="fa-solid fa-server"></i>
                <p class="skills">Linux Servers</p>
            </div>
            <div>
                <i class="fa-solid fa-object-group"></i>
                <p class="skills">Adobe Suite</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
hr {
    color: white;
    border: 2px solid white;
    width: 100%;
}

i {
    vertical-align: middle;
    align-content: center;
}

h2,
h3,
h4,
h5 {
    text-align: center;
}

h1 {
    margin-top: 7%;
}

.content {
    font-size: 15pt;
    text-align: justify;
}

.container {
    display: block;
    width: 80%;
}

.parent i {
    font-size: 2.25em;
    text-align: center;
    height: 2.25em;
    width: 2.25em;
    color: white;
    float: left;
    padding: 5%;
    margin: 0 5% 0 0;
    vertical-align: middle;
    background-color: #212529;
    border-radius: 25px;
}

.parent-major i {
    font-size: 2.5em;
    text-align: center;
    vertical-align: middle;
    align-content: center;
    height: 2.25em;
    width: 2.25em;
    color: black;
    float: left;
    padding: 5%;
    margin: 0 5% 0 0;
    vertical-align: middle;
    background: linear-gradient(to bottom, #bcc6cc, #eee, #bcc6cc);
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
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin: 2% 0;
    width: 100%;
}

.major-container {
    display: block;
    margin: 0 auto;
    width: 90%;
}

.parent-major {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 100px;
    grid-row-gap: 10px;
    margin: 2% 0;
    width: 100%;
    align-items: center;
    justify-content: center;
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
        width: 100%;
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
</style>
