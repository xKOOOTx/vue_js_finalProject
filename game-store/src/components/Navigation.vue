<template>
  <div class="navigation">
    <ul>
      <li><a href="#">home</a></li>
      <li><a href="#">about</a></li>
      <li><a href="#">services</a></li>
      <li><a href="#">gallery</a></li>
      <li><a href="#">news</a></li>
      <li><a href="#">contact us</a></li>
    </ul>
  </div>
</template>

<script>
export default {
name: "Navigation"
}
</script>

<style lang="scss" scoped>
  .navigation {
    & ul {
      display: flex;
      & li {

      }
    }
  }
</style>