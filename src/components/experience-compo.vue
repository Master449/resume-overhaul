<script lang="ts">
export default {
    data() {
        return {
            Experience: [
                {
                    logo: "/img/NIU.png",
                    name: "Northern Illinois University",
                    title: "ResTech Computer Technician",
                    start: "May 2022",
                    end: "Present",
                    info: "Proficient second-level IT helpdesk support professional with a strong track record of resolving complex technical issues for clients. Adept at utilizing technical knowledge and problem-solving skills to provide efficient and effective solutions. Excellent communication and customer service skills, with a proven ability to effectively interact with clients and technical teams to ensure resolution of technical issues."
                },
                {
                    logo: "/img/Jewel-Osco.png",
                    name: "Jewel-Osco (DeKalb, IL)",
                    title: "Junior Scan Coordinator",
                    start: "January 2021",
                    end: "May 2022",
                    info: "Experienced Scan Coordinator with expertise in efficiently managing high-volume scanning projects. Proficient in technical software and equipment. Strong organizational, communication, and collaboration skills. Additional responsibilities include night shift coordination and supporting stockers."
                },
                {
                    logo: "/img/Jewel-Osco.png",
                    name: "Jewel-Osco (DeKalb, IL)",
                    title: "Cashier and Bagger",
                    start: "August 2017",
                    end: "January 2021",
                    info: "Customer-focused bagging and cashiering professional with a strong background in delivering exceptional service and accurately processing transactions. Skilled in managing point-of-sale operations, handling cash and credit transactions, and resolving customer inquiries. Proven reliability, adaptability, and excellent communication skills."
                }
            ]
        }
    }
}
</script>

<template>
<div id="container">
    <p class="display-3">Previous Work</p>
    <hr />
    <div class="card mb-4" v-for="(work, index) in Experience" :key="index">
        <div class="row g-0">
            <div class="col-md-2">
                <img :src="work.logo" class="img-fluid rounded-start" :alt="work.name">
            </div>
            <div class="col">
                <div class="card-body">
                    <h3 class="card-title"><strong>{{ work.title }}</strong></h3>
                    <h5 class="card-title"><strong>{{ work.name }}</strong></h5>
                    <p class="card-text">{{ work.start }} - {{ work.end }}</p>
                    <p class="card-text">{{ work.info }}</p>
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

.img-fluid {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}

#contain {
    margin: 5%;
}

@media only screen and (max-width: 600px) {
  .img-fluid {
    height: 35vh;
  }
}

</style>
