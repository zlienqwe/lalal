<template>
  <div class="login">
    <mu-text-field label="账户名" labelFloat :errorText="usernameErrorText" @input="userNameInputChange" /><br/>
    <mu-text-field label="服务上限" labelFloat type="number" max="20" @input="numInputChange" :errorText="numErrorText"/><br/>
    <mu-text-field label="密码" hintText="请输入密码" type="password" labelFloat/><br/>
    <!--<mu-time-picker hintText="12小时制"/><br/>-->
    <!--<mu-time-picker hintText="24小时制" format="24hr"/><br/>-->
    <!--<mu-time-picker hintText="横屏显示" mode="landscape"/><br/>-->
    <!--<mu-time-picker hintText="禁用" disabled/><br/>-->
    <!--<mu-slider v-model="value1" class="demo-slider" @change="changecallback"/>-->
    <!--<mu-slider v-model="value2" disabled class="demo-slider"/>-->
    <!--<mu-slider v-model="value3" :step="15" class="demo-slider" @change="changecallback"/>-->
    <mu-flat-button label="登录" class="demo-flat-button" @click="login"/>
    <mu-flat-button label="全屏" class="demo-flat-button" @click="full"/>
  </div>
</template>


<script>
  import store from '../store/index'
  export default {
    name: 'login',
    data() {
      return {
        usernameErrorText:'',
        numErrorText:'',
        msg: 'Welcome to Your Vue.js App',
        value1: 5,
        value2: 10,
        value3: 15,
      }
    },
    methods: {
      userNameInputChange(val){
        if(val.length > 20){
          this.usernameErrorText = '账户名不能多于20'
        }else {
          this.usernameErrorText = ''
        }
      },
      numInputChange(val){
        if(val > 20){
          this.numErrorText = '不能大于20'
        }else {
          this.numErrorText = ''
        }
      },
      changecallback(val){
        store.commit('toogleMainAlert', {show: true, msg: '改变了'});
      },
      login(){
        setTimeout(() => {
          store.commit('login');
        }, 2000)
      },
      full(){
        var e = document.documentElement;
        if (e.requestFullscreen)
          e.requestFullscreen();
        else if (e.mozRequestFullScreen)
          e.mozRequestFullScreen();
        else if (e.webkitRequestFullScreen)
          e.webkitRequestFullScreen();
        else if ("undefined" != typeof window.ActiveXObject) {
          var t = new ActiveXObject("WScript.Shell");
          t && t.SendKeys("{F11}")
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .demo-slider {
    margin-bottom: 16px;
  }
</style>
