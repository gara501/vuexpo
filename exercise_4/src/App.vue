<template>
  <div id="app" class="app" :style="{ fontSize: postFontSize + 'em' }">
    <h1>{{message}}</h1>
    <div class="compo">
      <ColorComponent class="cmp" />
      <FontComponent class="cmp" />
      <CounterComponent class="cmp" />
    </div>
  </div>
</template>

<script>
import ColorComponent from './components/ColorComponent.vue';
import FontComponent from './components/FontComponent.vue';
import CounterComponent from './components/CounterComponent.vue';

export default {
  name: 'app',
   data: function () {
    return {
      message: 'Vuex application using Vue CLI'
    }
  },
  components: {
    ColorComponent,
    FontComponent,
    CounterComponent
  },
  computed: {
    postFontSize(state) {
      return this.$store.getters.postFontSize;
    }
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  font-family: 'Titillium Web', sans-serif;
}
.app {
  margin: 0 auto;
  text-align: center;
  width: 80%;
}
.compo {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
}
.cmp {
  flex: 1;
}
button {
  height: 40px;
  width: 90%;
}
</style>
