<template>
  <div>
    <vue-headful
      title='Photonorm by Clint Burgos'
    />
    <img class="banner" src="../assets/images/photonorm_banner.png">
    <text-block
      title="Normalizing the “mass” across stimuli photos"
      text="In 2015, I worked in the Lewis-Peacock fMRI lab at UT Austin for a semester. I was tasked with solving problems to make their research possible with code. All of the upcoming research projects utilized photos of objects as stimuli, which would be shown in different contexts to a subject while they were laying in an fMRI machine. They had noticed that some objects filled more space on the screen than others, causing a significant change in brain activity simply due to the the response of the visual system, and gave me the task of normalizing the “mass” across them.<br><br>I chose Java because I was most familiar with it at the time, and it has convenient built in libraries for filesystem commands and image manipulation. I checked my results visually and by comparing standard deviation of the scale ratio the program extracted for each image to do the normalization, comparing the ratios extracted for the input and the output sets.<br><br>My first approach was to count up the ratio of transparent to non-transparent pixels and use that to scale the image. I adjusted all scale factors so that the largest image was unscaled and the rest were made smaller so that none of them went out of bounds."
    />
    <table>
      <tr><th>Original</th></tr>
      <tr><td><img src="../assets/images/photonorm/wrench0.png"></td></tr>
      <tr><td><img src="../assets/images/photonorm/ac0.png"></td></tr>
    </table>
    <table>
      <tr><th>Attempt 1</th></tr>
      <tr><td><img src="../assets/images/photonorm/wrench1.png"></td></tr>
      <tr><td><img src="../assets/images/photonorm/ac1.png"></td></tr>
    </table>
    <table>
      <tr><th>Attempt 2</th></tr>
      <tr><td><img src="../assets/images/photonorm/wrench2.png"></td></tr>
      <tr><td><img src="../assets/images/photonorm/ac2.png"></td></tr>
    </table>
    <text-block
      text="Java's built in image manipulation had a quirk that was brightening my images. I switched to ImageMagick which fixed this problem and gave me more flexibility at the same time.<br><br>Another problem was that the scaling was too pronounced. Above, you can see that in attempt 1 the air conditioner became tiny&mdash; much more than would be scaled manually. I needed to change how I was counting transparent pixels, so I did two things:
      <ol>
        <li>Determined a “bounding box” based on the furthest non-transparent pixel on each of the four sides.</li>
        <li>Weighed the number of transparent pixels by 50% when calculating the ratio of transparent to non-transparent pixels.</li>
      </ol>As you can see above, attempt 2 turned out better because of these changes. I then discovered a new problem shown below."
    />
    <table>
      <tr><th>Original</th></tr>
      <tr><td><img src="../assets/images/photonorm/guitar0.png"></td></tr>
      <tr><td><img src="../assets/images/photonorm/piano0.png"></td></tr>
    </table>
    <table>
      <tr><th>Attempt 2</th></tr>
      <tr><td><img src="../assets/images/photonorm/guitar1.png"></td></tr>
      <tr><td><img src="../assets/images/photonorm/piano1.png"></td></tr>
    </table>
    <table>
      <tr><th>Attempt 3</th></tr>
      <tr><td><img src="../assets/images/photonorm/guitar2.png"></td></tr>
      <tr><td><img src="../assets/images/photonorm/piano2.png"></td></tr>
    </table>
    <text-block
      text="The shapes of some of the objects were tall or wide, and so they appeared bigger while having fewer pixels than the objects that were more square shaped. To shrink down the tall and wide objects proportionally, I added the extraction of “max dimension”, which is the pixel measurement of the largest dimension (height or length). The max dimension then is weighted by the ratio of transparent to non-transparent pixels and then with the result a new ratio by dividing it by the total height or length of the photo. This new ratio and the ratio of transparent to non-transparent were each weighted and summed for the final scaling ratio."
    />
    <img src="../assets/images/photonorm/photonorm_final_result.gif">
    <text-block
      text="I then parameterized the new weights, as well as the weight of the transparent pixels which had previously been hardcoded to 50%. I made the program accept multiple sets of the parameters in case multiple variations were to be tested. I created a class that was responsable for outputing the result of a run into an HTML file for easy viewing and comparison of the parameter sets, which looked like this:"
    />
    <br>
    <img src="../assets/images/photonorm/comparison_html.png">
    <br><br>
    <text-block
      text="Some members of the lab were using colored stimuli photos with white backgrounds and wanted the program to replace it with transparenceny as well and convert the photos to grayscale. This was the last update I made."
    />
    <br><br>
    <text-block
      title="What I'd do with more time"
      text="After I completed this basic solution, it was good enough for the researchers and I moved on to other tasks. If I had more time on the project, here's what I'd do.
      <ul>
        <li>Tune parameters with stochastic gradient descent, likely targeting lowest possible deviation in scale ratios extracted from output images.</li>
        <li>Create more metrics to measure success of normalization, instead of relying too heavily on visual perception.</li>
        <li>Run tests with actual subjects in an fMRI machine to test out the sets of normalized images and have more certainty on which set  creates the least incidental change in brain activity.</li>
      </ul>"
    />
  </div>
</template>

<script>
export default {
  name: 'Photonorm'
}
</script>

<style scoped>

table {
  margin: 0 auto;
  margin-top: 3.3333%;
  margin-bottom: 3.3333%;
  display: inline-block;
}

table img {
  width: 236px;
  height: 236px;
}

td {
  border: 1px solid #999999;
}

</style>
