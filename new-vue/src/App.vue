<template>
  <div id="app">
    <ProductList/>
  </div>
</template>

<script>

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
