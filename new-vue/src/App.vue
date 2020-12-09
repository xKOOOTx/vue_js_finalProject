<template>
  <div id="app">
    <ProductCard/>
  </div>
</template>

<script>

// import MyComponent from '@/components/MyComponent'
import ProductCard from '@/components/ProductCard'

export default {
  name: 'App',
  components: {
    ProductCard
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
