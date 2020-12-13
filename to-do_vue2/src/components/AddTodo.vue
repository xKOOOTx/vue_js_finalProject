<template>
  <form
    @submit.prevent="onSubmit">
    <input type="text"
      v-model="title">
    <button type="submit">Create</button>
  </form>
</template>

<script>
import '@/assets/styles/main.scss'
export default {
  name: "AddTodo",
  data() {
    return {
      title: '',
    }
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }
        this.$emit('add-todo', newTodo)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  form {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    &:after {
      content: '';
      display: block;
      position: absolute;

      bottom: 4px;
      left: 0;
      width: 100%;
      height: 2px;

      background-color: #3e5871;
      border-color: #3e5871;
    }
  }
  input {
    width: 80%;
    border: 2px solid #ccc;
    font-size: 1.4rem;
    padding-left: .5rem;
    color: inherit;

    &:focus,
    &:active {
      outline: none;
      color: #000;
    }
  }
  button {
    border: 2px solid #ccc;
    background-color: #fff;

    padding: .5rem 1rem;

    &:focus,
    &:active {
      outline: none;
    }
  }
  button,
  input {
    &:hover {
      //background-color: darken(#fff, 10%);
      border-color: darken(#fff, 45%);
    }
    &:active,
    &:focus {
      background-color: darken(#fff, 5%);
      border-color: darken(#fff, 25%);
    }
  }
</style>