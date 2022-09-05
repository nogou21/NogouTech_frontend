<script>
export default {

    props: {
        title: {
            type: String,
            required: true,
            default: 'SERVICE UNAVAILABLE'
        },
        details: {
            type: String,
            required:  true,
            default: 'NOT ABLE TO DISPLAY SERVICE'
        },
        link: {
            type: String
        }
    }

}
</script>
<template>
<div class="service-card">
    <div class="service-icon">
        <img :src="link" class="icon"/>

    </div>
    <div class="text-box">
        <h4>{{ title }}</h4>
        <p>{{ details }} </p>

    </div>
    

</div>

</template>

<style>
.service-card {
    width: 25rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    left: 3rem;
    background-color: white;
}
.service-icon {
    width: 5rem;
    height: 5rem;
    display: inline-block;
    vertical-align: top;
    margin-left: 1rem;
}
.icon {
    width: 4.5rem;
    height: 4.5rem;
}
.text-box {
    height: auto;
    width: 65%;
    display: inline-block;
    overflow: hidden;
    margin-left: 00.5rem;
    margin-top: 0.3rem;
}
.service-card h4 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    background: linear-gradient(90deg, rgba(229,19,58,1) 0%, rgba(248,156,156,1) 35%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
.service-card p {
    color: #716a6e;
    font-size: small;
    font-weight: bolder;
}


</style>