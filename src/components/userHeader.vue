<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top scrolling-navbar">
    <div class="container">
      <a class="navbar-brand" href="#">
        <div class="d-flex row">
          <div>
            <img src="../assets/img/lightt.svg" alt="logo">
          </div>

          <div class="maxx px-3 py-1">
            <b>Infinite</b>&nbsp; Light
          </div>
        </div>
      </a>
      <div class="ml-auto px-2 py-0 border-left">
        <a class="p-13" href="#gallery" data-offset="90">
          Ademosu Adeposi
          <br>
          <a href="#" class="p-11">Logout</a>
        </a>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="ion-android-menu"></i>
      </button>

      <!-- <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                                data-target="#responsiveNav" aria-controls="responsiveNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
      </button>-->
      <!-- <div class="collapse navbar-collapse d-none" id="navbarTogglerDemo02">
                                <ul class="navbar-nav ml-auto smooth-scroll">
                                    <li class="nav-item px-3 pt-3">
                                        <a class="nav-link" href="#intro">Home
                                        </a>
                                    </li>
                                    <li class="nav-item px-3 pt-3 dropdown">
                                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">Pay Bills <i
                                                class="ion-ios-arrow-down ml-2"></i></a>
                                        <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                            <a class="dropdown-item" href="#">Electricity Bill</a>
                                            <a class="dropdown-item" href="#">Water Bill</a>
                                        </div>
                                    </li>
                                    <li class="nav-item px-3 pt-3">
                                        <a class="nav-link" href="#projects" data-offset="90">About Us</a>
                                    </li>
                                    <li class="nav-item px-3 pt-3">
                                        <a class="nav-link" href="#gallery" data-offset="90">Contact Us</a>
                                    </li>
                
                
                
                                </ul>
                
      </div>-->

      <div class="collapse greyRec w-100" id="navbarTogglerDemo02">
        <ul class="list-unstyled navbar-nav">
          <li class="nav-item" :class="{'active': $route.path == '/user/dashboard'}">
            <router-link class="nav-link" to="/user/dashboard">
              <div class="row">
                <div class="col-3">
                  <img src="../assets/img/grey/1 (1).png" height="22px" class="aa" alt="dashboard">
                  <img src="../assets/img/orange/1.png" height="22px" class="bb" alt="dashboard">
                </div>
                <div class="col-9 py-1">Dashboard</div>
              </div>
            </router-link>
          </li>
          <li class="nav-item" :class="{'active': $route.path == '/user/manageWallet'}">
            <router-link class="nav-link" to="/user/manageWallet">
              <div class="row">
                <div class="col-3">
                  <img
                    src="../assets/img/grey/1 (11).png"
                    class="aa"
                    height="22px"
                    alt="manage wallet"
                  >
                  <img
                    src="../assets/img/orange/1 (5).png"
                    class="bb"
                    height="22px"
                    alt="manage wallet"
                  >
                </div>
                <div class="col-9 py-1">Manage Wallet</div>
              </div>
            </router-link>
          </li>
          <li class="nav-item" :class="{'active': $route.path == '/user/payBills'}">
            <router-link class="nav-link" to="/user/payBills">
              <div class="row">
                <div class="col-3">
                  <img src="../assets/img/grey/1 (6).png" class="aa" height="22px" alt="pay bills">
                  <img
                    src="../assets/img/orange/1 (3).png"
                    class="bb"
                    height="22px"
                    alt="pay bills"
                  >
                </div>
                <div class="col-9 py-1">Pay Bills</div>
              </div>
            </router-link>
          </li>
          <li class="nav-item" :class="{'active': $route.path == '/user/history'}">
            <router-link class="nav-link" to="/user/history">
              <div class="row">
                <div class="col-3">
                  <img src="../assets/img/grey/1 (9).png" class="aa" height="22px" alt="History">
                  <img src="../assets/img/orange/1 (2).png" class="bb" height="22px" alt="History">
                </div>
                <div class="col-9 py-1">History</div>
              </div>
            </router-link>
          </li>
          <li class="nav-item" :class="{'active': $route.path == '/user/referrals'}">
            <router-link class="nav-link" to="/user/referrals">
              <div class="row">
                <div class="col-3">
                  <img src="../assets/img/grey/1 (8).png" class="aa" height="22px" alt="Referrals">
                  <img
                    src="../assets/img/orange/1 (7).png"
                    class="bb"
                    height="22px"
                    alt="Referrals"
                  >
                </div>
                <div class="col-9 py-1">Referrals</div>
              </div>
            </router-link>
          </li>
          <li class="nav-item" :class="{'active': $route.path == '/user/help'}">
            <router-link class="nav-link" to="/user/help">
              <div class="row">
                <div class="col-3">
                  <img src="../assets/img/grey/1 (7).png" class="aa" height="22px" alt="Help">
                  <img src="../assets/img/orange/1 (4).png" class="bb" height="22px" alt="Help">
                </div>
                <div class="col-9 py-1">Help</div>
              </div>
            </router-link>
          </li>
          <li
            class="nav-item"
            :class="{'active': $route.path == '/user/profile' || $route.path == '/user/changePassword'}"
          >
            <a
              class="dropdown-toggle nav-link"
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <div class="row">
                <div class="col-3">
                  <img src="../assets/img/grey/1 (10).png" class="aa" height="22px" alt="Settings">
                  <img src="../assets/img/orange/1 (6).png" class="bb" height="22px" alt="Settings">
                </div>
                <div class="col-9 py-1">Settings</div>
              </div>
              <ul class="collapse list-unstyled px-3" id="pageSubmenu">
                <li>
                  <router-link to="profile">Profile</router-link>
                </li>
                <li>
                  <router-link to="changePassword">Change Password</router-link>
                </li>
              </ul>
            </a>
          </li>
        </ul>
      </div>
      <!-- <div class="ml-auto border-left px-3">
                                <p class="p-14">
                                    Ademosu Ademosu<br>
                                    <b><a href="#">Log Out</a></b>
                                </p>
      </div>-->
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
</style>
