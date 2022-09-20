<script>

export default {
    data(){
        return{
            aboutList: [
                {id: 1,title: 'About Nogoutech'},
                {id: 2, title: 'services',route: '/services'},
                {id: 3, title: 'history'},
                {id: 4, title: 'team'},
                {id: 5, title: 'portfolio'}
            ],
            projetsList: [
                {id: 1, title: 'Our Projects'},
                {id: 2, title: 'Afeshop'},
                {id: 3, title: 'Kori'},
                {id: 4, title: 'NogouTech Express'}
            ],
            careerList: [
                {id: 1, title: 'Career'},
                {id: 2, title: 'Recruitment'}
            ]
        }
    },

    computed: {}
    
}

</script>
<template>
<div class="bottom-wrapper">
    <div class="newsletter">
        <p>NEWSLETTER</p>
        <div class="subscribe">
            <button>SUBSCRIBE</button>
            <input type="email" id="newsletter"/>
        </div>
    </div>
    <div class="social-media">
        <p>SOCIAL MEDIA</p>
        <div class="social-media-icons">
            <img src="src/assets/icons/ng-facebook.png" class="facebook"/>
            <img src="src/assets/icons/ng-linkin.png" class="linkin"/>
        </div>
    </div>
    <div class="about-box">
        <ul v-for="item in aboutList" :key="item.id">
            <li :class="[ item.id === 1 ? 'title' :'']" @click="this.$router.push({path: item.route})">{{ item.title}}</li>
        </ul>

    </div>
    <div class="projets-box">
        <ul v-for="item in projetsList" :key="item.id">
            <li :class="[ item.id === 1 ? 'title' :'']">{{ item.title}}</li>
        </ul>

    </div>
    <div class="career-box">
        <ul v-for="item in careerList" :key="item.id">
            <li :class="[ item.id === 1 ? 'title' :'']">{{ item.title}}</li>
        </ul>

    </div>
    <div class="last-box"></div>
</div>

</template>

<style>
.bottom-wrapper {
    height: auto;
    width: inherit;
    display: block;
    margin-top: 3rem;
}
.newsletter {
    display: inline-block;
 
}
.subscribe {
    display: block;

}
.subscribe button {
    height: 3rem;
    width: 6rem;
    display: inline-block;
    vertical-align: top;
    border: none;
    background: linear-gradient(90deg,rgba(248,156,156,1) 0% ,rgba(229,19,58,1) 85%);
    border-bottom-left-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    color: white;
    font-size: small;
    font-weight: bolder;
}
.subscribe input {
    width: 16rem;
    height: 3rem;
    border: solid 0.15rem #e5233a;
    display: inline-block;
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
}
.subscribe input:focus {
    outline: none;

}
.newsletter p {
    font-size:large;
    font-weight: bolder;
     background: linear-gradient(90deg, rgba(229,19,58,1) 0%, rgba(248,156,156,1) 35%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
.social-media {
    display: inline-block;
    width: auto;
    height: auto;
    margin-left: 34rem;
    
}
.social-media-icons {
    display: block;
    margin-left: 00.5rem;
}
.facebook {
    width: 2.5rem;
    height: 2.5rem;
    display: inline-block;
}
.linkin {
    width: 2.5rem;
    height: 2.5rem;
    display: inline-block;
    margin-left: 1rem;
}
.social-media p {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    background: linear-gradient(90deg, rgba(229,19,58,1) 0%, rgba(248,156,156,1) 35%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
.about-box {
    height: auto;
    width: auto;
    display: inline-block;
    margin-top: 4rem;
    vertical-align: top;
}
.about-box ul {
    list-style: none;
}
.about-box ul li {
    font-family: Arial, Helvetica, sans-serif;
    font-size: medium;
    font-weight: bold;
    color: #717171; 
    cursor: pointer;
}
.title {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    background: linear-gradient(90deg, rgba(229,19,58,1) 0%, rgba(248,156,156,1) 35%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
.projets-box {
    height: auto;
    width: auto;
    display: inline-block;
    vertical-align: top;
    margin-top: 4rem;
    margin-left: 17rem;

}
.projets-box ul {
    list-style: none;
}
.projets-box ul li {
    font-family: Arial, Helvetica, sans-serif;
    font-size: medium;
    font-weight: bold;
    color: #717171;
    cursor: pointer;
}
.career-box {
    height: auto;
    width: auto;
    display: inline-block;
    margin-top: 4rem;
    margin-left: 17rem;
}
.career-box ul {
    list-style: none;
}
.career-box ul li {
    font-family: Arial, Helvetica, sans-serif;
    font-size: medium;
    font-weight: bold;
    color: #717171;
    cursor: pointer;
}
.last-box {
    width: inherit;
    height: 3rem;
    background: linear-gradient(90deg, rgba(229,19,58,1) 0%, rgba(248,156,156,1) 35%);
}
</style>