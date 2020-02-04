<template>
  <div>
        <Mapa></Mapa>
    <Xat v-show="mostrarXat" :name="name" :ip="ip"></Xat>

  </div>
</template>

<script>
// @ is an alias to /src
import Xat from '@/components/Xat.vue'
import Mapa from '@/components/Mapa.vue'
export default {
  name: 'home',
  props:['name','ip'],
  components: {
    Xat,
    Mapa
  },
  data(){
    return{
      mostrarXat:true
    }
  }
}
</script>
