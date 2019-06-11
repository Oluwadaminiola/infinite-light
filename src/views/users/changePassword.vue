<template>
  <div class="main">
    <div class="row">
      <div class="col-12">
        <h4>
          <img src="../../assets/img/settings.svg" alt="Dashboard">&nbsp; Settings
        </h4>
      </div>
      <div class="col-12 mt-4">
        <div class="dashboard">
          <div class="row">
            <div class="col-lg-7 col-xs-12">
              <div class="row">
                  <div class="col-12">
                      <p class="p-16">Change Password</p>
                      <input
                        type="password"
                        class="form-control mb-3 mt-4"
                        placeholder="Enter Current Password"
                      >
                      <input type="password" class="form-control mb-3" placeholder="Enter New Password">
                      
                      <input type="password" class="form-control mb-3" placeholder="Confirm New Password">
                  </div>
                  <div class="col-lg-6 col-xs-12">
                      <button class="btn btn-White mb-2 mr-2 w-100">CANCEL</button>
                  </div>
                  <div class="col-lg-6 col-xs-12">
                      <button class="btn btn-Orange mb-2 w-100">CONTINUE</button>
                  </div>
              </div>
            </div>
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
