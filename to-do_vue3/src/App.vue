<template>
  <div class="container">
    <h1 class="app__h1">Welcome to your ToDo list!</h1>
<!--    <hr>-->
    <ItemsList
      v-bind:todos="todos"
    />
  </div>
</template>

<script>
import ItemsList from "./components/ItemsList";

export default {
  name: 'App',
  data() {
    return {
      todos: [
        {id: 1,
        title: "Сделать это.",
        completed: false
        },
        {id: 2,
        title: "Сделать то.",
        completed: false
        },
        {id: 3,
        title: "Сделать сё.",
        completed: false
        }
      ]
    }
  },
  components: {
    ItemsList,
  },
  // sass-loader
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-styles-loader',
          'css-loader',
          'sass-loader',
          'scss-loader'
        ]
      }
    ]
  },
}
</script>

<style lang="scss" scoped>

.app__h1 {
  position: relative;
  &:after {
    content: '';
    display: block;
    position: absolute;

    bottom: 4px;
    left: 55px;
    width: 80%;
    height: 2px;

    background-color: lighten(#2c3e50, 10%);
  }
}

</style>
