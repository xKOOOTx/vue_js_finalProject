<template>
  <div id="app container">
    <div class="header-background__image">
      <Header />
      <Nav class="center-small" />
      <HeaderMain />
    </div>
  </div>
</template>

<script>
import '@/assets/styles/main.scss'
import Header from './components/Header'
import Nav from './components/Nav'
import HeaderMain from './components/HeaderMain'

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    HeaderMain
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header-background__image {
  padding-top: 13px;
}
</style>
