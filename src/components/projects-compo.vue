<script lang="ts">
export default {
    data() {
        return {
            Projects: [
                {
                    picture: "https://picsum.photos/300/300/?blur=8",
                    name: "Portfolio / Resume Website",
                    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis varius erat, in eleifend nisl maximus ac. Cras iaculis justo id faucibus ornare. Suspendisse sed rutrum sapien. Nunc felis quam, maximus ac dictum sit amet, auctor id orci. Cras aliquet libero at lorem eleifend, euismod iaculis dui venenatis. Aenean at sapien rhoncus odio condimentum pellentesque a fringilla orci. Nam vitae diam dapibus, lacinia ante non, varius urna. Morbi quis purus interdum, pellentesque diam non, hendrerit ligula. In vitae libero ac arcu semper cursus eget sed dui. Suspendisse eu eleifend ex, nec euismod est.",
                    stack: ["Vue 3", "Vite", "TypeScript"],
                    url: ""
                },
                {
                    picture: "https://picsum.photos/300/300/?blur=8",
                    name: "Rimjobs Automotive Store",
                    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis varius erat, in eleifend nisl maximus ac. Cras iaculis justo id faucibus ornare. Suspendisse sed rutrum sapien. Nunc felis quam, maximus ac dictum sit amet, auctor id orci. Cras aliquet libero at lorem eleifend, euismod iaculis dui venenatis. Aenean at sapien rhoncus odio condimentum pellentesque a fringilla orci. Nam vitae diam dapibus, lacinia ante non, varius urna. Morbi quis purus interdum, pellentesque diam non, hendrerit ligula. In vitae libero ac arcu semper cursus eget sed dui. Suspendisse eu eleifend ex, nec euismod est",
                    stack: ["Vue 3", "Bootstrap", "Express js", "SQLite3", "Linode"],
                    url: "https://github.com/467Group3A/rimjobs"
                },
                {
                    picture: "https://picsum.photos/300/300/?blur=8",
                    name: "",
                    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis varius erat, in eleifend nisl maximus ac. Cras iaculis justo id faucibus ornare. Suspendisse sed rutrum sapien. Nunc felis quam, maximus ac dictum sit amet, auctor id orci. Cras aliquet libero at lorem eleifend, euismod iaculis dui venenatis. Aenean at sapien rhoncus odio condimentum pellentesque a fringilla orci. Nam vitae diam dapibus, lacinia ante non, varius urna. Morbi quis purus interdum, pellentesque diam non, hendrerit ligula. In vitae libero ac arcu semper cursus eget sed dui. Suspendisse eu eleifend ex, nec euismod est",
                    stack: [],
                    url: ""
                }
            ]
        }
    }
}
</script>

<template>
    <div class="container">
        <h1>Projects</h1>
        <hr />
        <div class="card mb-4" v-for="proj in Projects">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="proj.picture" class="img-fluid rounded-start" :alt="proj.name">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ proj.name }}</h5>
                        <p class="card-text">{{ proj.info }}</p>
                    </div>
                    <ul>
                        <li v-for="tech in proj.stack">{{ tech }}</li>
                    </ul>
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

.card {
    width: 100%;
}
</style>
