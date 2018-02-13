<template>
  <div>
    <img id="me_cutout" src="../assets/me_banner.jpg">
    <div class="padding"></div>
    <div id="about">
      <text-block
        title='I thrive with heavy research and fine-tuning.'
        text='After getting my start as a programmer in neuroscience labs, I took on a series of open-ended projects at Wayfair in which I had generous control of project direction and design...<br><br>
        Get in contact with me with the social media links at the bottom of the page. Together let’s learn, innovate, and make cool stuff!'
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

#about {
  vertical-align: top;
  /*display: inline-block;*/
}

#me_cutout {
  padding: 0px;
  margin-left: -16px;
  margin-right: -16px;
  width: 101%;
  /*display: inline-block;*/
}

</style>
