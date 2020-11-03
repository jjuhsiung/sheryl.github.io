<template>
  <div class="container">
    <Menu class="menu" />
    <div class="bg"></div>
    <div class="box_1"></div>
    <div class="box_2"></div>
    <div class="box_1"></div>
  </div>
</template>

<script>
import Menu from "./Menu.vue";

export default {
  name: "Resume",
  components: {
    Menu,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 2500px;
}
.box_1 {
  height: 80%;
  background-color: rgba(233, 225, 211, 0.3);
}
.box_2 {
  height: 80%;
  background-color: rgba(168, 166, 163, 0.3);
}
.bg {
  background-image: url("../assets/cmu_hms.jpg");
  opacity: 0.7;
  height: 170%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
