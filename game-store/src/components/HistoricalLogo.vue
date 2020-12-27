<template>
  <div class="background">
    <div class="header">
      <div class="header__left">
        <div class="header__logo">historical<span>games</span></div>
      </div>
      <div class="header__middle flex">
        <a href="#" class="header__contacts_phone-link flex">
          <img src="../assets/images/header_phone.png" alt="phone_img" class="header__contacts_phone-img">
          <span class="header__contacts_phone-text flex">
              <p>+123</p>
              <p>456</p>
              <p>7890</p></span>
        </a>
        <a href="#" class="header__contacts_phone-link flex">
          <img src="../assets/images/header_email.png" alt="email_img" class="header__contacts_phone-img email">
          <span class="header__contacts_phone-text">info@example.com</span>
        </a>
      </div>
      <div class="header__right">
        <form class="flex">
          <input type="search" placeholder="search">
          <button>
            <img src="../assets/images/search.png" alt="search">
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HistoricalLogo",
  components: {
  }
}
</script>

<style lang="scss" scoped>
.background {
  background: rgba(0, 0, 0, .7);
  color: #fff;
}
.header {
  display: flex;
  justify-content: space-between;

  height: 8.3rem;
  & > div {
    flex: 1;
  }
  &__left {
    display: flex;
    justify-content: flex-start;
  }
  &__logo {
    flex-direction: column;
    justify-content: center;
    display: flex;
    align-items: flex-start;
    padding-top: 10px;

    font-family: Poppins;
    text-transform: capitalize;
    font-size: 3.6rem;
    line-height: 3rem;
    & span {
      text-transform: uppercase;
      display: flex;
      letter-spacing: 2.9rem;
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
  &__middle {
    align-items: center;
    justify-content: space-around;
  }


  &__contacts {
    justify-content: space-around;

    &_phone {
      &-text {
        align-items: center;
        font-family: "Roboto Condensed";
        font-size: 1.67rem;
        font-weight: 400;
        padding: 0 4rem 0 1.4rem;
      }
      &-img {
        width: 1.7rem;
        height: auto;
      }
    }
  }
  &__right {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & form {
      & input {
        width: 15.7rem;
        height: 3.8rem;
        background: transparent;
        outline: none;
        border: 1px solid #fff;

        font-family: "Roboto Condensed";
        color: #fff;

        font-size: 1.67rem;
        padding-left: 1.6rem;

        &::placeholder {
          text-transform: capitalize;
        }

        &:hover {
          border: 1px solid yellow;
          background-color: rgba(0, 0, 0, .2);
        }
        &:active,
        &:focus {
          border: 1px solid yellow;
          background-color: rgba(0, 0, 0, .4);
        }
      }
      & button {
        background: transparent;
        outline: none;
        border: 1px solid #fff;

        padding: 0 1.5rem 0 1.7rem;

        cursor: pointer;
        &:hover {
          border: 1px solid yellow;
          background-color: rgba(0, 0, 0, .2);
        }
        &:active {
          background-color: rgba(0, 0, 0, .4);
        }
        & img {

        }
      }
    }
  }
  .search-web-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}
.email {
  width: 2.5rem;
  height: auto;
}




</style>