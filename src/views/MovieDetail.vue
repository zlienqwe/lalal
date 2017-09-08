<template>
  <div class="moviedetail">
    <mu-card>
      <mu-card-media>
        <img :src=moviedetail.photo[0] />
      </mu-card-media>
      <mu-card-title :title=moviedetail.title :subTitle=moviedetail.directors />
      <mu-card-text>
        {{moviedetail.officialstory}}
      </mu-card-text>
      <mu-flat-button :label="like" @click="toggleLike()"/>
    </mu-card>
  </div>
</template>

<script>
  import store from './../store/index'
  export default {
    name: '',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        moviedetail: {
          photo: []
        },
        like: 'Like',
        liked: true
      }
    },
    methods: {
      getMovieDetail(id) {
        this.$http.get('http://v3.wufazhuce.com:8000/api/movie/detail/' + id + '?channel=wdj&source=channel_movie&source_id=9240&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android').then(response => {
          this.moviedetail = response.data.data
        }, response => {
          // error callback
        });
      },
      toggleLike(){
        if(this.liked){
          this.like = 'unlike';
          store.commit('toogleMainAlert',{show: true, msg: '点赞成功'});
        }else {
          this.like = 'like';
          store.commit('toogleMainAlert',{show: true, msg: '取消点赞'});
        }
        this.liked = !this.liked;
      }
    },
    created() {
      this.getMovieDetail(this.$route.params.id);
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .moviedetail {
    padding: 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
