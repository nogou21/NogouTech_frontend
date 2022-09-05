import { defineStore } from 'pinia';
import axios from 'axios';
import { useAlertStore } from "./alert_store.js";

const baseUrl = `${import.meta.env.VITE_BASE_URI}/api/visitorMsg`;

export const useMessageStore = defineStore('message', {

    state: () => ({
      
    }),
    actions: {
        async sendMessage(visitor){
            const alertStore = useAlertStore();
            try{
               await axios.post(baseUrl,{
                    name: visitor.name,
                    email: visitor.email,
                    phone: visitor.phone,
                    message: visitor.message

                }).then(function(response){
                    console.log(response);
                    alertStore.success();
                })

            }catch(error){
                console.error(error);
                alertStore.error();

            }

        }
    }

});