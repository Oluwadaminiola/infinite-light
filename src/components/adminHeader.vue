<template>
  <nav class="navbar admin navbar-expand-lg navbar-light fixed-top scrolling-navbar">
    <div class="container">
      <div>
        <div class="input-group admin">
          <div class="input-group-prepend px-2 py-2">
            <img src="../assets/img/search.svg" alt="search">
          </div>
          <input type="text" placeholder="Type in to Search" class="form-control s-14">
        </div>
      </div>
      <div class="ml-auto">
        <div class="d-flex row">
          <div class="profile-pic py-1">
            <img src="../assets/img/fine guy.png" height="30px;" alt="profile picture">
          </div>
          <b class="s-14 px-3 py-2">Xavier Ayeni</b>
          <div class="dropdown show">
            <a class="dropdown-toggle btn" href="#" id="dropdownMenuLink" data-toggle="dropdown">
              <i class="ion-chevron-down" style="color: #31384c;"></i>
            </a>

            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">Logout</a>
              <a class="dropdown-item" href="#">Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
</style>
