<template>
  <div class="header-main__block">
    <p>Nunc eget nibh</p>
    <h1>Morbi in nisl auctor</h1>
    <div class="socials">
      <div class="facebook">
        <a href="#" class="socials__link"></a>
      </div>
      <div class="twitter">
        <a href="#" class="socials__link"></a>
      </div>
      <div class="rss">
        <a href="#" class="socials__link"></a>
      </div>
      <div class="vk">
        <a href="#" class="socials__link"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "HeaderMain"
}
</script>

<style lang="scss" scoped>
  .header-main__block {
    padding-top: 13.4rem;
    padding-bottom: 14.1rem;
    color: black;
    text-align: center;
    & p {
      display: inline-block;
      position: relative;
      &:after {
        content: '';
        display: block;
        position: absolute;
        height: 2px;
        width: 100%;
        bottom: -1.6rem;
        left: 0;

        background-color: #000;
      }
    }
    & h1 {
      padding-top: 9.4rem;
    }
  }
  .socials {
    padding-top: 7.5rem;
  }
</style>