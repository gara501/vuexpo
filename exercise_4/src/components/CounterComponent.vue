<template>
  <div class="counter-component">
   <h2>Counter Component</h2>
   <button @click="increment(3)">Increase Counter</button>
   <h4>{{ count }}</h4>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CounterComponent',
  computed: {
    count(state) {
      return this.$store.getters.count;
    }
  },
  methods: {
    ...mapActions(['increment'])
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
