<template>
    <form @submit.prevent="sendMessage">
        <input 
            v-model="message"
            type="text" 
            class="px-6 py-4 text-white border border-transparent outline-none caret-white rounded-full bg-secondary-dark w-full">
    </form>
</template>
<script>
import Vue from 'vue';
import date from 'date-and-time';
export default Vue.extend({
    name: 'MessageControls',
    data() {
        return {
            message: null
        }
    },
    methods: {
        sendMessage() {
            this.$fire.firestore.collection('chat').doc().set({
                message: this.message,
                date: new Date().getTime(),
                profilePhoto: 'null'
            }).then(() => {
                this.message = null;
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        }
    }
})
</script>