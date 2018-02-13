<template>
  <div id="app">
    <div id="header">
      <div id="nav-container">
        <div id="name"><a href="/">Clint Burgos</a></div>
        <div id="nav">
          <a href='work'>Work</a>
          &emsp;
          <a href='resume'>Resume</a>
        </div>
      </div>
      <div class="padding"></div>
    </div>
    <router-view/>
    <div id="footer">
      <div id="line"></div>
      <a href="https://www.linkedin.com/in/clintburgos/" target="_blank">
        <img class="footer-icon" src="./assets/linkedin_icon.png" alt="LinkedIn">
      </a>
      &nbsp;
      <a href="https://github.com/clintburgos" target="_blank">
        <img class="footer-icon" src="./assets/github_icon.png" alt="GitHub">
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

a {
  color: #999999;
  text-decoration: none;
  target: '_blank';
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

h1 {
  font-family: 'Metric-Bold', Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 1.2;
  color: #000000;
  margin: 0px;
}

#app {
  margin: 0px;
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
  margin-top: 40px;
  margin-left: 128px;
  margin-right: 128px;
}

#nav-container {
  display: flex;
}

#name {
  text-align: left;
  flex: 2;
  margin: 0px;
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
  margin: 0px;
  display: inline-block;
}

#line {
  margin-top: 32px;
  margin-bottom: 32px;
  height: 1px;
  background-color: #999999;
  position: relative;
}

#footer {
  margin-top: 40px;
  margin-left: 128px;
  margin-right: 128px;
  margin-bottom: 128px
}

.padding {
  height: 24px;
}

.footer-icon {
  opacity: 0.3;
}

.footer-icon:hover {
  opacity: 0.75;
}

</style>
