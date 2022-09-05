<script>
import { useMessageStore } from '@/stores/message.js';

export default {

    emits: ['close'],

    data(){
        return{
            visitorMessage:{
                name:'',
                email:'',
                phone:'',
                message:''
            }


        }
    },
    
    methods:{
        submitForm(){
            const messageStore = useMessageStore();
            messageStore.sendMessage(this.visitorMessage);
            this.clearForm();
            this.closeForm();
        },
        clearForm(){
            this.visitorMessage = {name:'',email:'',phone:'',message:''}
        },
        closeForm(){
            this.$emit('close');
        }

    }

}
</script>
<template>
<div class="contact-form-wrap">
    <div class="contact-form">
        <button class="close" @click="closeForm">
            <img src="src/assets/icons/close.png" :style="{ height:1.2+'rem',width:1.2+'rem'}"/>
        </button>
        <h3>CONTACT FORM</h3>
        <div class="contact-box">
            <div :style="{ top: 1.5 +'rem',left:3+'rem'}">
                <span>Tel: 683 911 481 - 698 255 974</span>
                <span>Email: support@nogoutech.com</span>
            </div>
            
        </div>
        <div class="name">
            <p>Name</p> <input v-model="visitorMessage.name"/>
        </div>
         <div class="email">
            <p>Email</p> <input type="email" v-model="visitorMessage.email"/>
        </div>
         <div class="phone">
            <p>Phone</p> <input type="phone" v-model="visitorMessage.phone"/>
        </div>
         <div class="message">
            <p>Message</p> <textarea v-model="visitorMessage.message"></textarea>
        </div>
        <button class="submit" @click="submitForm">SUBMIT</button>
    </div>
</div>

</template>

<style>
.contact-form-wrap {
  display: none;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: auto;
  background-color: rgb(0,0,0,0.6);
}
.contact-form {
    width: 26rem;
    height: 38rem;
    position: fixed;
    z-index:1;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
    box-shadow: 0 0.3rem 0.5rem 0 rgba(0, 0, 0, 0.2), 0 0.4rem 1rem 0 rgba(0, 0, 0, 0.19);
    background-color: white;
}
.close {
    border:none;
    width: auto;
    height: auto;
    float: right;
    top: 1rem;
    right: 1rem;
    background-color: white;
}
.contact-form h3 {
   text-align: center;
   margin-top: 2.5rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    background: linear-gradient(90deg, rgba(229,19,58,1) 0%, rgba(248,156,156,1) 35%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
.contact-box {
    width: 17rem;
    height: 6rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background-image: linear-gradient(to right,rgba(229,19,58,1), rgba(248,156,156,1));
}
.contact-box span {
    font-size: small;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    display: block;
    color: white;
}
.name {
    display: block;
    margin-top: 4rem;
}
.name p {
    display: inline-block;
    margin-left: 3rem;
    color: #716a6e;
    font-weight: normal;
}
.name input {
    display: inline-block;
    margin-left: 0.6rem;
    width: 14rem;
    border: none;
    border-radius: 0.2rem;
    background-color: #dfdfdf;
}
.name input:focus{
    outline: none;
}
.email {
    display: block;
    margin-top: 1.5rem;
}
.email p {
    display: inline-block;
    margin-left: 3rem;
    color: #716a6e;
    font-weight: normal;
}
.email input {
    display: inline-block;
    margin-left: 0.7rem;
    width: 14rem;
    border: none;
    border-radius: 0.2rem;
    background-color: #dfdfdf;
}
.email input:focus{
    outline: none;
}
.phone {
    display: block;
    margin-top: 1.5rem;
}
.phone p {
    display: inline-block;
    margin-left: 3rem;
    color: #716a6e;
    font-weight: normal;
}
.phone input {
    display: inline-block;
    margin-left: 0.5rem;
    width: 14rem;
    border: none;
    border-radius: 0.2rem;
    background-color: #dfdfdf;
}
.phone input:focus{
    outline: none;
}
.message {
    display: block;
    margin-top: 1.5rem;
}
.message p {
    display: inline-block;
    margin-left: 3rem;
    color: #716a6e;
    font-weight: normal;
    vertical-align: top;
}
.message textarea {
    display: inline-block;
    margin-left: 0.5rem;
    width: 12.8rem;
    height: 5.5rem;
    border: none;
    border-radius: 0.2rem;
    background-color: #dfdfdf;
}
.message textarea:focus{
    outline: none;
}
.submit {
    border: none;
    width: 8rem;
    height: 2.5rem;
    background: linear-gradient(to right,rgba(229,19,58,1), rgba(248,156,156,1));
    color: white;
    font-weight: bolder;
    border-radius: 00.7rem;
    margin-top: 1rem;
    float: right;
    right: 3rem;
}
</style>