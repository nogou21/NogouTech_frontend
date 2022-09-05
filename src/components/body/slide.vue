<script>
export default {
    emits: ['open']
}

</script>
<template>
    <div class="board-wrapper">
     <div class="stats-box">
         <div class="bar-1">
            <small>SEO campaigns</small>
            </div>
         <div class="bar-2"> 
            <small>16 partners</small>
            </div>
         <div class="bar-3">
            <small>5 projects</small>
            </div>
     </div>
     <div class="robot-wrapper">
         <img src="src/assets/imgs/robot.png" class="robot"/>
     </div>
     <div class="text-wrapper">
         <div class="big-title">
             <h3>WE CHANGE LIVES WITH OUR INNOVATIVE TOOLS</h3>
         </div>
         <div class="descript-text">
             <p>NogouTech is a Tech company with a long standing culture of constant innovation, we 
                 have enhance the life of many people by our tools
             </p>
         </div>
         <button class="talk-button" @click="$emit('open')">
             <p>LET'S TALK</p>

         </button>
     </div>
   </div>

</template>

<style>
.board-wrapper {
    width: 64rem;
    height: auto;
    display: block;
}
.stats-box {
    width: 12rem;
    height: 5.4rem;
    display: inline-block;
}
.stats-box small {
    color: white;
    font-weight: bold;
    font-size: small;
    padding-left: 1rem;
    
}
.bar-1 {
    width: 10rem;
    height: 1.3rem;
    display: block;
    background: linear-gradient(90deg, rgba(229,19,58,1) 0%, rgba(248,156,156,1) 35%);
    top: 0.3rem;
    border-top-right-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
    line-height: 1.1rem;
}
.bar-2 {
    width: 8rem;
    height: 1.3rem;
    display: block;
    margin-top: 0.7rem;
    background: linear-gradient(90deg, rgba(229,19,58,1) 0%, rgba(248,156,156,1) 35%);;
    border-top-right-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
    line-height: 1.1rem;

}
.bar-3 {
    width: 6rem;
    height: 1.3rem;
    display: block;
    margin-top: 0.4rem;
    background: linear-gradient(90deg, rgba(229,19,58,1) 0%, rgba(248,156,156,1) 35%);
    border-top-right-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
    line-height: 1.1rem;
}
.robot-wrapper {
    display: inline-block;
}
.robot {
    width: 21rem;
    height: 23.3rem;
}
.text-wrapper {
    display: inline-block;
    top: 5rem;
}
.big-title {
  width: 22rem;
  text-align: center;
}
.big-title h3 {
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
    color: #716a6e;
}
.descript-text {
    width: 22rem;
    text-align: center;
}
.descript-text p {
    font-weight: 300;

}
.talk-button {
    width: 10rem;
    height: 3rem;
    display: block;
    border: none;
    background: linear-gradient(90deg, rgba(229,19,58,1) 0%, rgba(248,156,156,1) 35%);
    margin-left: 5.3rem;
    border-radius: 5rem;
    line-height: 3rem;
    text-align: center;
}
.talk-button p {
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
}


@media (max-width: 575.98px) { 

.robot {
    width: 21rem;
    height: 23.3rem;
}


 }
</style>