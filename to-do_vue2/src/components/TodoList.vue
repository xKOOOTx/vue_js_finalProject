<template>
  <ul>
    <TodoItem
        v-for="todo of todos"
        v-bind:todo="todo"
        :key="todo.index"
        v-on:remove-todo="removeTodo"
    />
  </ul>
</template>

<script>
import TodoItem from './TodoItem'
export default {
name: "TodoList",
  components: {TodoItem},
  props: ['todos'],
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id)
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  margin: 1rem 0 0 0;
  padding: 0;
}
</style>