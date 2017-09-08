<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
    <div v-show="isLogin">
      <Navheader></Navheader>
      <router-view></router-view>
    </div>
    <div v-show="!isLogin">
      <Login></Login>
    </div>
    <mu-back-top :height="1" :bottom="100" :right="50" :duration="1000">
      <mu-raised-button label="Back Top" class="demo-raised-button" primary/>
    </mu-back-top>
    <MainAlert></MainAlert>
  </div>
</template>

<script>
  import Navheader from './components/Navheader.vue'
  import MainAlert from './components/Mainalert.vue'
  import Login from './components/Login.vue'
  import store from './store/index'

  export default {
    name: 'app',
    data() {
      return {
        isLogin: true
      }
    },
    components: {
      Navheader,
      MainAlert,
      Login
    },
    methods: {
      checkIfLogin() {
        if (true) {
          this.isLogin = false;

        }
      }
    },
    computed: {
      isUserLogin() {
        return this.$store.state.isLogin;
      }
    },
    watch: {
      isUserLogin(val) {
        if(val){
          var that = this;
          this.isLogin = true;
          console.log('=================navigator')
//          if ("geolocation" in navigator) {
//            console.log('is in navigator')
//            console.log(navigator)
//            navigator.geolocation.getCurrentPosition(function(position) {
//              console.log(position)
//              that.$http.jsonp('https://api.map.baidu.com/geocoder/v2/?ak=bOLYKndN2DfGS3nbB6wI0jvA2SnFAynZ&location='+position.coords.latitude+','+position.coords.longitude+'&output=json').then(response => {
//                console.log(response.body.result.addressComponent.city)
//                store.commit('location', {cityName: response.body.result.addressComponent.city});
//              })
//            }, function (error) {
//              switch(error.code)
//              {
//                case error.PERMISSION_DENIED:
//                  alert("User denied the request for Geolocation.")
//                  break;
//                case error.POSITION_UNAVAILABLE:
//                  alert("Location information is unavailable.")
//                  break;
//                case error.TIMEOUT:
//                  alert("The request to get user location timed out.")
//                  break;
//                case error.UNKNOWN_ERROR:
//                  alert("An unknown error occurred.")
//                  break;
//              }
//            },{maximumAge:60000, timeout:10000, enableHighAccuracy:true});
//          } else {
//            /* 地理位置服务不可用 */
//          }
        }else {
          this.isLogin = false;
        }
      }
    },
    created() {
      this.checkIfLogin();
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
