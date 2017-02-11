<template>
  <div>
    <Display></Display>
    <Increment></Increment>
    <Decrement></Decrement>
  </div>
</template>
<script>
  import Display from './components/Display'
  import Increment from './components/Increment'
  import Decrement from './components/Decrement.vue'

  export default {
    name: 'app',
    components: {
      Display,
      Increment,
      Decrement
    }
  }

</script>
