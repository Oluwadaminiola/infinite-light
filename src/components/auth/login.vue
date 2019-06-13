<template>
  <div style="background: #f7f7f7; min-height: 100vh;">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-4 col-xs-12 m-auto">
          <div class="dashboard" style="background: #fff;">
            <p class="p-16">LOGIN.</p>
            <p class="p-12">Login to make payment</p>
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
            <div class="d-flex row px-3 mt-1" style="color: #707070;">
              <div class>
                <input id="checkbox-1" class="checkbox-custom" name="checkbox-1" type="checkbox">
                <label for="checkbox-1" class="checkbox-custom-label p-10">Remember Me</label>
              </div>
              <div class="ml-auto">
                <a href="#" class="p-8">Forgot Password?</a>
              </div>
            </div>
            <button class="btn btn-Orange w-100 mt-3 rounded">LOGIN</button>
            <p class="text-center p-12 my-5">
              Not Registered?
              <router-link to="/signup" style="color: #f16722">Sign Up</router-link>
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

  // methods: {
  //   toggle(button) {
  //     var password = document.getElementById("password");
  //     if (password.type == "password") {
  //       button.innerHTML =
  //         "<i class='ion-eye-disabled' style='font-size: 20px; color: #ddd;'></i>";
  //       password.type = "text";
  //     } else {
  //       button.innerHTML =
  //         "<i class='ion-eye' style='font-size: 20px; color: #ddd;' ></i>";
  //       password.type = "password";
  //     }
  //   },

  // }
};
</script>
<style scoped>
</style>