<script setup>

</script>

<template>
<div class="brands-wrapper">
    <div class="brands-box">
        <div class="brand1">
            <img src="src/assets/imgs/dhl_gray.png"/>
        </div>
        <div class="brand2">
            <img src="src/assets/imgs/mtn_gray.png"/>
        </div>
        <div class="brand3">
            <img src="src/assets/imgs/afeshop_gray.png"/>
        </div>
         <div class="brand4">
            <img src="src/assets/imgs/uba-gray.png"/>
        </div>
        <div class="brand5">
            <img src="src/assets/imgs/orange_gray.png"/>
        </div>

    </div>
</div>

</template>

<style>
.brands-wrapper {
    width: 64rem;
    height: 12rem;
    display: block;
    background: rgb(113,106,110,0.19);
    opacity: 70%;
    filter: grayscale(50%);
}
.brands-box {
    width: inherit;
    height: 8rem;
    display: block;
    top: 2rem;
    background-color: white;
}
.brand1 {
    height: 6rem;
    width: 12rem;
    display: inline-block;
    top: 2rem;
    left: 4rem;
}
.brand2 {
    height: 6rem;
    width: 12rem;
    display: inline-block;
    top: 2rem;
    left: 4rem;

}
.brand3 {
    height: 6rem;
    width: 16rem;
    display: inline-block;
    top: 2rem;
    left: 2rem;
}
.brand4 {
    height: 6rem;
    width: 12rem;
    display: inline-block;
    top: 2rem;
    left: 5rem;
}
.brand5 {
    height: 6rem;
    width: 12rem;
    display: inline-block;
    top: 2rem;
    left: 3rem;
}


</style>