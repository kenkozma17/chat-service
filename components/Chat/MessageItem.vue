<template>
    <div class="flex gap-4 items-start my-2">
        <img :src="chat.picture" alt="" class="w-12 h-12 rounded-full border-2 border-primary-green">
        <div>
            <p class="font-medium">{{chat.name}}</p>
            <div class="bg-white font-medium text-primary-dark px-2 py-2 text-sm rounded-lg">
                {{chat.message}}
            </div>
            <span class="text-xs relative -top-1.5 font-medium">{{getFormattedDate}}</span>
        </div>
    </div>
</template>
<script>
import * as timeago from 'timeago.js';
export default {
    props: {
        chat: {
            type: Object,
        }
    },
    computed: {
        getFormattedDate() {
            if(this.chat.date) {
                return timeago.format(new Date(this.chat.date))
            }
        }
    },
}
</script>
<style scoped>

</style>