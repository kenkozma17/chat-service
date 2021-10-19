<template>
    <div class="bg-secondary-dark rounded-3xl py-6 h-full flex flex-col">
        <LoginPanel @load-more="loadMore" class="pb-4 px-4" />
        <div class="overflow-y-auto flex-grow px-4 bg-tertiary-dark">
            <div id="top"></div>
            <ChatMessageItem v-for="(chat, key) in messages" :key="key" :chat="chat" />
            <div id="bottom"></div>
        </div>
        <ChatMessageControls class="mt-4 px-4" />
    </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            messages: [],
            lastVisible: null
        }
    },
    methods: {
        async getMessages() {
            return new Promise((resolve, reject) => {
                const db = this.$fire.firestore;
                // Gets the chat messages from firestore and listens for updates with the onSnapshot method
                db.collection('chat').orderBy('date', 'desc').limit(10).onSnapshot((querySnapshot) => {
                    this.messages = [];
                    querySnapshot.forEach((doc) => {
                        this.messages.unshift(doc.data());
                    });
                    this.lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
                    resolve(true);
                })
            }).then(() => document.querySelector('#bottom').scrollIntoView({behavior: 'smooth'}))

        },
        async loadMore() {
            return new Promise((resolve, reject) => {
                const db = this.$fire.firestore;
                var last = this.messages.length - 1;
                db.collection('chat').orderBy('date', 'desc').startAfter(this.lastVisible).limit(10).onSnapshot((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        this.messages.unshift(doc.data());
                    });
                    this.lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
                    resolve(true);
                })
            }).then(() => document.querySelector('#top').scrollIntoView({behavior: 'smooth'})) 
        }
    },
    mounted() {
        this.getMessages()
    }
})
</script>