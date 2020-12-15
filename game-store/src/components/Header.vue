<template>
  <div class="header-filter">
    <div class="header center">
      <div class="header__left flex_1">
        <a href="index.html" class="header__logo_link">
          <div class="header__logo header__logo_top">historical</div>
          <div class="header__logo header__logo_bottom">games</div>
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
  .header-filter {
    background: rgba(0, 0, 0, 0.5);
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 8.3rem;

    opacity: 100%;

    &__logo {
      text-transform: capitalize;
      color: #fff;

      &_link {
        display: block;
        text-decoration: none;
        text-align: center;
      }
      &_bottom {
        letter-spacing: 3rem;
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