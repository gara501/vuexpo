<template>
  <div class="hero gilius">
    <img src="@/assets/gilius.png" />
    <div>
      <h5>Life: {{life}}</h5>
      <h5>Attack: {{attack}}</h5>
    </div>
    <button @click="$emit('attack-now', $event)">Attack</button>
  </div>
</template>

<script>
export default {
  name: "Gilius",
  data: () => {
    return {
      attack: 20,
      life: 100
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
