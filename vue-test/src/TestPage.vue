<template>
  <div id="testPage">
    <img src="./assets/welcome.png" alt="">
    <router-link to="/App">Назад</router-link>
    <router-view/>
  </div>

</template>

<script>
export default {
  name: 'TestPage'
}
</script>

<style>
#testPage {
  font-size: 16px;
  color: red;
}
</style>
