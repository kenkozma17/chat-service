<template>
    <div class="w-full h-full bg-secondary-dark rounded-3xl my-4 p-8">
        <ChatMessageItem v-for="(chat, key) in messages" :key="key" :chat="chat" />
    </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            messages: []
        }
    },
    methods: {
        async getMessages() {
            const db = this.$fire.firestore;
            await db.collection('chat').orderBy('date', 'asc').onSnapshot((querySnapshot) => {
                this.messages = [];
                querySnapshot.forEach((doc) => {
                    this.messages.push(doc.data());
                });
            });
        }
    },
    mounted() {
        this.getMessages();
    }
})
</script>