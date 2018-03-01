<template>
  <div id="text-block-container">
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <br v-if="title || subtitle">
    <span v-html="text"></span>
    <a v-if="read_more_link" id="read-more" v-bind:href="read_more_link">Read More</a>
  </div>
</template>

<script>
export default {
  name: 'TextBlock',
  props: ['title', 'subtitle', 'text', 'read_more_link']
}
</script>

<style scoped>

h1 {
  font-family: 'Metric-Bold', Arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.2;
  color: #000000;
  margin: 0px;
}

h2 {
  font-family: 'Metric-Bold', Arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.2;
  color: #000000;
  margin: 0px;
}

#text-block-container {
  margin: 0 auto;
  padding-top: 40px;
  padding-left: 6.6667%;
  padding-right: 6.6667%;
  padding-bottom: 0px;
  max-width: 860px;
  text-align: left;
  font: inherit;
}

#read-more {
  white-space: nowrap;
}

</style>
