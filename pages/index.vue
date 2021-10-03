<template>
  <div class="bg-primary-dark h-screen w-screen p-10">
    <Login />
    <div class="flex flex-col h-full">
      <ChatMessages class="flex-grow" />
      <ChatMessageControls />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      
    }
  }
})
</script>
<style>
  html, body {
    color: white;
  }
</style>
