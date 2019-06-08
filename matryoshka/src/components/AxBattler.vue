<template>
  <div class="hero axbattler">
    <img src="@/assets/ax.png" />
    <div>
      <h5>Life: {{life}}</h5>
      <h5>Attack: {{attack}}</h5>
    </div>
    <Gilius @attack-now="onAttackNow" />
  </div>
</template>

<script>
import  Gilius from './Gilius';

export default {
  name: "AxBattler",
  data: () => {
    return {
      attack: 40,
      life: 100
    }
  }, 
  components: {
    Gilius
  },
  methods: {
    onAttackNow: () => {
      console.log('ATAQUE!');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero img {
  height: 150px;
} 
</style>
