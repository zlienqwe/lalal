<template>
  <div class="music">
    <mu-table :fixedFooter="fixedFooter" :fixedHeader="fixedHeader"
              :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable"
              :selectable="selectable" :showCheckbox="showCheckbox">
      <mu-thead slot="header">
        <mu-tr>
          <mu-th tooltip="ID">Subtitle</mu-th>
          <mu-th tooltip="Title">Title</mu-th>
          <mu-th tooltip="like_count">like_count</mu-th>
        </mu-tr>
      </mu-thead>
      <mu-tbody>
        <mu-tr v-for="item in bookList" :key="item.id">
          <mu-td>{{item.subtitle}}</mu-td>
          <mu-td>{{item.forward}}</mu-td>
          <mu-td>{{item.like_count}}</mu-td>
        </mu-tr>
      </mu-tbody>
    </mu-table>
  </div>
</template>

<script>
  export default {
    name: 'music',
    data() {
      return {
        bookList: [],
        fixedHeader: true,
        fixedFooter: false,
        selectable: false,
        multiSelectable: false,
        enableSelectAll: false,
        showCheckbox: false,
      }
    },
    methods: {
      getMusicList() {
        this.$http.get('http://v3.wufazhuce.com:8000/api/channel/music/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android').then(response => {
          this.bookList = response.data.data;
        }, response => {
          // error callback
        });
      },
    },
    created() {
      this.getMusicList();
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .body {
    background-color: #ececec;
    border-radius: 5px;
    min-height: 500px;
  }
</style>
