<template>
  <div class="navheader">
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
        <div class="city">{{city}}</div>
        <mu-bottom-nav-item value="movies" title="Movies" href="#/movies" icon="ondemand_video"/>
        <mu-bottom-nav-item value="music"title="Music" href="#/music" icon="music_note"/>
        <mu-bottom-nav-item value="books" href="#/books" title="Books"  icon="books"/>
        <mu-bottom-nav-item value="pictures" href="#/pictures" title="Pictures" icon="photo"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
  export default {
    name: 'navheader',
    data () {
      return {
        bottomNav: 'movies',
        bottomNavColor: 'movies',
        city: '加载中..'
      }
    },
    methods: {
      setNav (){
        if(this.$route.path == '/'){
          this.bottomNav = 'movies'
        }else {
          this.bottomNav = this.$route.path.split('/')[1];
        }
      },
      handleChange (val) {
        this.bottomNav = val
      }
    },
    created() {
      this.setNav();
    },
    computed: {
      isLocationed() {
        return this.$store.state.cityName;
      }
    },
    watch: {
      isLocationed(val) {
        console.log(val)
        console.log('........................')
        this.city = val;
      },
      "$route": "setNav",
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



  .mu-paper{
    display: flex;
    flex-direction: row;
  }

  .city{
    flex-shrink: 0;
    width: 100px;
    overflow: hidden;
  }
  .header{
    background-color: #7e57c2;
  }

  .logo{
    font-size: 24px;
    color: white;
    display: inline-block;
    padding: 10px 20px;
  }

  .nav{
    display: inline-block;
    width: calc(100% - 300px);
    margin: 0 auto;
  }

  .tab{
    margin: 0 auto;
    width: 400px;
    background-color: rgba(0, 0, 0, 0);
  }
  .mu-icon-menu{
    vertical-align: middle;
  }
  .mu-popover{
    right: 0;
  }
</style>
