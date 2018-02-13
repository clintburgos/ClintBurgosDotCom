<template>
  <div id="text-block-container">
    <h1>{{ title }}</h1>
    <br>
    <span v-html="text"></span>
  </div>
</template>

<script>
export default {
  name: 'TextBlock',
  props: ['title', 'text']
}
</script>

<style scoped>

#text-block-container {
  width: 620px;
  text-align: left;
  line-height: 1.2;
}

</style>
