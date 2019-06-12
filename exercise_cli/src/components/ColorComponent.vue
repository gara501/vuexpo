<template>
  <div class="counter-component">
   <h2>Counter Component</h2>
   <button :style="{ background: color }" @click="changeColor()">Background: {{ color }}</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ColorComponent',
  computed: {
    color(state) {
      return this.$store.getters.color;
    }
  },
  methods: {
    ...mapActions(['changeColor'])
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
