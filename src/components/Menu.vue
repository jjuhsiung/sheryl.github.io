<template>
  <div class="menu">
    <div class="menu-item">
      <a href="/Resume">Resume</a>
    </div>
    <div class="menu-item">
      <a href="/Home">Sheryl Hsiung</a>
    </div>
    <div class="menu-item">
      <a href="/Profile">About</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.menu-item {
  flex: 1;
  margin-top: 20px;
  border: none;
  text-align: center;
}

a {
  color: black;
  font-size: 30px;
  text-decoration: none;
  font: bolder;
  font-family: "Times New Roman";
}
</style>
