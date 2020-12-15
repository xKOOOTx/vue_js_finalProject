<template>
  <div class="nav">
    <ul class="nav__ul">
      <li class="list"><a href="#" class="nav__link">about</a></li>
      <li class="list"><a href="#" class="nav__link">service</a></li>
      <li class="list"><a href="#" class="nav__link">gallery</a></li>
      <li class="list"><a href="#" class="nav__link">news</a></li>
      <li class="list"><a href="#" class="nav__link">team</a></li>
      <li class="list"><a href="#" class="nav__link">contact us</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style lang="scss" scoped>
  .nav {
    padding-top: 3rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid #000;
    &__ul {
      display: flex;
      justify-content: space-around;
    }
  }
  .nav__link {
    display: block;

    font-family: inherit;
    color: inherit;
    text-decoration: none;
    text-transform: capitalize;
  }
</style>