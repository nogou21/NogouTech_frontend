<script>
import serviceCard from '../widgets/service-card.vue'

export default {
    components: {
        serviceCard
    },
    data(){
        return{
            services: [
                 {
                id: 1,  
                title: 'SEO management', 
                details: 'we design and implement SEO campaign for your organization', 
                logo_link: 'src/assets/icons/seo-logo.png'},

                {
                id: 2,   
                title: 'Communication', 
                details: 'let our experts communicate your vision to the world', 
                logo_link: 'src/assets/icons/communication-logo.png'},

                {
                id: 3,   
                title: 'Software', 
                details: 'Our Team of young talented engineers will deliver you the best and stable systems', 
                logo_link: 'src/assets/icons/software-logo.png'},

                {
                id: 4, 
                title: 'Design', 
                details: 'we provide a broad range of design services for your organization', 
                logo_link: 'src/assets/icons/design-logo.png'}

            ],
            
               
        }
    },
    computed: {
        isMargin(){
            return{
                space:() => {
                    for(var service in this.services){
                        return service.id%2 === 0;
                    }
                }
            }
        },

    },
}

</script>
<template>
<div class="services-wrapper">
<div class="card-wrapper" v-for=" service in services " :key="service.id">
    <service-card class="custom-card" :title="service.title" :details="service.details" :link="service.logo_link" :class="isMargin"/>
</div>
    
 
</div>
</template>

<style>
.services-wrapper {
    width: 64rem;
    height: 28rem;
    display: block;
    margin-top: 1rem;
    background: rgb(113,106,110,0.08);
}
.card-wrapper {
    display: block;
}
.custom-card {
    margin-top: 2rem;
    float:left;
}
.space {
    margin-left: 2.7rem;
}

</style>