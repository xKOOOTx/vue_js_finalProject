<template>
  <div>
    <ul>
      <Items
          v-for="todo of todos"
          v-bind:todo="todo"
          :key="todo.index"
      />
    </ul>
  </div>
</template>

<script>
import Items from "./Items";
export default {
  props: ['todos'],
  components: {Items}
}
</script>

<style lang="scss" scoped>
  ul {
    margin: 1rem 0 0 0;
    padding: 0;
  }
</style>