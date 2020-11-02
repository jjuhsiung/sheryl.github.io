<template>
  <div class="main">
    <div class="bg">
      <Menu class="menu" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  height: 980px;
}
.bg {
  background-image: url("../assets/cmu_1.jpg");
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
