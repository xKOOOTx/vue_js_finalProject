<template>
  <div class="container">
    <div class="user-card">
      <h1>Топовый заголовок для топового сайта.</h1>
      <div class="main-information flex">
        <img src="@/assets/images/couch.jpg" alt="main_photo" width="500px">
        <div class="info">
          <h2> {{ fullName }} </h2>
          <strong>Бизнес-коуч</strong>
          <ul class="list">
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, tempore.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
          </ul>
        </div>
      </div>
      <p>Участников: {{ users.length }}</p>
      <ul class="list">
        <li v-for="(user, index) in users"
            :key="index">
          {{ `${index + 1}. ${getMemberFullName(user)}` }}
        </li>
      </ul>
      <button type="button"
              @click="previousPage()">Предыдущая</button>
      <button v-for="page in pages"
              :key="page"
              type="button"
              @click="currentPage = page">{{ page }}</button>
      <button type="button"
              @click="nextPage()">Следующая</button>
      <p>Страница {{ currentPage }} из {{ pages }}</p>
      <!--    <input type="text" @input="firstName = $event.target.value">-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyComponent',
      data() {
        return{
          firstName: 'Игнатий',
          secondName: 'Иларионович',
          lastName: 'Богатов',
          users: [
            {
              firstName: 'Иван',
              secondName: 'Иванович',
              lastName: 'Иванов',
            },
            {
              firstName: 'Иван',
              secondName: 'Федорович',
              lastName: 'Крузенштерн',
            },
            {
              firstName: 'Иван',
              secondName: 'Иванович',
              lastName: 'Младший',
            }
          ],
          pages: 3,
          currentPage: 1
        }
      },
      computed: {
        getAuthorFullName() {
          return `${this.firstName} ${this.secondName} ${this.lastName}`.toUpperCase();
        },

      },
      methods: {
        getMemberFullName(user) {
          return `${user.firstName} ${user.secondName} ${user.lastName}.`;
        },
        nextPage() {
          if (this.currentPage < this.pages) {
            this.currentPage++
          }
        },
        previousPage() {
          if (this.currentPage > 1){
            this.currentPage--
          }
        },
        loadUsers(page) {
          console.log(`Загрузка пользователей: страница ${page}`)
        }
      },
    watch: {
      currentPage(page) {
        this.loadUsers(page)
      }
    }
    }
</script>

<style lang="scss" scoped>
  .user-card {
    margin-top: 40px;
  }
  .info {
    margin-left: 50px;
  }
  h2 {
    margin-bottom: 14px;
  }
</style>