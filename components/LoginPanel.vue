<template>
    <div>
        <a v-if="!user" @click="login">Login</a>
        <div class="md:flex md:justify-between items-center relative" v-else>
            <div class="md:flex gap-4 items-center">
                <img class="w-16 rounded-full border-2 border-primary-green" :src="user.picture" :alt="user.displayName + ' Profile Image'" />
                <p>{{ user.displayName }}</p>   
            </div>
            <div>
                <a @click="logout">Logout</a>
            </div>
            <a @click="loadMore" class="absolute bottom-0 left-1/2 transform -translate-x-2/4 -bottom-3.5">Load More Messages</a>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase';
export default {
    data() {
        return {
            user: null
        }
    },
    methods: {
        async login() {
            var provider = new this.$fireModule.auth.GoogleAuthProvider();
            await this.$fire.auth.signInWithPopup(provider)
        },
        logout() {
            this.$fire.auth.signOut();
        },
        async loadMore() {
            const db = this.$fire.firestore;
            var last = this.messages.length - 1;
            await db.collection('chat').orderBy('date', 'desc').startAfter(this.lastVisible).limit(10).onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.messages.unshift(doc.data());
                });
                this.lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
            })
        }
    },
    mounted() {
        this.user = this.$store.state.user;
    }
}
</script>
<style scoped>
    a {
        cursor: pointer;
    }
</style>