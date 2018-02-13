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
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  font-family: 'Georgia';
  font-size: 18px;
  margin-top: 40px;
  margin-left: 128px;
  margin-right: 128px;
  padding: 0px;
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
  height: 1px;
  background-color: #999999;
  position: relative;
}

a:link {
  color: #999999;
  text-decoration: none;
}

a:hover {
  color: #666666;
}

</style>
