<template>
  <div id="app" class="container">
    <h1 class="app__h1">Welcome to your ToDo list!</h1>
    <AddTodo
        @add-todo="addTodo"/>
    <hr>
    <TodoList
        v-bind:todos="todos"
        @remove-todo="removeTodo"
    />
  </div>
</template>

<script>

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

export default {
  name: 'App',
  components: {
    TodoList,
    AddTodo
  },
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
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 4rem;
}

.app__h1 {
  position: relative;
  &:after {
     content: '';
     display: block;
     position: absolute;

     bottom: 4px;
     left: 0;
     width: 100%;
     height: 2px;

     background-color: lighten(#2c3e50, 10%);
   }
}
</style>
