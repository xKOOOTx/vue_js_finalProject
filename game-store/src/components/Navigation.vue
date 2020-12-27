<template>
  <div class="navigation center_small">
    <ul>
      <li class="list"><a href="#">home</a></li>
      <li class="list"><a href="#">about</a></li>
      <li class="list"><a href="#">services</a></li>
      <li class="list"><a href="#">gallery</a></li>
      <li class="list"><a href="#">news</a></li>
      <li class="list"><a href="#">contact us</a></li>
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
    border-bottom: 1px solid black;
    & ul {
      display: flex;
      justify-content: space-around;
      & li {
        padding: 3rem;
        & a {
          display: inline-block;
          font-family: "Roboto Condensed";
          font-size: 1.6rem;
          text-transform: capitalize;

          position: relative;


          &:hover {
            &:after {
              content: '';
              width: 100%;
              height: 3px;
              background: #000;
            }
          }

          &:active {
            color: yellow;
            &:after {
              background: yellow;
            }
          }
          &:after {
            content: '';
            width: 100%;
            height: 3px;
            background: transparent;
            position: absolute;
            left: 0;
            bottom: -32px;
          }

        }
      }
    }
  }
</style>