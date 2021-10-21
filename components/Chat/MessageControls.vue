<template>
    <form @submit.prevent="sendMessage" class="flex gap-4 items-center relative">
        <input 
            :disabled="!this.$store.state.user"
            v-model="message"
            :placeholder="inputPlaceholder"
            ref="messageInput"
            type="text" 
            class="px-6 py-4 text-white border border-transparent outline-none caret-white rounded-full bg-primary-dark w-full">
            <button v-if="isMessageValid" class="absolute top-1/2 transform -translate-y-2/4 right-8 cursor-pointer">
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
            message: '',
            loading: false
        }
    },
    computed: {
        isMessageValid() {
            return this.message && this.message.length;
        },
        inputPlaceholder() {
            if(this.$store.state.user) {
                return 'Write a message';
            }
            return 'Sign in to leave a message'
        }
    },
    methods: {
        sendMessage() {
            if(this.$store.state.user && this.isMessageValid) {
                const message = this.message;
                this.message = null;
                this.loading = !this.loading;
                this.$fire.firestore.collection('chat').doc().set({
                    name: this.$store.state.user.displayName,
                    message: message,
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
            } else {
                console.log('unauthed')
            }
        }
    }
})
</script>