<template>
  <div>
    <Display></Display>
    <Increment></Increment>
  </div>
</template>
<script>
  import Display from './components/Display'
  import Increment from './components/Increment'

  export default {
    name: 'app',
    components: {
      Display,
      Increment
    }
  }

</script>
