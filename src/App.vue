<template>
  <div id="app">
    <div id="header">
      <div id="nav-container">
        <div id="name">Clint Burgos</div>
        <div id="nav">
          <a href='work'>Work</a>
          &emsp;
          <a href='resume'>Resume</a>
        </div>
      </div>
      <div id="line"></div>
      <div id="padding"></div>
    </div>
    <router-view/>
    <div id="footer">
      <div id="line"></div>
      <a href="https://www.linkedin.com/in/clintburgos/" target="_blank">
        <img class="footer-icon" src="./assets/linkedin_icon.png" alt="LinkedIn">
      </a>
      &emsp;
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

#app {
  margin: 0px;
  padding: 0px;
  font-family: 'Georgia';
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  color: 'black';
  flex: 2;
  margin: 0px;
  display: inline-block;
}

#nav {
  text-align: right;
  flex: 1;
  margin: 0px;
  display: inline-block;
}

#line {
  margin-top: 8px;
  margin-bottom: 8px;
  height: 1px;
  background-color: #999999;
  position: relative;
}

#padding {
  height: 24px;
}

#footer {
  margin-top: 40px;
  margin-left: 128px;
  margin-right: 128px;
}

.footer-icon:hover {
  opacity: 0.6;
}

a {
  target: '_blank';
}

a:link {
  color: #999999;
  text-decoration: none;
}

a:hover {
  color: #000000;
}

h1 {
  font-family: 'Arial';
  font-size: 24px;
  margin: 0px;
}

</style>
