<template>
  <div class="enemy deathadder">
    <img src="@/assets/death.png" />
    <div>
      <h5>Life: {{life}}</h5>
      <h5>Attack: {{attack}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeathAdder",
  data: () => {
    return {
      attack: 50,
      life: 200
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.deathadder img {
  flex: 1;
  justify-self: flex-end;
  transform: rotateY(180deg);
}
</style>
