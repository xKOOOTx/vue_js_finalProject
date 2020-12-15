<template>
  <div class="">
    <div class="header">
      <div class="header__left flex_1">
        <a href="index.html" class="header__logo_link">
          <div class="header__logo top">historical</div>
          <div class="header__logo bottom">games</div>
        </a>
      </div>
      <div class="header__center flex_1">
        <a href="" class="header__center_phone">
          +1234567890
        </a>
        <a href="" class="header__center_email">
          info@example.com
        </a>
      </div>
      <div class="header__right flex_1">
        <form>
          <input type="text">
          <button>
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
    <Nav/>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 8.3rem;
    margin-top: 10px;

    &__logo {
      text-transform: capitalize;
      &_link {
        display: block;
      }
    }

    &__center {
      justify-content: space-around;
    }
    &__right {
      justify-content: flex-end;
    }
  }
  .fa-search {
    font-size: 1.2rem;
  }

</style>