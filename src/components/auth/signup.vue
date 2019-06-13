<template>
  <div style="background: #f7f7f7; min-height: 100vh;">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-4 col-xs-12 m-auto">
          <div class="dashboard" style="background: #fff;">
            <p class="p-16">SIGNUP.</p>
            <p class="p-12">Sign up to continue</p>
            <div class="input-group mb-4">
              <div class="input-group-prepend pl-3 pr-1">
                <i class="ion-person" style="font-size: 20px; color: #ddd;"></i>
              </div>
              <input type="text" class="form-control" placeholder="Full Name">
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend pl-3 pr-1">
                <i class="ion-person" style="font-size: 20px; color: #ddd;"></i>
              </div>
              <input type="tel" class="form-control" placeholder="Phone Number">
            </div>
            <div class="input-group">
              <div class="input-group-prepend pl-3 pr-1">
                <i class="ion-person" style="font-size: 20px; color: #ddd;"></i>
              </div>
              <input type="email" class="form-control" placeholder="johndoe@example.com">
            </div>

            <div class="input-group mt-4">
              <div class="input-group-prepend py-1 pl-3 pr-1">
                <i class="ion-locked" style="font-size: 18px; color: #ddd;"></i>
              </div>
              <input :type="type" class="form-control">
              <a class="py-1 px-3" v-on:click="showPassword">{{ btnText }}</a>
            </div>
            <div class="p-12 my-3" style="color: #333;">
              By clicking the sign up button below you agreed to the
              <a
                href="#"
                style="color: #f16722"
              >Terms & Conditions</a>
            </div>
            <button class="btn btn-Orange w-100 mt-3 rounded">SIGN UP</button>
            <p class="text-center p-12 my-5">
              Already Registered?
              <router-link to="/login" style="color: #f16722">Login</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: "password",
      btnText: "Show"
    };
  },
  methods: {
    showPassword() {
      if (this.type === "password") {
        this.type = "text";
        this.btnText = "Hide";
      } else {
        this.type = "password";
        this.btnText = "Show";
      }
    }
  }
};
</script>
<style scoped>
</style>