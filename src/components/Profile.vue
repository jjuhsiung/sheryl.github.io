<template>
  <div class="container">
    <Menu class="menu" />
    <div class="content">
      <div class="pic_1"></div>
      <div class="right">
        <div class="textbox">
          <h2>About Me</h2>
          <p>
            My name is Sheryl Hsiung. I graduated from Carnegie Mellon
            University.
          </p>
        </div>
        <div class="pic_2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu.vue";

export default {
  name: "Profile",
  components: {
    Menu,
  },
};
</script>


<style scoped>
.content {
  display: flex;
  flex-direction: row;
  background-color: rgba(248, 229, 190, 0.3);
  height: 1100px;
}
.right {
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
}
.textbox {
  width: 80%;
  height: 60%;
  display: flex;
  margin-left: 80px;
  flex-direction: column;
}
.pic_1 {
  background-image: url("../assets/cmu_1.jpg");
  height: 100%;
  width: 40%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 95%;
  margin-left: 30px;
}
.pic_2 {
  background-image: url("../assets/autumn.jpg");
  height: 90%;
  max-width: 60%;
  margin-left: 80px;
  background-repeat: no-repeat;
  background-size: 100%;
}
h1 {
  font-size: 80px;
  font-family: "Courier New", Courier, monospace;
  font-weight: 200;
}
h2 {
  font-size: 50px;
  font-family: "Courier New", Courier, monospace;
  font-weight: 550;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 60px;
  padding: 40px;
}
p {
  font-size: 30px;
  font-family: "Courier New", Courier, monospace;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
}
</style>
