<template>
  <div id="testPage">
    <h1>{{ msg }}</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'TestPage',
  data () {
    return {
      msg: 'Welcome to Test Page!'
    }
  }
}
</script>

<style scoped>
#testPage {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

#testPage img {
  width: 200px;
}
</style>
