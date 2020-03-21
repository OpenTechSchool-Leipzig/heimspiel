<template>
  <div id="app">
    <router-view />
    <footer class="footer">
      <div class="content has-text-centered">
        <p><strong>Heimspiel</strong> was built for #WirVsVirus</p>
      </div>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/quests">Quests</router-link>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
}
</style>
