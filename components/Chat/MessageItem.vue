<template>
    <div>
        <div class="rounded-circle w-50 h-50"></div>
        <div>{{chat.message}} - {{getFormattedDate}}</div>
    </div>
</template>
<script>
import date from 'date-and-time';
export default {
    props: {
        chat: {
            type: Object,
        }
    },
    computed: {
        getFormattedDate() {
            if(this.chat.date) {
                return date.format(new Date(this.chat.date), 'MMM DD YYYY at hh:mm A')
            }
        }
    },
}
</script>
<style scoped>

</style>