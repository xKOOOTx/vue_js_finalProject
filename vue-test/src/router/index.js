import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../components/HelloWorld"
import Test_page from "../components/Test_page";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Test Page',
      component: Test_page
    }
  ]
})
