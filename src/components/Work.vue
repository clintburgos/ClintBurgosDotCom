<template>
  <div id="home-container">
    <img id="color-search-banner" src="../assets/images/color_search_banner.png">
    <text-block
      title='Color palette-based search for Joss & Main'
      text='Color is an important factor in choosing items for your home that match your style. I was assigned the task of implementing a search based on color information extracted directly from product images...'
      read_more_link='work/color_search'
    />
    <img id="photonorm-banner" src="../assets/images/photonorm_banner.png">
    <text-block
      title='Normalizing the “mass” across stimuli photos'
      text='Large differences in the perceived mass of an image can cause semantically unrelated changes in the blood flow of a subject’s brain while they are being imaged. To mitigate this, I was given the task of normalizing the perceived mass across all test images…'
      read_more_link='work/photonorm'
    />
  </div>
</template>

<script>
export default {
  name: 'Work'
}
</script>

<style scoped>

#color-search-banner {
  width: 100%;
  margin-top: 32px;
  margin-bottom: 32px;
}

#photonorm-banner {
  width: 100%;
  margin-top: 128px;
  margin-bottom: 32px;
}

</style>
