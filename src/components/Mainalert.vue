<template>
  <div class="mainalert">
    <mu-popup position="top" :overlay="false" popupClass="demo-popup-top"  :open="topPopup">
      {{ count }}
    </mu-popup>
  </div>
</template>

<script>
  import store from './../store/index'
  export default {
    name: 'mainalert',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        topPopup: false,
      }
    },
    methods:{
      open (show) {
        this.topPopup = show;
      },
    },
    computed: {
      count () {
        this.open(this.$store.state.showMainAlert);
        return this.$store.state.mainAlertMsg
      },
      handleChange (val) {
        this.bottomNav = val
      }
    },
    watch: {
      topPopup (val) {
        if (val) {
          setTimeout(() => {
            store.commit('toogleMainAlert',{show: false, msg: ''});
          }, 2000)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .demo-popup-top {
    width: 100%;
    opacity: .8;
    height: 48px;
    line-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 375px;
  }
</style>
