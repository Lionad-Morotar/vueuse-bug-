<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 in CodeSandbox!" />
  <FullScreenButton />
</template>

<script>
import HelloWorldVue from "./components/HelloWorld.vue";
import FullScreenButton from "./components/FullScreenButton.vue";

export default {
  name: "App",
  components: {
    HelloWorld: HelloWorldVue,
    FullScreenButton,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
