<template>
    <form @submit.prevent="sendMessage" class="flex gap-4 items-center relative">
        <input 
            v-model="message"
            type="text" 
            class="px-6 py-4 text-white border border-transparent outline-none caret-white rounded-full bg-primary-dark w-full">
            <button class="absolute top-1/2 transform -translate-y-2/4 right-8 cursor-pointer">
                <IconsSendMessage />
            </button>
    </form>
</template>
<script>
import Vue from 'vue';
import date from 'date-and-time';
export default Vue.extend({
    name: 'MessageControls',
    data() {
        return {
            message: null,
            loading: false
        }
    },
    methods: {
        sendMessage() {
            this.loading = !this.loading;
            this.$fire.firestore.collection('chat').doc().set({
                name: this.$store.state.user.displayName,
                message: this.message,
                date: new Date().getTime(),
                picture: this.$store.state.user.picture
            }).then(() => {
                this.message = null;
                document.querySelector('#bottom').scrollIntoView({behavior: 'smooth'})
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            })
            .finally(() => {
                this.loading = !this.loading;
            })
        }
    }
})
</script>