<template>
  <div>
      <Header/>
            <div style="margin-top: 80px;" >
                <router-view/>
            </div>
    <!-- <div class="row">
        <div class="col">
            <sidebar-menu :menu="menu" />
        </div>
        <div class="col-auto" >
            <Header/>
            <div style="margin-top: 80px;" >
                <router-view/>
            </div>
        </div>
    </div> -->
  </div>
</template>
<script>
import Header from '@/components/adminHeader'
    export default {
        data() {
           return {
                menu: [
                {
                    href: '/',
                    title: 'Dashboard',
                    icon: 'fa fa-user'
                },
                {
                    href: '#',
                    title: 'Charts',
                    icon: 'fa fa-chart-area'
                },
            ]
           }
        },
        components: {
            Header
        }
    }
</script>