<template>
  <div class="product-list">
    <div class="container">
      <h1>Письменные столы</h1>
      <ul class="list flex">
        <li class="list__element"
            v-for="(product, index) in products"
            :key="index">
          <product-card
              :title="product.title"
              :price="product.price"
              :imgUrl="product.imgUrl"
              :count="product.count"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import ProductCard from './ProductCard'

  export default {
    name: "ProductList",
    components: { ProductCard },
    data() {
      return {
        products: [
          {
            title: 'Стол Jim',
            price: 17999,
            imgUrl: 'https://hoff.ru/upload/iblock/8c9/8c989500ee8639b9e3aa267b1888b4af.jpg',
            count: 20
          },
          {
            title: 'Стол Monako',
            price: 10399,
            imgUrl: 'https://hoff.ru/upload/iblock/ceb/ceb77609037f66a7c04735c94685e980.jpg',
            count: 12
          },
          {
            title: 'Стол Jim',
            price: 14999,
            imgUrl: 'https://hoff.ru/upload/iblock/dc8/dc8b6d333be8a697f1e20f95b031656f.jpg',
            count: 5
          }
        ]
      }
    }
  }
</script>

<style type="scss" scoped>
.product-list {
  list {
    li {
      padding: 20px;
    }
  }
}

</style>