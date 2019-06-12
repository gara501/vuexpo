<template>
  <div class="font-component">
   <h2>Font Component</h2>
   <button @click="increaseFont(.1)">Increase Font</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'FontComponent',
  methods: {
    ...mapActions(['increaseFont'])
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
