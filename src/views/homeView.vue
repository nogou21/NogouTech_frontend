<script>
import Header1 from '../components/header/header.vue';
import Slide from '../components/body/slide.vue';
import Brands from '../components/body/brands.vue';
import Services from '../components/body/services.vue';
import Path from '../components/body/path.vue';
import Bottom from '../components/bottom/bottom-page.vue';
import contactForm from '../components/widgets/contact-form.vue';
import Alert from '../components/widgets/alert.vue';
export default {
    data(){
        return{
          isOpen: false
          
        }
    },
    components: {
    Header1,
    Slide,
    Brands,
    Services,
    Path,
    Bottom,
    contactForm,
    Alert,
    Alert
},
    computed: {
       
    },
    methods: {
      closeForm: function(){
        this.isOpen = false;
      },
      openForm: function(){
        this.isOpen = true;
      },
      toServices: function(){
        const el = document.getElementById('services');
        el.scrollIntoView({behavior: 'smooth'});
      }

    }
}

</script>

<template>
<header>
  <div class="wrapper">
     <Header1 @scrollToServices="toServices" @openContactForm="openForm"/>

  </div>

</header>

<body>
  <div class="wrapper">
    <Slide @open = "openForm"/>
    <Brands id="brands"/>
    <Services id="services"/>
    <Path/>
    <Bottom/>
    <contactForm @close="closeForm" :class="{ 'visible':isOpen }"/>   
    <Alert/>
  </div>
   
</body>
  
</template>

<style>
@import "@/assets/base.css";

#app {
  font-weight: normal;
}
.wrapper {
  width: 64rem;
  height: auto;
  margin: 0 auto;
}
.visible {
  display: block;
}

@media (max-width: 575.98px) { 

  .wrapper {
  margin-left: 3rem;
}

}
</style>
