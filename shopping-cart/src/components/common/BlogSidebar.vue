<template>
  <div class="col-md-3" id="sidebar">
    <h3>
      <span class="glyphicon glyphicon-list-alt"></span> {{ sideTitle }}
    </h3>
    <ul class="side-list">
      <li v-for="(index,post) in list" v-if="$index<2">
        <a href="javascript: void(0);" data-id="{{ post._id }}" @click="linkGo">
          {{ post.title }}
        </a>
      </li>
    </ul>
    <div>
      <h3>Count is {{ counterValue || 0 }}</h3>
    </div>
    <div>
      <button @click="increment">加1</button>
    </div>
  </div>
</template>
<script>
  import store from '../../vuex/store.js'
  import {
    incrementCounter
  } from '../../vuex/actions.js'
  import {
    getCount,
    getReverseList
  } from '../../vuex/getters.js'

  export default {
    data() {
      return {
        sideTitle: '最新文章'
      }
    },
    store,
    vuex: {
      actions: {
        increment: incrementCounter
      },
      getters: {
        counterValue: getCount,
        list: getReverseList
      }
    },
    methods: {
      linkGo(e) {
        e.preventDefault()
        const target = e.target
        this.$router.go({
          name: 'post',
          params: {
            _id: target.dataset.id
          }
        })
      }
    }
  }

</script>
<style scoped>
  #sidebar {
    min-height: 400px;
  }

  .side-list {
    padding-left: 10px;
    line-height: 2em;
    list-style-type: none;
  }

</style>
