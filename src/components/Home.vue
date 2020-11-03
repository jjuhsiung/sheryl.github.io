<template>
  <div class="main">
    <Menu class="menu" />
    <div class="bg"></div>
    <HomeBox />
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import HomeBox from "@/components/HomeBox";

export default {
  name: "Home",
  components: { Menu, HomeBox },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  height: 980px;
}
.bg {
  background-image: url("../assets/pittsburgh.jpg");
  -webkit-filter: grayscale(95%); /* Safari 6.0 - 9.0 */
  filter: grayscale(95%);
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
