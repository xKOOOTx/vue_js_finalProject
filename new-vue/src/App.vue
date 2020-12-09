<template>
  <div id="app">
    <MyComponent/>
  </div>
</template>

<script>

import MyComponent from '@/components/MyComponent'

export default {
  name: 'App',
  components: {
    MyComponent
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
