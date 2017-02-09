<template>
  <div class="footer">
    &copy;
    <a href="https://vuejs.org">
      {{ copyright }}
    </a>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        copyright: 'blog demo with vuex'
      }
    }
  }

</script>
<style>
  .footer {
    width: 100%;
    height: 80px;
    margin-top: 20px;
    line-height: 80px;
    border-top: 1px solid #ddd;
    text-align: center;
    background-color: #eee;
  }

</style>
