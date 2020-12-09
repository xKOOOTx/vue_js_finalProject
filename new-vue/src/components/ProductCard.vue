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
    data() {
      return {
        title: 'Стол Jim',
        price: 999999,
        imgUrl: 'https://hoff.ru/upload/iblock/8c9/8c989500ee8639b9e3aa267b1888b4af.jpg',
        count: 20
      }
    }
}
</script>

<style scoped>
  .product-card {
    min-width: 1200px;
    margin: 0;
    padding: 0;
  }
</style>