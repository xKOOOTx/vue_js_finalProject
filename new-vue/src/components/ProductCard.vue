<template>
  <div class="product-card">
    <img
        :src="imgUrl"
        width="300px"
        alt="product-card-img"
    >
    <div class="product-card__info">
      <h2> {{ title }}</h2>
      <p class="price">{{ price }}р.</p>
      <div class="count">Доступно для доставки: {{ count }}шт.</div>
      <button type="button"> Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProductCard",
    props: ['title', 'price', 'imgUrl', 'count']
}
</script>

<style type="scss" scoped>
  .product-card {
    margin: 0;
    padding: 0;
    border: 1px solid lighten(#ccc,.5%);

    &:hover {
      cursor: pointer;
      box-shadow: 10px 10px 20px 0 rgba(0,0,0,0.75);
    }
  }

  .product-card__info {
    padding: 20px;
  }

  button {
    cursor: pointer;

    width: 100%;
    min-height: 30px;
    margin-top: 10px;

    border: 1px solid #ccc;
    outline: none;
    background-color: #ccc;

    transition: all .3s linear;
  }

  button:hover {
    color: #fff;
    background-color: darken(#ccc 55%);
  }

</style>