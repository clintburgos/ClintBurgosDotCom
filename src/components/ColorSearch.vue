<template>
  <div>
    <vue-headful
      title='Color Search by Clint Burgos'
    />
    <img id="top-banner" class="banner" src="../assets/images/color_search_banner.png">
    <text-block
      title="Color palette-based search for Joss & Main"
      text="Color is an important factor in choosing items for your home that match your existing style. Joss & Main's color search implementation relies on keywords provided by the manufacturer which limits the precision of the color search. Searching multiple colors does not take into account the prominence of the color (for example, 90% blue/10% red would be in the same bucket as 10% blue/90% red). I implemented a search based on color information extracted directly from product images that would also allow for percentage specification. It was modeled off of <a href='https://labs.tineye.com/multicolr/' target='_blank'>TinEye's excellent color search.</a>"
    />
    <text-block
      text="Wayfair and its sub-sites are built in PHP. I decided to leverage <a href='https://www.imagemagick.org/script/index.php' target='_blank'>Image Magick</a> for image processing which is used at Wayfair to automatically format product images&mdash; and which I had <a href='/work/photonorm'>prior experience using</a>."
    />
    <div class='break'></div>
    <text-block
      subtitle="Extracting Colors"
      text="All images had a solid white background, so first this had to be removed. Image Magick has a nice function for this which I used. I then spent some time tuning the parameters until it looked decent across images. It was far from perfect as there was sometimes too much or too little white left over in a given product, but it was close enough for the initial implementation. After some searching I quicking discovered <a href='https://en.wikipedia.org/wiki/Color_quantization' target='_blank'>color quantization</a>, the process of reducing the color palette of an image. Image Magick has functionality for this too. Great! Problem solved. (Or so I thought, more on this later)"
    />
    <text-block
      text="I played with different palette sizes and found 24 to be a good number of colors. Anything much greater than this had colors that didn't describe the image well, and anything much less failed to grab important colors."
    />
    <div class='break'></div>
    <text-block
      subtitle="Indexing"
      text="I wanted to index products into equal size bins of color so that distance would not have to be calculated for every search. I also wanted products to be included in bins a wide radius around each color so that results a little bit off from the selected color could show up at the bottom of the results. For example, if you searched a bright red you might still be interested in looking at dark red products after the closer matches were exhausted. I started by using RGB color space because I thought I could use the Euclidean distance between two RGB values to determine which bins a product should be listed under. I had a table in Joss & Main's MSSQL database that stored rows of R value, G value, B value, Distance, SKU, and image URL."
    />
    <text-block
      text="For a given query, all queried colors were matched with the closest bin. The products that could be found in every bin were selected and sorted by average distance, ascending."
    />
    <div class='break'></div>
    <text-block
      subtitle="Color Spaces, Distance, and Perception"
      text="It turns out color is a very complicated subject because it's very entangled with human perception. As a result, there are many representations of color in space that were developed to serve different purposes, all with their own advantages and disadvantages."
    />
    <img src="../assets/images/color_search/rgb.png">
    <text-block
      subtitle="RGB"
      text="<a href='https://en.wikipedia.org/wiki/RGB_color_model' target='_blank'>RGB</a> was most familiar to me because it's used in our screens to display color, so we see it everywhere. I split it up into bins of size 32, which only gave me moderately good results. Extreme colors (such as only red, only green, only blue) did not return expected results. Greens of all kinds seemed to have an especially hard time."
    />
    <img src="../assets/images/color_search/hsv.png">
    <text-block
      subtitle="HSV"
      text="Another color space I tried was <a href='https://en.wikipedia.org/wiki/HSL_and_HSV' target='_blank'>HSV</a> because I figured most of the information people would care about would be covered in the Hue component. I binned the Hue component much smaller than Saturation and Value, and manually set boundaries for white/black. Attempting to use distances on this color space had all around awful results."
    />
    <img src="../assets/images/color_search/lab.png">
    <text-block
      subtitle="LAB"
      text="The reason Euclidean distance didn't work well is that it won't accurately represent the <i>perceptual</i> “distance” of two colors. That's because human perception of color distance is actually unequal and full of exceptions. I eventually discovered that there's been a ton of research into this, resulting in a color space designed specifically to solve the problem of perceptual distance between colors. It's called <a href='https://en.wikipedia.org/wiki/Lab_color_space' target='_blank'>LAB</a>."
    />
    <text-block
      text="Using this color space split into equal bins I got better results than with RGB, however there were still some issues. For example, searching for red returned some orange products. Searching magenta did find the magenta chair. Searching blues and greens were less likely to return results that were close but not exact."
    />
    <div class='break'></div>
    <text-block
      subtitle="Delta-E"
      text="Seaching further I discovered that there have been improvements to LAB over the years, specifically a series of distance formulas to more accurately assess color distance. I implemented the most recent one, <a href='https://en.wikipedia.org/wiki/Color_difference#CIELAB_Delta_E*' target='_blank'>CIEDE2000</a>, and this lead to great results."
    />
    <text-block
      text="It was now very complicated to determine equal size bins using the distance formula, so instead I selected bins by joining all images together and getting a quantized palette on them all at once, with more colors than any individual image. This worked well until the number of images I tested with grew into the thousands, at which point I could no longer hold them all in memory simultaneously. I then began creating bins based on the color palette image I was using for the color picker, which worked even better and allowed new images to be added without much fuss."
    />
    <div class='break'></div>
    <img src="../assets/images/color_search/palette.png">
    <text-block
      subtitle="Extracting Percentages"
      text="Remember the quanitized palettes from Image Magick? No matter how I tweaked it however there seemed to be “repeat colors”&mdash; colors that were so perceptually similar they really should be counted as a single color. This was throwing my percentages off. I now utilized the Delta-E and LAB space to run through all the colors in the quanitized palette, grabbing color from it one at a time, but only the colors that were beyond a hardcoded distance from all the colors already grabbed. Colors that were not outside this distance had their percentages added to the color they were closest to. At the end, colors with below 1% were dropped as noise, and the percentages were recalculated."
    />
    <text-block
      text="The ordering of the quantized palette colors greatly influenced the outcome because the algorithm was more likely to pickup a color when it had seen fewer colors (towards the top of the list). Directly out of Image Magick the palette was ordered from darkest to lightest, which lead to most colors being combined into a shade of black. I also tried averaging the similar colors, but this lead to a palette of muted and grey. The best ordering was by the original percentage, which usually allowed the most prominent shade of a common color to consume the percentages of the similar colors. I had the algorithm create an HTML file demonstrating this process, <a href='/static/color_search/getpal.html' target='_blank'>which you can take a look at here</a>."
    />
    <div class='break'></div>
    <text-block
      subtitle="Indexing/Querying Percentages"
      text="At first I thought there would have to be four different percentage values extracted to cover the intention of four different searches. It seemed likely that a product that was mostly grey except for one or two colors might be what the customer is looking for even if they only specified the two colors, but if grey was specified they would be expecting a result closer to reality. I also thought that a customer would typically be searching for prominent colors of a product (large percentage), but if they were searching small percentages then those small percentage colors would become relevant. The relationship of the four percentage values I tried is shown below. In the end, a single accurate percentage was the best in all senarios (in my personal test queries)."
    />
    <div class='break'></div>
    <img src="../assets/images/color_search/percents.png">
    <text-block
      text="Once all products found in the color bins were collected and the average color distance calculated, the average distance of percent from each closest color was calculated. The results were now ordered by color distance, percent distance ascending."
    />
    <text-block
      text="The final touch was a eyedropper tool that could select any color from any product image in the result set. This could be useful for finding products that work together in a color scheme. I used HTML5 canvases to achieve this, and ran into an issue with CORS. As a quick fix I simply copied all the images into the same domain, but in production this obstacle would have to be worked around in some other way."
    />
    <text-block
      text="Here's a video of the color search in action!"
    />
    <div class='break'></div>
    <video width="860" controls>
      <source src="../assets/videos/color_search.mp4" type="video/mp4">
    </video>
    <div class='break'></div>
    <text-block
      subtitle="Searching with Keywords"
      text="A color palette UI was not intended be the first introduction of my color search in production however. First I needed to incorporate the new color search into keywords on the site's keyword search. I hoped I could just assign a good example of each color to each color name as keyword, but this did not work well. I then returned to HSV (HSL this time, actually) color space and manually cut it up into sections that I felt defined each color name. The results were... really good actually! It was better than the existing Joss & Main color keyword search. To visualize the classifications I wrote a script to replace each pixel in an image with a color that best represents the color name its color was classified as, <a href='/static/color_search/hsl_binner_output2.html' target='_blank'>the results of which were saved to HTML</a>."
    />
    <div class='break'></div>
    <text-block
      subtitle="Naive Bayesian Approach"
      text="The manually defined barriers I defined in HSL were not perfect, and they were also tailored to my personal perception of the colors. I wanted there to be a way for user input to change the classifications, and for it to “learn” names for colors as time went on. At first I tried to work out how to have the existing barriers altered, but this was too complex. I instead decided to give a <a href='https://en.wikipedia.org/wiki/Naive_Bayes_classifier' target='_blank'>naive bayes</a> version a try after doing some research. This consisted of saving rows of color space component values and a classification into a table and then comparing normal distributions based on these points. Whichever classification is “higher” at the point to be classified will be chosen."
    />
    <img src="../assets/images/color_search/bayes.jpg">
    <text-block
      text="An initial dataset of these points + classifications was gathered by using the manually defined HSL boundaries from before, run over every pixel of every image. The results were decent, but not as good as the manually defined boundaries. Strangely, RGB was the best performing colorspace. Here's a video of it in action:"
    />
    <div class='break'></div>
    <video width="484" controls>
      <source src="../assets/videos/color_classifier.mp4" type="video/mp4">
    </video>
    <div class='break'></div>
    <text-block
      title="Next steps"
      text="This project is on hold at Wayfair, but these would be my next steps:
      <ul>
        <li>There's an <a href='https://github.com/sergeyk/rayleigh' target='_blank'>open source project that solves this problem</a>. I'd get that running as a service that could take requests over the network.</li>
        <li>As for color name classification, there's <a href='https://wagenaartje.github.io/neataptic/articles/classifycolors/' target='_blank'> open source code for a neural network classifier</a>, and a bunch of other machine learning solutions that are more robust than the naive bayes.</li>
        <li>Another area for improvement would be the use of images with transparent backgrounds, if possible, and if not I'd try to experiment with <a href='https://making.lyst.com/2014/02/13/background-removal/' target='_blank'>other ways to exclude the background</a>.</li>
      </ul>"
    />
  </div>
</template>

<script>
export default {
  name: 'ColorSearch'
}
</script>

<style scoped>

</style>
