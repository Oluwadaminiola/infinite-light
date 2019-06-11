<template>
  <div class="main">
    <div class="row">
      <div class="col-12">
        <h4>
          <img src="../../assets/img/dashboard.svg" alt="Dashboard">&nbsp; Dashboard
        </h4>
      </div>
      <div class="col-12 mt-4">
        <div class="walletBalance text-center">
          <p>
            <b class="" style="margin-top: 100px;">
              8,000.00
              
            </b><sup>NGN</sup>
            <br>
            <small class="p-14" style="color: #707070;">Wallet Balance</small>
          </p>
        </div>
      </div>
      <div class="col-12 mt-4">
        <div class="dashboard">
          <div class="row">
            <div class="col-lg-8">
              <p class="p-12">Top Up Statistics</p>
              <b class="p-10" style="color: #323366;">Avg. N10,309</b>
            </div>
            <div class="col-lg-1 mb-2">
              <!-- <select name="" id="" class="form-control">
                                        <option value="">Monthly</option>
              </select>-->
            </div>
            <div class="col-lg-3 mb-2">
              <div class="selectBox2">
                <select name id class="form-control">
                  <option value>Monthly</option>
                  <option value>Quarterly</option>
                  <option value>Yearly</option>
                </select>
              </div>
            </div>
            <div class="col-lg-12 mt-5 px-0">
              <div id="container" class="w-100" style=" height: 300px; margin: 0 auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    Highcharts.chart("container", {
      chart: {
        zoomType: "xy"
      },
      title: {
        text: " "
      },
      xAxis: [
        {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          crosshair: true
        }
      ],
      yAxis: [
        {
          // Primary yAxis
          labels: {
            format: "{value}k",
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          },
          title: {
            text: " ",
            style: {
              color: "#707070"
            }
          }
        },
        {
          // Secondary yAxis
          title: {
            text: " ",
            style: {
              color: "#707070"
            }
          },
          labels: {
            enabled: false,
            format: "",
            style: {
              color: "#707070"
            }
          },
          opposite: true
        }
      ],
      tooltip: {
        shared: true
      },
      exporting: { enabled: false },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false,
        layout: "vertical",
        align: "left",
        x: 120,
        verticalAlign: "top",
        y: 100,
        floating: true,
        backgroundColor:
          (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
          "rgba(255,255,255,0.25)"
      },
      series: [
        {
          name: "Top Up",
          type: "column",
          yAxis: 1,
          data: [
            49.9,
            71.5,
            106.4,
            129.2,
            144.0,
            176.0,
            135.6,
            148.5,
            216.4,
            194.1,
            95.6,
            54.4
          ],
          tooltip: {
            valueSuffix: " k"
          },
          pointWidth: 10,
          borderRadius: 5,
          color: "#323366"
        },
        {
          name: "Top Up",
          type: "spline",
          data: [
            49.9,
            71.5,
            106.4,
            129.2,
            144.0,
            176.0,
            135.6,
            148.5,
            216.4,
            194.1,
            95.6,
            54.4
          ],
          tooltip: {
            valueSuffix: "k"
          },
          color: "#f16722"
        }
      ]
    });
  }
};
</script>
<style scoped>
</style>