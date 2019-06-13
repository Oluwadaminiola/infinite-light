<template>
  <div class="main">
   
    <div class="row">
      <div class="col-12">
        <div class="d-flex row px-3">
          <div>
            <h4>
              <img src="../../assets/img/history.svg" alt="Dashboard">&nbsp; History
            </h4>
          </div>
          <div class="ml-auto">
            <button class="btn btnOutOrange">RECHARGE NOW</button>
          </div>
        </div>
      </div>
      <div class="col-12 mt-4">
        <div class="walletBalance text-center">
          <p>
            <b>
              8,000.00
              <sup style="margin-top: -40px !important;">NGN</sup>
            </b>
            <br>
            <small class="p-14" style="color: #707070;">Wallet Balance</small>
          </p>
        </div>
      </div>
      <div class="col-12 my-4">
        <div class="row">
          <div class="col-lg-4">
            <div class="input-group">
              <input type="text" placeholder="Search" class="form-control">
              <div class="input-group-append">
                <button class="btn btn-clear">
                  <i class="ion-ios-search" style="font-size: 20px;"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="dashboard">
          <div class="table-responsive-md">
            <table class="table">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>METER NUMBER</th>
                  <th>TOP UP DATE</th>
                  <th>AMOUNT</th>
                  <th>TOKEN CODE</th>
                  <th>PAYMENT METHOD</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>35467653567</td>
                  <td>Wed April 29, 2016. 13:00</td>
                  <td>5,000</td>
                  <td>76542345653</td>
                  <td>PayPal</td>
                  <td>
                    <i class="ion-record"></i> Completed
                  </td>
                  <td>
                    <a href="#" class="p-14">
                      <i class="ion-android-expand" style="color: #2fe666;"></i>&nbsp; Re - Initiate
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>35467653567</td>
                  <td>Wed April 29, 2016. 13:00</td>
                  <td>5,000</td>
                  <td>76542345653</td>
                  <td>PayPal</td>
                  <td>
                    <i class="ion-record"></i> Completed
                  </td>
                  <td>
                    <a href="#" class="p-14">
                      <i class="ion-android-expand" style="color: #2fe666;"></i>&nbsp; Re - Initiate
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>
