<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-4">
        <h5 class="adh5">Issue Form</h5>
      </div>
      <div class="col-lg-6 col-xs-12 adminA mb-3">
        <input type="text" class="form-control" placeholder="Enter Customer">
      </div>
      <div class="col-lg-6 col-xs-12 adminA mb-3">
        <input type="text" class="form-control" placeholder="Enter Address">
      </div>
      <div class="col-lg-6 col-xs-12 mb-3">
        <div class="selectBox3">
          <select name id class="form-control">
            <option value>Select State</option>
            <option value>Electricity</option>
            <option value>Water</option>
          </select>
        </div>
      </div>
      <div class="col-lg-6 col-xs-12 mb-3">
        <div class="selectBox3">
          <select name id class="form-control">
            <option value>Select Disco</option>
            <option value>Electricity</option>
            <option value>Water</option>
          </select>
        </div>
      </div>
      <div class="col-lg-6 col-xs-12 adminA mb-3">
        <input type="email" class="form-control" placeholder="Enter Email Address">
      </div>
      <div class="col-lg-6 col-xs-12 adminA mb-3">
        <input type="tel" class="form-control" placeholder="Enter phone number">
      </div>
      <div class="col-lg-6 col-xs-12 adminA mb-3">
        <input type="date" class="form-control" placeholder="Select date">
      </div>
      <div class="col-lg-6 col-xs-12 mb-3">
        <div class="selectBox3">
          <select name id class="form-control">
            <option value>Select Issue Category</option>
            <option value>Electricity</option>
            <option value>Water</option>
          </select>
        </div>
      </div>
      <div class="col-lg-12 adminA">
        <textarea
          name
          class="form-control"
          placeholder="Type in customer complains and reasons for complain…"
          id
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div class="col-lg-12 mt-4">
        <button class="btn btn-Orange" style="width: 130px;">Save</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>