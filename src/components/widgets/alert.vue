<script setup>
    import { storeToRefs } from 'pinia';
    import { useAlertStore } from '../../stores/alert_store';


    const alertStore = useAlertStore();
    const { alert } = storeToRefs(alertStore);



</script>
<template>
    <div class="res-alert" v-if="alert">
        <img class="alert-icon" src="src/assets/icons/success_icon.png" v-if="alert.type === 'success'"/>
        <img class="alert-icon" src="src/assets/icons/error_icon.png" v-else-if="alert.type === 'error'"/>
        <div v-if="alert.type === 'success'" :style="{ left:6+'rem'}">
            <p class="api-msg">you message was sent successfully!</p>
            <p class="msg">we will contact you shortly!</p>
        </div>
        <div v-else-if="alert.type === 'error'" :style="{ left:6+'rem'}">
            <p class="api-msg">something went wrong!</p>
            <p class="msg">please submit again!</p>
        </div>
        
        <img @click="alertStore.clearAlert()" class="close-alert" src="src/assets/icons/close_alert.png"/>
    </div>

</template>

<style>
    .res-alert{
        width: 28rem;
        height: 10rem;
        background: linear-gradient(90deg, rgba(229,19,58,0.9) 0%, rgba(248,156,156,0.9) 35%);
        position: fixed;
        z-index: 2;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        border-radius: 1rem;
    }
    .alert-icon{
        width: 4rem;
        height: 4rem;
        display: inline-block;
        top: 25%;
        margin-left: 2rem;
    }
    .api-msg{
        color: white;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        display: inline-block;
        margin-left: 1rem;
    }
    .msg{
        color: white;
        font-weight: bolder;
        font-size: x-large;
    }
    .close-alert{
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        right: 1.5rem;
        top: 0.8rem;
        cursor: pointer;
    }

</style>