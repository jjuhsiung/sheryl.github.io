<template>
  <div class="container">
    <div class="bg">
      <p class="p1">
        Do not seek to have events happen as want them to, but instead want them
        to happen as they do happen.
      </p>
      <p class="p2">— Epictetus</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBox",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  /* padding: 50px; */
  height: 200px;
  width: 80%;
  display: inline-flex;
}
.bg {
  background-color: lightgray;
  opacity: 0.4;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
.p1 {
  display: flex;
  font-size: 35px;
  padding: 20px;
  font-family: "Times New Roman";
}
.p2 {
  font-family: "Times New Roman";
  font-size: 35px;
  text-align: right;
  margin-right: 20px;
}
</style>
