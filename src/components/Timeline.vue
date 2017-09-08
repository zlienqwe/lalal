<template>
  <div class="timeline">
    <mu-timeline>
      <mu-timeline-item>
        <span slot="time">2017年 6月 1日</span>
        <span slot="des">发起第一个pr</span>
      </mu-timeline-item>
      <mu-timeline-item>
        <span slot="time">2017年 6月 6日</span>
        <span slot="des">发起第一个issue</span>
      </mu-timeline-item>
      <mu-timeline-item>
        <span slot="time">2017年 6月 12日</span>
        <span slot="des">添加backTop组件</span>
      </mu-timeline-item>
      <mu-timeline-item>
        <span slot="time">2017年 6月 16日</span>
        <span slot="des">加入Muse-UI org<br/>添加breadcrumb组件</span>
      </mu-timeline-item>
      <mu-timeline-item>
        <span slot="time">2017年 6月 19日</span>
        <span slot="des">添加FAQ模块</span>
      </mu-timeline-item>
      <mu-timeline-item>
        <span slot="time">2017年 6月 20日</span>
        <span slot="des">添加Layout</span>
      </mu-timeline-item>
      <mu-timeline-item>
        <span>更多</span>
      </mu-timeline-item>
    </mu-timeline>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
