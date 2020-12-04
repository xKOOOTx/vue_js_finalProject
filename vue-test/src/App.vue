<template>
  <div id="app">
    <header class="header">
      <div class="header__top center__content">
        <div class="header__top_logo">
          <a href="index.html" class="header__top_logo-link">Historical
            <span class="header__top_logo-span">GAMES</span></a>
        </div>
        <div class="header__top_middle">
          <a href="#" class="header__top_phone header__top_phone-email-text">
            <i class="fas fa-mobile-alt"></i>+123 456 7890</a>
          <a href="#" class="header__top_email header__top_phone-email-text">
            <i class="far fa-envelope"></i>info@example.com</a>
        </div>
        <div class="header__top_right">
          <form class="header__top_form">
            <input type="text" placeholder="search">
            <button><i class="search fas fa-search"></i></button>
          </form>
        </div>
      </div>
      <nav class="header__navigation center__content">
        <ul class="header__navigation_ul">
          <li class="header__navigation_list">
            <a href="index.html" class="header__navigation_link">Home</a></li>
          <li class="header__navigation_list">
            <a href="#" class="header__navigation_link">About</a></li>
          <li class="header__navigation_list">
            <a href="#" class="header__navigation_link">Services</a></li>
          <li class="header__navigation_list">
            <a href="#" class="header__navigation_link">Gallery</a></li>
          <li class="header__navigation_list">
            <a href="#" class="header__navigation_link">News</a></li>
          <li class="header__navigation_list">
            <a href="#" class="header__navigation_link">Team</a></li>
          <li class="header__navigation_list">
            <a href="#" class="header__navigation_link">Contact Us</a></li>
        </ul>
      </nav>
      <section class="header__bottom">
        <p class="header__bottom_nunc">Nunc eget nibh</p>
        <h1 class="header__bottom_morbi">Morbi in nisl auctor</h1>
        <div class="header__bottom_socials">
          <a href="" class="header__bottom_social-links">
            <i class="fab fa-facebook-f header__bottom_social-icons"></i></a>
          <a href="" class="header__bottom_social-links">
            <i class="fab fa-twitter header__bottom_social-icons"></i>
          </a>
          <a href="" class="header__bottom_social-links">
            <i class="fas fa-rss header__bottom_social-icons"></i>
          </a>
          <a href="" class="header__bottom_social-links">
            <i class="fab fa-vk header__bottom_social-icons"></i>
          </a>
        </div>
      </section>
    </header>
<!--    <img src="./assets/logo.png">-->
<!--    <router-link to="/TestPage">Click</router-link>-->
<!--    <router-view/>-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

a {
  text-decoration: none;
}
.center__content {
  padding-left: calc(50% - 475px);
  padding-right: calc(50% - 475px);
}

.small__center {
  padding-left: calc(50% - 375px);
  padding-right: calc(50% - 375px);
}

.contact__center {
  padding-left: calc(40%);
}

.content {
  flex: 1 0 auto;
}

.header {
  width: 100%;
  background: url(./assets/background1screen.jpg) no-repeat;
  background-size: cover;
  background-position-x: center;
}
.header__top {
  display: flex;
  margin-top: 13px;
  height: 83px;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.5);
}
.header__top_logo {
  display: flex;
  flex: 1;
}
.header__top_logo-link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  font-size: 36px;
  font-weight: 500;
  /*text-decoration: none;*/
  color: #fff;
}
.header__top_logo-span {
  margin-top: -8px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1.5em;
}
.header__top_middle {
  display: flex;
  justify-content: space-around;
  flex: 1;
}
.header__top_right {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}
.header__top_phone {
  display: flex;
}
.header__top_phone-email-span {
  color: #fff;
}
.header__top_phone-email-text {
  display: inline-block;
  color: #fff;
  font-family: inherit;
  font-size: 16.7px;
  line-height: 22px;
  font-weight: 400;
  position: relative;
}
.header__top_phone-email-text:hover {
  color: yellow;
}
.header__top_phone-email-text:after {
  display: block;
  content: "";
  margin-top: 2px;
  background-color: yellow;
  height: 1px;
  width: 0%;
  left: 50%;
  position: absolute;
  transition: width 0.2s ease-in;
  transform: translateX(-50%);
}
.header__top_phone-email-text:hover:after {
  color: yellow;
  width: 100%;
}
.header__top_phone-email-text:focus:after {
  width: 100%;
}
.header__top_form {
  display: flex;
}
.header__top_form input {
  background: none;
  outline: none;
  border: 1px solid #fff;
  color: white;
  font-family: inherit;
  font-weight: 400;
  transition: all 0.4s ease-in;
  padding-left: 16px;
}
.header__top_form input:hover {
  background: rgba(0, 0, 0, 0.3);
  border-color: yellow;
}
.header__top_form input:hover::placeholder {
  color: rgba(255, 255, 255, 0.4);
}
.header__top_form input:focus {
  background: rgba(0, 0, 0, 0.5);
}
.header__top_form input:focus::placeholder {
  color: transparent;
}
.header__top_form input::placeholder {
  color: #fff;
  text-transform: capitalize;
  font-family: inherit;
  padding: 12px 100px 12px 0;
  transition: all 0.4s ease-in;
}
.header__top_form button {
  background: none;
  outline: none;
  border: 1px solid #fff;
  transition: background 0.4s ease-in, border-color 0.4s ease-in;
  padding: 10px 15px 10px 17px;
  cursor: pointer;
}
.header__top_form button:hover {
  background: rgba(0, 0, 0, 0.3);
  border-color: yellow;
}
.header__top_form button:active {
  background: rgba(0, 0, 0, 0.5);
}
.header__top_form button:active .fa-search {
  color: yellow;
}
.header ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0 200px;
}
.header__navigation {
  justify-content: center;
}
.header__navigation_link {
  position: relative;
  display: inline-block;
  font-family: inherit;
  color: #fff;
  padding: 30px 0;
}
.header__navigation_link:hover {
  color: yellow;
}
.header__navigation_link:after {
  display: block;
  content: "";
  margin-top: 2px;
  background-color: #fff;
  height: 3px;
  width: 0%;
  left: 50%;
  top: 96%;
  position: absolute;
  transition: width 0.2s ease-in;
  transform: translateX(-50%);
}
.header__navigation_link:hover:after {
  color: yellow;
  width: 100%;
}
.header__navigation_link:focus:after {
  width: 100%;
}
.header__bottom {
  border-top: 1px solid #fff;
  padding-top: 134px;
  text-align: center;
}
.header__bottom_nunc {
  display: inline-block;
  font-family: inherit;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: #fff;
}
.header__bottom_nunc:after {
  display: inline-flex;
  content: "";
  background-color: #fff;
  height: 2px;
  width: 76%;
  margin-top: 16px;
}
.header__bottom_morbi {
  font-family: inherit;
  font-size: 60px;
  line-height: 48px;
  margin: 75px auto 0;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: #fff;
}
.header__bottom_socials {
  display: inline-flex;
  padding-bottom: 140px;
  margin-top: 75px;
}
.header__bottom_social-icons {
  border: 1px solid #fff;
  border-radius: 50%;
  margin: 0 6px;
  padding: 16px;
  color: #fff;
  display: flex !important;
  justify-content: center;
  align-items: center;
}
.header__bottom_social-icons:hover {
  color: yellow;
  border-color: yellow;
}
.header__bottom_social-icons:active {
  background-color: yellow;
  color: rgba(0, 0, 0, 0.5);
  border-color: yellow;
}

.fas, .far {
  vertical-align: middle;
}

.fa-search {
  margin: 0;
  padding: 0;
  color: #fff;
}
.fa-facebook-f {
  width: 34px;
  height: 0;
}
.fa-twitter {
  width: 34px;
  height: 0;
}
.fa-rss {
  width: 34px;
  height: 0;
}
.fa-vk {
  width: 34px;
  height: 0;
}
</style>
