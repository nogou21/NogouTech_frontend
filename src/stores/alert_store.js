import { defineStore } from 'pinia';


export const useAlertStore = defineStore('alert', {

    state: () => ({
        alert: null

    }),
    actions: {
        success(){
            this.alert = { type: 'success' }

        },
        error(message){
            this.alert = { type: 'error' }
        },
        clearAlert(){
            this.alert = null;
        }

    }

})