<template>
  <div id="app">
    <div id="header">
      <div id="nav-container">
        <div id="name"><a href="/">Clint Burgos</a></div>
        <div id="nav">
          <a href="/work">Work</a>
          &emsp;
          <a href="static/resumes/clintburgos_resume_3-30-16.pdf" target="_blank">Resume</a>
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

#app {
  padding: 0px;
  width: 100%;
  font-family: "lemonde-journal", Georgia, serif;;
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
  margin-top: 2.0833%;
  margin-left: 6.6667%;
  margin-right: 6.6667%;
  margin-bottom: 2.0833%;
}

#nav-container {
  display: flex;
}

#name {
  text-align: left;
  flex: 1;
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
}

#line {
  margin-top: 0.41667%;
  margin-bottom: 2.0833%;
  height: 1px;
  background-color: #999999;
  position: relative;
}

#footer {
  margin-top: 6.6667%;
  margin-left: 6.6667%;
  margin-right: 6.6667%;
  margin-bottom: 6.6667%;
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

</style>
