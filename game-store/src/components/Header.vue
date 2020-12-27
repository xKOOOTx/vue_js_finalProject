<template>
  <header>
    <HistoricalLogo class="center"/>
    <Navigation class="center_small"/>
  </header>
</template>

<script>
  import HistoricalLogo from "./HistoricalLogo";
  import Navigation from "./Navigation";

  export default {
    name: "Header",
    components: {
      HistoricalLogo,
      Navigation
    }
}

</script>

<style lang="scss" scoped>

</style>