<template>
  <div class="header-filter">
    <div class="header center">
      <div class="header__left flex_1">
        <a href="index.html" class="header__logo_link">
          <p class="header__logo header__logo_top">historical</p>
          <p class="header__logo header__logo_bottom">games</p>
        </a>
      </div>
      <div class="header__center flex_1">
        <a href="#" class="header__center_phone">
          <img src="../assets/images/header_phone.png" alt="" class="header__center_phone-img">
          <span class="header__center_phone-number">
            <p>+123</p><p>456</p><p>7890</p>
          </span>
        </a>
        <a href="#" class="header__center_phone">
          <img src="../assets/images/header_email.png" alt="" class="header__center_phone-img">
          info@email.com
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
      color: #fff;
      font-family: Poppins;

      &_link {
        display: block;
        text-decoration: none;
        text-align: center;
      }
      &_top {
        text-align: start;

        font-size: 3.6rem;
        text-transform: capitalize;
        letter-spacing: .36rem;
      }
      &_bottom {
        text-align: end;

        font-size: medium;
        letter-spacing: 2.95rem;
        text-transform: uppercase;
      }
    }
    &__center {
      justify-content: space-between;
      align-items: center;

      font-size: 1.7rem;
      &_phone {
        display: flex;
        align-items: center;

        font-family: Roboto;
        text-decoration: none;
        color: #fff;

        &-img {
          height: 2.5rem;
          padding-right: 14px;
        }
        &-number {
          display: flex;
          & p:not(:last-child) {
            padding-right: 5px;
          }
        }
      }
    }
    &__right {
      justify-content: flex-end;
    }
  }
  .fa-search {
    font-size: 1.2rem;
  }

</style>