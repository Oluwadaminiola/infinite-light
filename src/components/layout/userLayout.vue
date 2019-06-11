<template>
  <div>
    <Header/>
    <div class="container">
      <div class="row" style="margin-top: 100px;">
        <div class="col-lg-2 px-0 d-none d-lg-block">
          <div class="greyRec py-3">
            <ul class="list-unstyled">
              <li class="nav-item" :class="{'active': $route.path == '/user/dashboard'}">
                <router-link class="nav-link" to="/user/dashboard">
                  <div class="row">
                    <div class="col-3">
                      <img
                        src="../../assets/img/grey/1 (1).png"
                        height="22px"
                        class="aa"
                        alt="dashboard"
                      >
                      <img
                        src="../../assets/img/orange/1.png"
                        height="22px"
                        class="bb"
                        alt="dashboard"
                      >
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
                        src="../../assets/img/grey/1 (11).png"
                        class="aa"
                        height="22px"
                        alt="manage wallet"
                      >
                      <img
                        src="../../assets/img/orange/1 (5).png"
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
                      <img
                        src="../../assets/img/grey/1 (6).png"
                        class="aa"
                        height="22px"
                        alt="pay bills"
                      >
                      <img
                        src="../../assets/img/orange/1 (3).png"
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
                      <img
                        src="../../assets/img/grey/1 (9).png"
                        class="aa"
                        height="22px"
                        alt="History"
                      >
                      <img
                        src="../../assets/img/orange/1 (2).png"
                        class="bb"
                        height="22px"
                        alt="History"
                      >
                    </div>
                    <div class="col-9 py-1">History</div>
                  </div>
                </router-link>
              </li>
              <li class="nav-item" :class="{'active': $route.path == '/user/referrals'}">
                <router-link class="nav-link" to="/user/referrals">
                  <div class="row">
                    <div class="col-3">
                      <img
                        src="../../assets/img/grey/1 (8).png"
                        class="aa"
                        height="22px"
                        alt="Referrals"
                      >
                      <img
                        src="../../assets/img/orange/1 (7).png"
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
                      <img
                        src="../../assets/img/grey/1 (7).png"
                        class="aa"
                        height="22px"
                        alt="Help"
                      >
                      <img
                        src="../../assets/img/orange/1 (4).png"
                        class="bb"
                        height="22px"
                        alt="Help"
                      >
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
                      <img
                        src="../../assets/img/grey/1 (10).png"
                        class="aa"
                        height="22px"
                        alt="Settings"
                      >
                      <img
                        src="../../assets/img/orange/1 (6).png"
                        class="bb"
                        height="22px"
                        alt="Settings"
                      >
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
        </div>
        <div class="col-lg-8 mb-3">
          <router-view/>
        </div>
        <div class="col-lg-2 ">
          <div class="row">
            <div class="col-12">
              <button
                class="btn btnOutOrange w-100 ml-0"
                style="font-size: 13px; height: 40px;"
              >TOP UP WALLET</button>
            </div>
            <div class="col-12 mt-4">
              <div class="greyBox p-3">
                <h5>Rewards and Offers</h5>
                <p class="pt-2 pb-4 p-12 border-bottom">
                  Top up now with
                  N6000 and above to
                  get 10% discount off.
                </p>
                <p class="pt-2 pb-5 p-12 py-2">
                  Refer 10 of your friends
                  to use Infinite Light to
                  get 5,000 electricity
                  units.
                </p>
              </div>
              <p class="p-14 mt-4">
                Tell someone about Infinite
                Light
              </p>
              <p class="p-14" style="font-weight: 300; color: #707070;">Share our link on</p>
              <p>
                <a href="#">
                  <img src="../../assets/img/soc (1).png" alt height="25px;">
                </a>
                <a href="#" class="pl-4">
                  <img src="../../assets/img/soc (2).png" alt height="25px;">
                </a>
                <a href="#" class="pl-4">
                  <img src="../../assets/img/soc (3).png" alt height="25px;">
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/userHeader";
export default {
  components: {
    Header
  }
};
</script>
