<template>
  <div id="app">
    <router-view />
    <footer class="footer">
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/dashboard">Dashboard</router-link> |
        <router-link to="/quests">Quests</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <br />
      <div class="content has-text-centered is-size-7">
        <p><strong>Heimspiel</strong> was built for #WirVsVirus</p>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
#app {
  font-family: $main-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text;
  background-color: $background;
}

a {
  color: $productivity;
}

a:hover {
  color: $activity;
  text-decoration: underline;
}

.footer {
  background-color: $background;

  a.router-link-exact-active {
    color: $productivity;
    text-decoration: underline;
  }
}
</style>
