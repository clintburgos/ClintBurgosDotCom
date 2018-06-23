<template>
  <div id="app">
    <div id="header">
      <div id="nav-container">
        <div id="name"><a href="/">Clint Burgos</a></div>
        <div id="nav">
          <a href="/work">Case Studies</a>
          &emsp;
          <a href="static/resumes/clintburgos_resume_6-23-18.pdf" target="_blank">Resume</a>
        </div>
      </div>
    </div>
    <router-view/>
    <div id="footer">
      <div id="line"></div>
      <a href="https://www.linkedin.com/in/clintburgos/" target="_blank">
        <img class="footer-icon" src="./assets/images/linkedin_icon.png" alt="LinkedIn">
      </a>
      &nbsp;
      <a href="https://github.com/clintburgos" target="_blank">
        <img class="footer-icon" src="./assets/images/github_icon.png" alt="GitHub">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

body {
  margin: 0px;
  padding: 0px;
}

h2 {
  font-family: 'Metric-Bold', Arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 1.2;
  color: #000000;
  margin: 0px;
}

a {
  color: #999999;
  text-decoration: none;
}

a:visited {
  color: #999999;
}

a:hover {
  color: #424242;
}

a:active {
  color: #424242;
}

img {
  max-width: 100%;
}

video {
  max-width: 100%;
}

#app {
  padding: 0px;
  width: 100%;
  font-family: "lemonde-journal", Georgia, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.74;
  color: #424242;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  text-align: center;
}

#header {
  margin-top: 40px;
  margin-left: 6.6667%;
  margin-right: 6.6667%;
  margin-bottom: 40px;
}

#nav-container {
  display: flex;
}

#name {
  text-align: left;
  flex: 2;
  display: inline-block;
}

#name a {
  color: #424242;
}

#name a:visited {
  color: #424242;
}

#nav {
  text-align: right;
  flex: 1;
  display: inline-block;
  white-space: nowrap;
  flex-wrap: nowrap;
}

#line {
  margin-top: 8px;
  margin-bottom: 40px;
  height: 1px;
  background-color: #999999;
  position: relative;
}

#footer {
  margin-top: 128px;
  margin-left: 6.6667%;
  margin-right: 6.6667%;
  margin-bottom: 128px;
}

.footer-icon {
  opacity: 0.3;
  height: 13.3333%;
  width: 13.3333%;
  max-height: 64px;
  max-width: 64px;
}

.footer-icon:hover {
  opacity: 0.8;
}

.break {
  margin-top: 40px;
}

.banner {
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
}

@media screen and (max-width: 860px) {
  #nav-container {
    font-size: 18px;
  }
}

@media screen and (max-width: 400px) {
  #nav-container {
    display: block;
  }
  #nav {
    display: block;
    text-align: center;
  }
  #name {
    display: block;
    text-align: center;
  }
}

</style>
