<template>
  <div>
    <vue-headful
      title='Clint Burgos'
    />
    <img id="me-banner" src="../assets/images/me_banner.jpg">
    <div id="about">
      <text-block
        title="I thrive with projects that involve research and discovery."
        text="After getting my start as a programmer in neuroscience labs, I took on a series of open-ended projects at Wayfair in which I had generous control of project direction and design. I've had experience building web/mobile apps, machine learning models, a streaming data pipeline, and more. The part of the process of software development I most enjoy is fine-tuning the results of an application through creative experimentation."
      />
      <text-block
        text="Get in contact with me with the social media links at the bottom of the page. Let’s learn, innovate, and make cool stuff!"
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

#me-banner {
  padding: 0px;
  margin: 0px;
  width: 100%;
}

</style>
