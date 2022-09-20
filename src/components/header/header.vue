<script>
export default {
    emits:['open','scrollToServices','openContactForm'],
    data(){
        return{
           visible: false,
           margin_right: 2,
           margin_top: 1,
           open:false
        }
        

        
    },
    computed: {
        
    },
    methods:{
      mouseover: function (){
          this.visible = true;
      },
      mouseleave: function(){
          this.visible = false;
      },
      openMenu(){
          this.open = !this.open;
      }
    }

}

</script>

<template>
<div class="header">
    <div class="logo-container">
        <img src="src/assets/imgs/nogou logo.png" class="logo"/>

    </div>
    <div class="phone-menu">
        <img src="src/assets/icons/menu.png" :style="{width:2+'rem',height:2+'rem'}" @click="openMenu"/>
    </div>
    <div class="menu-container" :class="{'see-menu':open}">
        <ul>
            <li><a href="#">Home</a></li>
            <li v-on:mouseover="mouseover"><a href="#">Map</a>
                
                
                </li>
            <li> <select class="lang-selector">
                <option>EN</option>
                <option>FR</option>
            </select></li>
        </ul>

    </div>
    <div class="contact-container" :class="{'see-menu':open}">
        <div class="contact-button" @click="$emit('openContactForm')">
            <small>Contact us</small>
            <img src="src/assets/icons/phone-call.png" class="phone-icon"/>

        </div>

    </div>
    <div class="menu-content" :class="{ 'menu-visible':visible }" v-on:mouseleave="mouseleave">
        <ul :style="{ 'margin-top': margin_top + 'rem'}">
            <li @click="$emit('scrollToServices')">services</li>
            <li>SEO</li>
            <li>design</li>
            <li>communication</li>
        </ul>
         <ul :style="{ 'margin-right': margin_right + 'rem'}">
            <li>projects</li>
            <li>Recruitment</li>
             <li>software</li>
        </ul>
    </div>

</div>

</template>

<style>
.header {
    display: block;
    top:0;
    width: 64rem;
    height: auto;
}
.logo-container {
    width: 60%;
    height: auto;
    display: inline-block;
    vertical-align: bottom;
}
.logo {
    width: 14.5rem;
    height: 5.3rem;
    margin-top: 1.5rem;
}
.phone-menu {
    display: none;
}
.menu-container {
    width: 30%;
    height: inherit;
    display: inline-block;
    vertical-align: bottom;
}
.menu-container ul {
    list-style: none;
}
.menu-container ul li {
    display: inline;
    margin-right: 2.5rem;
    padding-bottom: 0.2rem;
}
.menu-container ul li a {
    text-decoration: none;
    font-weight: bolder;
    color: #716a6e;
}
.menu-container ul li a:active {
    text-decoration: underline 0.3rem #e5133a;
}
.map-button {
  border: none;
}
.lang-selector {
    display: inline;
    border: none;
    font-size: medium;
    font-weight: bolder;
    color: #716a6e;
    outline: none;
    background: none;
}
.contact-container {
    width: 10%;
    height: auto;
    display: inline-block;
 
}
.contact-button {
    height: 2rem;
    width: auto;
    background-color: #e5133a;
    border-radius: 1rem;
    margin-bottom: 0.5rem;
    line-height: 1.8rem;
    cursor: pointer;
}
.contact-button small {
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    padding-left: 0.4rem;
}
.phone-icon {
    width: 0.6rem;
    height: 1rem;
    margin-left: 0.1rem;
}
.menu-content {
    display: none;
    position: absolute;
    width: auto;
    height: auto;
    z-index:1;
}
.menu-content ul {
    display: inline-block;
    list-style: none;
}
.menu-content ul li {
    font-size: small;
    color: #716a6e;
    font-weight: 500;
}
.menu-content ul li:hover {
    color: #e5133a;
    cursor: pointer;
}
.menu-visible {
    display:block;
    right: 7rem;
    background-color: rgb(255, 255, 255,0.8);
    border-radius: 10%;
    }


    /**SMART PHONE VIEW STYLE */



@media (max-width: 575.98px) {
.header {
        width: 100%;
        height: auto;

    }
.logo-container {
    width: 40%;
    height: auto;
    display: inline-block;
    left: 12rem;
    }
.logo {
    width: inherit;
    height: 4.5rem;
   }

.phone-menu {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    margin-bottom: 1rem;
    margin-left: 22rem;
}
.menu-container {
    width: 40%;
    height: inherit;
    display: none;
    margin-left: 50%;
    z-index: 2;
    background-color: rgb(113, 106, 110,0.5);
}
.menu-container ul {
    list-style: none;
}
.menu-container ul li {
    display: inline;
    margin-top: 0.5rem;
    /* padding-bottom: 0.2rem; */
}
.menu-container ul li a {
    text-decoration: none;
    font-weight:bold;
    font-size: large;
    color: white;
    margin-left: 2rem;
}
.menu-container ul li a:active {
    text-decoration: underline 0.3rem #e5133a;
}
.menu-container ul li a:hover {
    color: #e5133a;
}
.map-button {
  border: none;
}
.lang-selector {
    display: inline;
    border: none;
    font-size: large;
    font-weight: bold;
    color: white;
    outline: none;
    margin-left: 2rem;
    background: none;
}
.contact-container {
    width: auto;
    height: 2.7rem;
    background-color: rgb(113, 106, 110,0.5);
    display: none;
 
}
.contact-button {
    height: 2rem;
    width: auto;
    background-color: #e5133a;
    border-radius: 1rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    top:0.3rem;
    cursor: pointer;
}
.contact-button small {
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    padding-left: 0.4rem;
}
.phone-icon {
    display: none;
}
.see-menu {
    display: inline-block;
}

 }


</style>