<script lang="ts">
export default {
    name: 'my-education',
    props: {},
    data() {
        return {
            isMobile: false,
            Education: [
                {
                    logo: "/img/NIU.png",
                    name: "Northern Illinois University",
                    study: "Bachelors of Computer Science",
                    start: "August 2021",
                    end: "Present",
                    info: "Pursuing a Bachelor of Science in Computer Science, with a focus on Software Engineering. Developing hands-on experience in software development, data structures and algorithms, databases, and computer architecture. Building a strong foundation in computational thinking and problem-solving skills, and preparing to apply technical knowledge to real-world challenges and create innovative solutions."
                },
                {
                    logo: "/img/Kishwaukee.png",
                    name: "Kishwaukee College",
                    study: "Associates of Science",
                    start: "August 2018",
                    end: "May 2021",
                    info: "Fulfilled general education requirements while also cultivating a passion for programming. This period marked a turning point in my journey towards becoming a skilled developer, laying the foundation for further learning and growth in the field."
                },
                {
                    logo: "/img/KEC.png",
                    name: "Kishwaukee Education Consortium",
                    study: "Technical Training",
                    start: "August 2016",
                    end: "May 2018",
                    info: "Pursuing a Bachelor of Science in Computer Science, with a focus on Software. Developing hands-on experience in software development, data structures and algorithms, databases, and computer architecture. Building a strong foundation in computational thinking and problem-solving skills, and preparing to apply technical knowledge to real-world challenges and create innovative solutions upon graduation."
                },
                {
                    logo: "/img/KEC.png",
                    name: "Kishwaukee Education Consortium",
                    study: "Technical Training",
                    start: "August 2016",
                    end: "May 2018",
                    info: "Pursuing a Bachelor of Science in Computer Science, with a focus on Software. Developing hands-on experience in software development, data structures and algorithms, databases, and computer architecture. Building a strong foundation in computational thinking and problem-solving skills, and preparing to apply technical knowledge to real-world challenges and create innovative solutions upon graduation."
                },
                {
                    logo: "/img/KEC.png",
                    name: "Kishwaukee Education Consortium",
                    study: "Technical Training",
                    start: "August 2016",
                    end: "May 2018",
                    info: "Pursuing a Bachelor of Science in Computer Science, with a focus on Software. Developing hands-on experience in software development, data structures and algorithms, databases, and computer architecture. Building a strong foundation in computational thinking and problem-solving skills, and preparing to apply technical knowledge to real-world challenges and create innovative solutions upon graduation."
                },
                {
                    logo: "/img/KEC.png",
                    name: "Kishwaukee Education Consortium",
                    study: "Technical Training",
                    start: "August 2016",
                    end: "May 2018",
                    info: "Pursuing a Bachelor of Science in Computer Science, with a focus on Software. Developing hands-on experience in software development, data structures and algorithms, databases, and computer architecture. Building a strong foundation in computational thinking and problem-solving skills, and preparing to apply technical knowledge to real-world challenges and create innovative solutions upon graduation."
                }
            ]
        }
    },
    computed: {},
    watch: {},
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
<div id="contain">
    <h1>Education</h1>
    <hr />
    <div class="card mb-4" v-for="(school, index) in Education" :key="index">
        <div class="row g-0">
            <div class="col-md-2">
                <img :src="school.logo" class="img-fluid rounded-start" :alt="school.name">
            </div>
            <div class="col">
                <div class="card-body">
                    <h5 class="card-title"><strong>{{ school.name }} - {{ school.study }}</strong></h5>
                    <p class="card-text">{{ school.start }} - {{ school.end }}</p>
                    <p class="card-text">{{ school.info }}</p>
                </div>
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

#contain {
    margin: 5%;
}
</style>
