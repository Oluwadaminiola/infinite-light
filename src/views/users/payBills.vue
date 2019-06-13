<template>
  <div class="main">
    <div class="row">
      <div class="col-12">
        <h4>
          <img src="../../assets/img/pay.svg" alt="Dashboard">&nbsp; Pay Bills
        </h4>
      </div>
      <div class="col-12">
        <div class="mt-4 pt-5" style="background: #fafafa; border: 1px solid #e8e8e8;">
          <div class="d-none d-lg-block">
            <ul class="nav nav-tabs justify-content-center" role="tablist">
              <li class="nav-item mx-3">
                <a class="nav-link active" href="#paybill" role="tab" data-toggle="tab">PAY BILL</a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#payment" role="tab" data-toggle="tab">PAYMENT</a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#review" role="tab" data-toggle="tab">REVIEW BILL</a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#done" role="tab" data-toggle="tab">DONE</a>
              </li>
            </ul>
          </div>

          <div class="d-lg-none">
            <ul class="nav nav-tabs ico justify-content-center" role="tablist">
              <li class="nav-item mx-3">
                <a class="nav-link active" href="#paybill" role="tab" data-toggle="tab">
                  <i class="ion-card"></i>
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#payment" role="tab" data-toggle="tab">
                  <i class="ion-cash"></i>
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#review" role="tab" data-toggle="tab">
                  <i class="ion-android-search"></i>
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#done" role="tab" data-toggle="tab">
                  <i class="ion-android-done-all"></i>
                </a>
              </li>
            </ul>
          </div>

          <!-- Tab panes -->
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active py-5 px-3" id="paybill" v-if="paybill">
              <div class="row">
                <div class="col-lg-7 col-xs-12">
                  <div class="row">
                    <div class="col-12">
                      <p class="p-17">What do want to do?</p>
                      <p class="p-14">Select bill below to continue</p>
                      <div class="selectBox mt-3">
                        <select name id class="form-control" v-model="selectBill" @change="selectB">
                          <option value="Electricity">Electricity</option>
                          <option value="Water">Water</option>
                          <option value="Heat">Heat</option>
                        </select>
                      </div>
                      <div class="" v-if="billSelected">
                        <div class="selectBox mt-3">
                          <select name id class="form-control">
                            <option value>Select State</option>
                            <option value>Abuja</option>
                            <option value>Lagos</option>
                            
                          </select>
                        </div>
                        <div class="selectBox mt-3">
                          <select name id class="form-control">
                            <option value>Select Disco</option>
                            <option value>Abuja</option>
                            <option value>Lagos</option>
                          </select>
                        </div>
                        <input type="text" class="form-control mt-3" style="height: 40px;" placeholder="Enter Meter Number">
                      </div>
                      <p class="p-17 mt-5">How much do you want?</p>
                      <input type="text" class="form-control mt-3 mb-4">
                    </div>
                    <div class="col-lg-6 col-xs-12">
                      <button class="btn btn-White mb-2 mr-2 w-100">CANCEL</button>
                    </div>
                    <div class="col-lg-6 col-xs-12">
                      <button class="btn btn-Orange mb-2 w-100" @click="gotoPay"  >CONTINUE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane py-5" id="payment" v-if="payment">
              <div class="col-lg-7 m-auto">
                <div class="row">
                  <div class="col-12">
                    <p class="p-17">Select payment method</p>
                    <p class="p-14">Input card details</p>
                    <a href="#" class="mr-4">
                      <img src="../../assets/img/mastercard@2x.png" alt="mastercard">
                    </a>
                    <a href="#" class="mr-4">
                      <img src="../../assets/img/visa@2x.png" alt="visa">
                    </a>
                    <a href="#" class>
                      <img src="../../assets/img/Image 2@2x.jpg" alt="verve">
                    </a>
                    <div class="selectBox mt-3">
                      <select name id class="form-control">
                        <option value>Select Card Type</option>
                        <option value>Water</option>
                        <option value>Heat</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12">
                    <input type="text" class="form-control mt-3" placeholder="Enter full name">
                  </div>

                  <div class="col-8">
                    <input type="text" class="form-control mt-3" placeholder>
                  </div>
                  <div class="col-4">
                    <input type="text" class="form-control mt-3" placeholder>
                  </div>
                </div>
                <div class="row">
                  <div class="col-5">
                    <div class="selectBox2 mt-3">
                      <select name id class="form-control">
                        <option value>Month</option>
                        <option value>Water</option>
                        <option value>Heat</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-7">
                    <div class="selectBox2 mt-3">
                      <select name id class="form-control">
                        <option value>Year</option>
                        <option value>Water</option>
                        <option value>Heat</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 col-xs-12 mt-3">
                    <button class="btn btn-White mb-2 mr-2 w-100">CANCEL</button>
                  </div>
                  <div class="col-lg-6 col-xs-12 mt-3">
                    <button class="btn btn-Orange mb-2 w-100">CONTINUE</button>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane py-5" id="review" v-if="review">
              <div class="col-lg-7 m-auto">
                <div class="row">
                  <div class="col-12">
                    <p class="p-17">Review Payment</p>
                    <input type="text" class="form-control mt-5">
                    <input type="text" class="form-control mt-3">
                    <input type="text" class="form-control mt-3 mb-4">
                  </div>
                  <div class="col-lg-6 col-xs-12">
                    <button class="btn btn-White mb-2 mr-2 w-100">CANCEL</button>
                  </div>
                  <div class="col-lg-6 col-xs-12">
                    <button class="btn btn-Orange mb-2 w-100">SUBMIT</button>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane py-5" id="done" v-if="done">
              <div class="container">
                <div class="row">
                  <div class="col-12 mb-3">
                    <p class="p-17">Transaction Completed</p>
                  </div>
                  <div class="col-lg-4 col-xs-12">
                    <p class="p-15">Token Code:</p>
                  </div>
                  <div class="col-lg-8 col-xs-12">
                    <p class="p-15">
                      <b>98643207530973</b>
                    </p>
                  </div>
                  <div class="col-lg-4 col-xs-12">
                    <p class="p-15">Bill Type</p>
                  </div>
                  <div class="col-lg-8 col-xs-12">
                    <p class="p-15">ELECTRICITY</p>
                  </div>
                  <div class="col-lg-4 col-xs-12">
                    <p class="p-15">Transaction ID:</p>
                  </div>
                  <div class="col-lg-8 col-xs-12">
                    <p class="p-15">IL480B428SH</p>
                  </div>
                  <div class="col-lg-4 col-xs-12">
                    <p class="p-15">State:</p>
                  </div>
                  <div class="col-lg-8 col-xs-12">
                    <p class="p-15">Abuja</p>
                  </div>
                  <div class="col-lg-4 col-xs-12">
                    <p class="p-15">Disco:</p>
                  </div>
                  <div class="col-lg-8 col-xs-12">
                    <p class="p-15">Abuja Electricity Distribution Company</p>
                  </div>
                  <div class="col-lg-4 col-xs-12">
                    <p class="p-15">Meter Number:</p>
                  </div>
                  <div class="col-lg-8 col-xs-12">
                    <p class="p-15">843486547238344</p>
                  </div>
                  <div class="col-lg-4 col-xs-12">
                    <p class="p-15">Amount:</p>
                  </div>
                  <div class="col-lg-8 col-xs-12">
                    <p class="p-15">N8,000</p>
                  </div>
                  <div class="col-lg-4 col-xs-12">
                    <p class="p-15">Payment Method:</p>
                  </div>
                  <div class="col-lg-8 col-xs-12">
                    <p class="p-15">INSTANT PAY</p>
                  </div>
                  <div class="col-12 mt-4">
                    <p class="text-center">
                      <button class="btn btn-Orange mb-2" style="width: 203px;">DONE</button>
                    </p>
                    <p class="text-right">
                      <button class="btn btn-clear mr-3">
                        <img src="img/2 (1).png" alt> Print
                      </button>
                      <button class="btn btn-clear">
                        <img src="img/2 (2).png" alt> Export
                      </button>
                    </p>
                  </div>
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
export default {
  data(){
    return{
      selectBill: '',
      paybill: true,
      payment: false,
      review: false,
      done: false,
      billSelected: false,
    }
  },
  methods:{
    selectB(){
      if(this.selectBill == "Electricity"){
        this.billSelected = true;
      }
      else{
        this.billSelected = false;
      }
    },
    gotoPay(){
      this.paybill = false;
      this.payment = true;
      this.review = false;
      this.done = false;
    }
  }
};
</script>
<style scoped>
</style>
