<template>
  <div class="home">
    <Xat :name="name" :ip="ip"></Xat>
    <Xat :name="name" :ip="ip"></Xat>
  </div>
</template>

<script>
// @ is an alias to /src
import Xat from '@/components/Xat.vue'

export default {
  name: 'home',
  props:['name','ip'],
  components: {
    Xat
  }
}
</script>
