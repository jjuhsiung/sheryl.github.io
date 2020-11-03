<template>
  <mdb-navbar color="warning" light>
    <mdb-navbar-brand class="title"> Sheryl Hsiung </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item href="/" active>Home</mdb-nav-item>
        <mdb-nav-item href="/Resume">Resume</mdb-nav-item>
        <mdb-nav-item href="/Profile">About Me</mdb-nav-item>
      </mdb-navbar-nav>
      <form>
        <mdb-input
          type="text"
          class="text-white"
          placeholder="Search"
          aria-label="Search"
          label
          navInput
          waves
          waves-fixed
        />
      </form>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>


<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbInput,
} from "mdbvue";
export default {
  name: "NavbarPage",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbInput,
  },
};
</script>


<style>
.title {
  font-size: 60px;
}

.navbar-nav {
  font-size: 25px;
}

.nav-item {
  padding: 40px;
}
</style>




