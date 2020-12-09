<template>
  <div id="app">
    <ProductList/>
  </div>
</template>

<script>

// import MyComponent from '@/components/MyComponent'
import ProductList from '@/components/ProductList'

export default {
  name: 'App',
  components: {
    ProductList
  },
  // sass-loader
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
}
</script>
