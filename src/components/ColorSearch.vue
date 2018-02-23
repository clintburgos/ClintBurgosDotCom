<template>
  <div>
    <text-block
      title="Color palette-based search for Joss & Main"
      text="Color is an important factor in choosing items for your home that match your existing style. Joss & Main's color search implementation relies on keywords provided by the manufacturer which limits the precision of the color search. Searching multiple colors does not take into account the prominence of the color (for example, 90% blue/10% red would be in the same bucket as 10% blue/90% red). During my summer internship at Wayfair, I implemented a search based on color information extracted directly from product images that would also allow for percentage specification."
    />
    <div class='break'></div>
    <text-block
      title="Extracting Colors"
      text="I decided to leverage Image Magick for imaage processing which is used at Wayfair to automatically format product images, and which I had <a href='/work/photonorm'>prior experience using</a>."
    />
  </div>
</template>

<script>
export default {
  name: 'ColorSearch'
}
</script>

<style scoped>

.break {
  height: 32px;
}

</style>
