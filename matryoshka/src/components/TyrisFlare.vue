<template>
  <div class="hero tyrisflare">
    <img src="@/assets/tyris.png" />
    <div>
      <h5>Life: {{life}}</h5>
      <h5>Attack: {{attack}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "TyrisFlare",
  data: () => {
    return {
      attack: 30,
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
