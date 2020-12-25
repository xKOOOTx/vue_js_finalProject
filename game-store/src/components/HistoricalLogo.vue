<template>
  <div class="background">
    <div class="header">
      <div class="header__left">
        <div class="header__logo">historical<span>games</span></div>
      </div>
      <div class="header__middle flex">
        <a href="#" class="header__contacts_phone-link flex">
          <!--            <img src="" alt="phone_img" class="header__contacts_phone-img">-->
          <span class="header__contacts_phone-text flex">
              <p>+123</p>
              <p>456</p>
              <p>7890</p></span>
        </a>
        <a href="#" class="header__contacts_phone-link flex">
          <!--            <img src="" alt="email_img" class="header__contacts_phone-img">-->
          <span class="header__contacts_phone-text">info@example.com</span>
        </a>
      </div>
      <div class="header__right">
        <form>
          <input type="search">
          <button>
<!--            <img src="" alt="search">S-->
            <MagnifyIcon/>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-material-design-icons/styles.css'
import MagnifyIcon from 'vue-material-design-icons/Magnify'

export default {
  name: "HistoricalLogo",
  components: {
    MagnifyIcon
  }
}
</script>

<style lang="scss" scoped>
.background {
  background: rgba(0, 0, 0, .5);
  color: #fff;
}
.header {
  display: flex;
  justify-content: space-between;

  max-height: 8.3rem;
  & > div {
    flex: 1;
  }
  &__left {
    display: flex;
    justify-content: flex-start;
  }
  &__logo {
    display: flex;
    flex-direction: column;
  }
  &__middle {
    align-items: center;
    justify-content: space-around;
  }
  &__contacts {
    justify-content: space-around;
  }
  &__right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
.search-web-icon {
  width: 1.5rem;
  height: 1.5rem;
}
}




</style>