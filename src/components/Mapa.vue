<template>
    <div>
      
        <input type="text" v-model="origen">
        <input type="text" v-model="destino">
        <iframe v-bind:src="src()" width="100%" height="600px"></iframe>
    </div>
</template>
<script>
export default {
    name:'Mapa',
    data(){        
        return {
            origen:'Barcelona',
            destino:'Granollers',            
            url:'https://www.google.com/maps/embed/v1/directions?key=AIzaSyBQOiuiL9i5vcjxtI65zc8hKxT2wow1oTY'
        }
    },
    methods:{
        src:function(){
            return this.url + "&origin="+this.origen+"&destination="+this.destino
        }
    }
}
</script>