<template>
  <div class="root">
    {{ text }}
  </div>
</template>

<script>
  export default {
  name: 'MyComponent',
    data() {
      return{
        text: 'Hello'
      }
    }
  }
</script>

<style scoped>

</style>