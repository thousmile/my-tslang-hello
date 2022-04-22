<template>
  <nav>
    <router-link to="/">首页</router-link> |
    <router-link to="/SetupAndRef">setup 和 ref</router-link> |
    <router-link to="/ReactiveView">响应式</router-link> |
    <router-link to="/SetupProps">SetupProps</router-link> |
    <router-link to="/ComputedAndWatch">ComputedAndWatch</router-link> |
    <router-link to="/ProvideAndInject">ProvideAndInject</router-link> |
    <router-link to="/PromiseDemo">PromiseDemo</router-link> |
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
