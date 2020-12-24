<template>
  <header>
    <HistoricalLogo/>
    <Navigation/>
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

<style scoped>

</style>