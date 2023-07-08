<script lang="ts">
export default {
    data() {
        return {
            Projects: [
                {
                    picture: "https://picsum.photos/200/100/?blur=8",
                    name: "Portfolio / Resume Website",
                    info: "This project is the one you are currently looking at! ",
                    stack: ["Vue", "Vite", "TypeScript"],
                    url: "https://github.com/Master449/resume-overhaul"
                },
                {
                    picture: "https://picsum.photos/200/100/?blur=8",
                    name: "Rimjobs Automotive Store",
                    info: "A Group Project for CSCI 467: Software Engineering. For this project we we're given a purpose; Ours being an Online Auto Parts Store. This project had a few constraints, like a legacy database that was read only, to a remote Credit Card Authorization System. Other than that we had total freedom. My responsibilities included: MySQL for our Database, Managing Linux users and groups on Linode, and API Endpoints for the product catalogue, and shopping cart. The name was a joke that stuck. The name came from the Saints Row franchise.",
                    stack: ["Vue", "Express js", "Bootstrap", "SCSS", "SQLite3", "Linode"],
                    url: "https://github.com/467Group3A/rimjobs"
                },
                {
                    picture: "https://picsum.photos/200/100/?blur=8",
                    name: "Opossum Incremental",
                    info: "",
                    stack: ["Vue"],
                    url: "https://github.com/Master449/opossum-game"
                }
            ],
            MinorProjects: [
                {
                    name: "Home Lab",
                    info: "I currently run Proxmox for some home services. This includes a simple Web Server for development, TrueNAS Scale, and Plex Media Server.",
                    skill: "Virtualization"
                },
                {
                    name: "FOG Server",
                    info: "Successfully ran a dummy FOG Server during my time at K.E.C. Ran a small student team of 12 other studens.",
                    skill: "Servers"
                },
                {
                    name: "ResTech Hugo Website",
                    info: "Researched and constructed a Hugo site to migrate all of our Knowledge Base articles to a more flexible platform.",
                    skill: "Web Development"
                },
                {
                    name: "PCIe Passthrough",
                    info: "I daily drive Linux, but I still enjoy Video Games. I run a virtualized Windows 10, with GPU and NVMe PCIe passthrough to achieve both. Got MacOS Working as well (through Ventura)",
                    skill: "Virtualization"
                },
            ]
        }
    },
    mounted() {

    },
    created() {
        fetch("https://raw.githubusercontent.com/master449/resume-overhaul/dev/README.md")
        .then(response => response.text())
        .then(data => (this.Projects[0].info += data));
        fetch("https://raw.githubusercontent.com/master449/opossum-game/main/README.md")
        .then(response => response.text())
        .then(data => (this.Projects[2].info += data));
    }
}
</script>

<template>
    <div class="container-fluid">
        <p class="display-3">Projects</p>
        <hr />
        <div class="card mb-4" v-for="proj in Projects">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="proj.picture" class="img-fluid rounded-start" :alt="proj.name">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title display-6">{{ proj.name }}</h5>
                        <p class="card-text">{{ proj.info }}</p>
                        <p><a :href="proj.url" class="btn btn-primary">GitHub Repository</a></p>
                        <ul class="list-group list-group-horizontal">
                            <div class="flex-container">
                                <li class="list-group-item" v-for="tech in proj.stack"><strong>{{ tech }}</strong></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <p class="display-3">Minor Projects</p>
        <hr />
        <div class="flex-container">
            <div class="card minor-projects" style="width: 18rem;" v-for="proj in MinorProjects">
                <div class="card-body">
                    <h5 class="card-title">{{ proj.name }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"> {{ proj.skill }} </h6>
                    <p class="card-text">{{ proj.info }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
hr {
    color: white;
    border: 2px solid white;
}

.minor-projects {
    margin: 10px;
}

.list-group {
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

  .btn-primary {
    width: 100%;
  }
}
.flex-container {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: normal;
    align-items: normal;
    align-content: normal;
    width: 100%;
}

.card {
    width: 100%;
}

.list-group-item {
    background-color: #2d3338;
    color: white;
    margin-right: 20px;
}

.container {
    width: 100%;
}
</style>
