<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="scene">
      <AxBattler />
      <Gilius />
      <TyrisFlare />
      <DeathAdder />
    </div>
  </div>
</template>

<script>
import AxBattler from "./components/AxBattler.vue";
import Gilius from "./components/Gilius.vue";
import TyrisFlare from "./components/TyrisFlare.vue";
import DeathAdder from "./components/DeathAdder.vue";

export default {
  name: "app",
  components: {
    AxBattler,
    Gilius,
    TyrisFlare,
    DeathAdder
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: url('./assets/bg.png') no-repeat;
}
.scene {
  display: flex;   
  width: 100%; 
}
</style>
