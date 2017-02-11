<template>
  <div>
    <button type="button" @click='decrement'>Decrement 1</button>
  </div>
</template>
<script>
  import {
    mapActions
  } from 'vuex'
  export default {
    methods: mapActions(['decrement'])
  }

</script>
