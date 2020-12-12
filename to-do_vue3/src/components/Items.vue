<template>
  <li>
    <span v-bind:class="{done: todo.completed}">
      <input type="checkbox" v-on:change="todo.completed = true">
      <strong>{{ todo.id }}.</strong>
      {{ todo.title }}
    </span>
    <button class="rm">&times;</button>
  </li>
</template>

<script>
export default {
  name: "Items",
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    margin-bottom: 1rem;

    border: 2px solid #ccc;
  }
  span {
    display: flex;
    align-items: center;
  }
  input {
    margin-right: 1rem;
  }
  .rm {
    border: 1px solid transparent;
    border-radius: 50%;
    padding: .2rem .5rem;

    background-color: red;
    color: #fff;

    &:focus,
    &:active {
      outline: none;
    }
  }
  .done {
    text-decoration: line-through;
  }
</style>