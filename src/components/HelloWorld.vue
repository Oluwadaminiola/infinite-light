<template>
  <div>
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
        <button
          class="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto smooth-scroll">
            <li class="nav-item px-3">
              <a class="nav-link" href="#intro">Home</a>
            </li>
            <li class="nav-item px-3 dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pay Bills
                <i class="ion-ios-arrow-down ml-2"></i>
              </a>
              <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Electricity Bill</a>
                <a class="dropdown-item" href="#">Water Bill</a>
              </div>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="#projects" data-offset="90">About Us</a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="#gallery" data-offset="90">Contact Us</a>
            </li>
            <li class="nav-item px-3 login">
              <a class="nav-link" href="#gallery" data-offset="90"><img src="../assets/img/login@3x.png" height="15px;">&nbsp;&nbsp;&nbsp; Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section id="home">
      <div class="container pt-5">
        <div class="row">
          <div class="col-lg-8">
            <div class="text">
              <h3 style="color: #f16722;">GET POWER AT YOUR FINGER TIPS WITH EASE</h3>
              <h1>
                PURCHASE ELECTRICITY FROM THE
                <br>COMFORT OF YOUR HOME
              </h1>
              <button class="btn btnOutOrange ml-0" style="width: 200px;">GET STARTED</button>
            </div>
          </div>
          <div class="col-lg-4 pt-lg-5 mt-lg-5 pt-xs-1 mt-xs-1 mb-2 text-left">
            <div class="row">
              <div class="col-12 text-right">
                <p class="p-14" style="color: #f16722;">Download Our App</p>
              </div>
              <div class="col-6">
                <div class="btnWhite p-2">
                  <div class="d-flex">
                    <div>
                      <img src="../assets/img/playstore.png" alt="playstore" height="30px">
                    </div>
                    <div class="pl-2">
                      <b>
                        <small>Get it on</small>
                        <br>Google Play
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="btnWhite p-2">
                  <div class="d-flex">
                    <div>
                      <img src="../assets/img/appleapp.png" alt="apple" height="30px">
                    </div>
                    <div class="pl-2">
                      <b>
                        <small>Download on the</small>
                        <br>App Store
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 mt-4">
                <div class="rounded p-3" style="background: #fff;">
                  <p style="color: #333;">Recharge Now</p>
                  <p style="color: #333;">What would you like to do?</p>
                  <div class="selectBox2 mb-4">
                    <select name id class="form-control">
                      <option value>Select a service</option>
                      <option value>Electricity</option>
                      <option value>Water</option>
                    </select>
                  </div>
                  <button class="btn btnOutOrange w-100 ml-0">PROCEED</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="py-5" style="background: #fafafa;">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 text-left">
            <p class="oTxt">WHY YOU NEED US?</p>
            <p class="bTxt">INFINITE LIGHT</p>
            <p class="p-17 mb-5">
              Electricity is one of the greatest technological innovations of
              mankind. It
              has now become a part of our daily life and one cannot think of a world
              without electricity, it brings happiness to life.
              We bring life to you at your fingertips with ease and convenience.
            </p>
            <div
              class="whiteBox p-b"
              style="box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5); border-radius: 4px;"
            >
              <div class="d-flex py-4 border-bottom">
                <div class="pr-3">
                  <img src="../assets/img/clock.svg" alt="time">
                </div>
                <div>
                  <h5>Fast, Easy & Convenient</h5>
                  <p class="p-14">
                    You can now recharge using the app, your tablet
                    and computer. Purchase Electricity units on the go.
                    24 a day, seven days a week.
                  </p>
                </div>
              </div>
              <div class="d-flex py-4 border-bottom">
                <div class="pr-3">
                  <img src="../assets/img/wallet.svg" alt="time">
                </div>
                <div>
                  <h5>Instant Wallet</h5>
                  <p class="p-14">
                    You can now pay top up your Instant Wallet and
                    purchase electricity units at your convenience
                    without re-using your card or bank transfers
                    always.
                  </p>
                </div>
              </div>
              <div class="d-flex py-4 border-bottom">
                <div class="pr-3">
                  <img src="../assets/img/energy.svg" alt="time">
                </div>
                <div>
                  <h5>Energy Management Tips</h5>
                  <p class="p-14">
                    Stay up to date with the latest information on
                    energy management and save big on your energy
                    spending.
                  </p>
                </div>
              </div>
              <div class="d-flex py-4">
                <div class="pr-3">
                  <img src="../assets/img/icon.svg" alt="time">
                </div>
                <div>
                  <h5>Instant Rewards and Referrals</h5>
                  <p class="p-14">
                    Spread the word and refer a friend to download
                    our app and get REWARDED instantly after their
                    first purchase into your Instant Wallet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7 px-lg-5 mt-3">
            <h5 class="p-17 text-left">How It Works</h5>
            <p class="orangeLine"></p>
            <div class="row">
              <div class="col-lg-4 col-xs-12 mb-3">
                <p class="text-center">
                  <img src="../assets/img/Group 8570.png" alt height="90px">
                </p>
                <p class="text-center p-15">
                  <b class="p-14" style="font-weight: bold;">Select</b>
                  <br>Select a service
                </p>
              </div>
              <div class="col-lg-4 col-xs-12 mb-3">
                <p class="text-center">
                  <img src="../assets/img/Group 8571.png" alt height="90px">
                </p>
                <p class="text-center p-15">
                  <b class="p-14" style="font-weight: bold;">Enter Meter Number & Pay</b>
                  <br>Enter your meter number
                  and pay at once
                </p>
              </div>
              <div class="col-lg-4 col-xs-12 mb-3">
                <p class="text-center">
                  <img src="../assets/img/Group 8572.png" alt height="90px">
                </p>
                <p class="text-center p-15">
                  <b class="p-14" style="font-weight: bold;">Congratulations</b>
                  <br>Relax and enjoy,
                  <br>Infinite Light at all time
                </p>
              </div>

              <div class="col-12">
                <p class="text-center py-5 boT">What Our Clients Say</p>
                <div class="bd-example">
                  <div id="carouselExampleCaptions" class="carousel slide text-left" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="whiteBox p-b" style="min-height: 300px;">
                          <div class="row p-xs-5">
                            <div class="col-lg-3 col-xs-12">
                              <img src="../assets/img/image.png" alt="image">
                            </div>
                            <div class="col-lg-9 col-xs-12">
                              <p class="p-15" style="color: #323366;">Pelumi Muyiwa Oni</p>
                              <p class="p-15" style="color: #f16722;">
                                Business Head (Energy
                                Resource)
                              </p>
                              <p class="p-14">
                                I have employed the services of some power company in
                                time past but a friend introduced me to Infinite Light and
                                they didn’t disappoint me at all. They delivered top-notch
                                service and support all the way. I was impressed.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div
                          class="whiteBox p-b"
                          style="min-height: 300px; box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.14);"
                        >
                          <div class="row p-xs-5">
                            <div class="col-lg-3 col-xs-12">
                              <img src="../assets/img/boy.png" alt="image">
                            </div>
                            <div class="col-lg-9 col-xs-12">
                              <p class="p-15" style="color: #323366;">Derin Akintoye</p>
                              <p class="p-15" style="color: #f16722;">
                                Managing Director
                                (Akinbert
                                Power Source)
                              </p>
                              <p class="p-14">
                                Infinite Light powered the whole of my company and because
                                of their amazing customer service, I had to bring them over
                                to power my house to light up the whole place and they did
                                a great job.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="whiteBox p-b" style="min-height: 300px;">
                          <div class="row p-xs-5">
                            <div class="col-lg-3 col-xs-12">
                              <img src="../assets/img/image.png" alt="image">
                            </div>
                            <div class="col-lg-9 col-xs-12">
                              <p class="p-15" style="color: #323366;">Pelumi Muyiwa Oni</p>
                              <p class="p-15" style="color: #f16722;">
                                Business Head (Energy
                                Resource)
                              </p>
                              <p class="p-14">
                                I have employed the services of some power company in
                                time past but a friend introduced me to Infinite Light and
                                they didn’t disappoint me at all. They delivered top-notch
                                service and support all the way. I was impressed.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <p class="text-center">
              <button class="btn btnOrange mt-5 ml-0">TOP UP NOW</button>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="update" class="py-5 text-left">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p class="oTxt">OUR LATEST UPDATE</p>
            <p class="bTxt">Energy Management Tips</p>
            <p class="p-17">
              Stay up to date with the latest information on energy management and save big on
              your energy spending.
            </p>
          </div>
          <div class="col-lg-3 col-xs-12 mb-3">
            <div class="whiteBox">
              <p class="soTxt">FEB 19, 2019</p>
              <p class="sbTxt wT">Top 10 Rules for Electric Safety</p>
              <p class="p-14">
                DON’T plug a bunch of stuff into one outlet or extension cord. …
                DO ask grown-ups to put safety caps on all unused electrical outlets. …
                <span id="text">
                DON’T yank an electrical cord from the wall. …
                DO make sure all electric cords are tucked away, neat and tidy. …
                DO look up and look out for power lines before you climb a tree.
                </span>
                <a id="toggle">Read More</a>
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-xs-12 mb-3">
            <div class="whiteBox">
              <p class="soTxt">APRIL 29, 2019</p>
              <p class="sbTxt wT">Need for Electricity</p>
              <p class="p-14 wBT">
                Electricity is now an important
                part of homes & industries.
                Almost whole the devices at
                homes, businesses and industries
                are running because of electricity.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-xs-12 mb-3">
            <div class="whiteBox">
              <p class="soTxt">MAY 20, 2019</p>
              <p class="sbTxt wT">Fun Facts About Electricity.</p>
              <p class="p-14 wBT">
                Electricity travels at the speed of
                light - more than 186,000 miles
                per second! A spark of static electricity
                can measure up to three thousand (3,000)
                volts. A bolt of lightning can measure up
                to three million (3,000,000) volts – and it
                lasts less than one second!
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-xs-12 mb-3">
            <div class="whiteBox">
              <p class="soTxt">JUNE 02, 2019</p>
              <p class="sbTxt wT">Can humans survive without electricity?</p>
              <p class="p-14 wBT">
                Electricity travels at the speed of
                light - more than 186,000 miles
                per second! A spark of static electricity
                can measure up to three thousand (3,000)
                volts. A bolt of lightning can measure up
                to three million (3,000,000) volts – and it
                lasts less than one second!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="footer" style="background: #f3f3f3;">
      <div class="py-5 bg-white">
        <p class="text-center">
          <button class="btn btnOrange ml-0">TOP UP NOW</button>
        </p>
      </div>
      <div class="container py-3">
        <div class="d-flex row">
          <div>
            <img src="../assets/img/sbsc.svg" alt="SBSC">&nbsp; Copyright © 2019. All rights reserved.
          </div>
          <div class="ml-auto">
            <i class="ion-social-facebook"></i>
            <i class="ion-social-facebook"></i>
            <i class="ion-social-facebook"></i>
            <i class="ion-social-facebook"></i>
          </div>
        </div>
        <!-- <nav class="navbar navbar-expand-lg navbar-light py-3 scrolling-navbar">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src="../assets/img/sbsc.svg" alt="small Logo">
                    </a>
                    <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo" aria-controls="navbarTogglerDemo" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo">
                        <ul class="navbar-nav mr-auto smooth-scroll">
                            <li class="nav-item px-3">
                                <a class="nav-link" href="#intro">Home
                                </a>
                            </li>
                            <li class="nav-item px-3 dropup">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Pay Bills <i
                                        class="ion-ios-arrow-down ml-2"></i></a>
                                <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">Electricity Bill</a>
                                    <a class="dropdown-item" href="#">Water Bill</a>
                                </div>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="#projects" data-offset="90">About Us</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="#gallery" data-offset="90">Contact Us</a>
                            </li>


                        </ul>

                    </div>
                    <a href="#" class="ml-auto">
                        <sub class="">Powered By:</sub> <img src="../assets/img/sbsc.svg" alt="big logo">
                    </a>
                </div>
        </nav>-->
      </div>
    </section>
    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted(){
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Read Less");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Read More");
      $("#text").slideUp();
    }
  });

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#text{
  display: none;
}
</style>
