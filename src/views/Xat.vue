<template>
  <div class=" chat">
    <h2 class="text-primary text-center"></h2>
    <h5 class="text-secondary text-center"></h5>
    <div class="">
      <div class="card-body">
        <p class="text-secondary messages" v-if="mensajes.length == 0">[Sin mensajes aún!!]</p>
        <div class="messages" v-chat-scroll="{always:false, smooth:true}">
            <div class="card-action">
        <CrearMensaje :name="name" :ip="ip" />
        <!-- <input type="text" v-model="limite"> -->
      </div>
          <div v-for="mensaje in invertir()" :key="mensaje.id">
            <span class="text-info">[{{ mensaje.name }}]:    
               <!-- <button class="btn btn-light">*</button>-->
               </span> 
            <span>{{mensaje.mensaje}}</span>
            <span class="text-secondary time">{{mensaje.timestamp}}</span>
       
          </div>
        </div>
      </div>
      <button>d</button>
    
    </div>
  </div>
</template>
<script>

import CrearMensaje from '@/components/CrearMensaje';
import fb from '@/firebase/init';
import moment from 'moment';

export default {
    name: 'Xat',
    props:['name','ip'],
    components:{
        CrearMensaje
    },
    data(){
        return{
            mensajes:[] ,
            limite:60
        }
    },
    methods:{
      invertir()
      {
        return this.mensajes;
      },
      limpiar()
      {
       
      }
    },

    created(){
    
        let ref = fb.collection('mensajes').orderBy('timestamp','desc').limit(this.limite);
        ref.onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(change =>{
             if (change.type == 'added'){
                 let doc = change.doc;
                 if (doc.data().mensaje != '0'  ){
                 this.mensajes.unshift({
                     id:doc.id,
                     name:doc.data().name,
                     mensaje:doc.data().mensaje,
                     timestamp: moment(doc.data().timestamp).format('LTS'),
                     ip:doc.data().ip
                 });}            
            
                  }          
                  
            
        });
    });
    }
}
</script>

<style>
   .chat h2{
       font-size: 2.6em;
       margin-bottom: 0px
   }
   .chat h5{
       margin-top: 0px;
       margin-bottom: 40px;
   }
    .chat span{
        font-size:1.00em;
        font-family: "Verdana";
    }
    .chat .time{
        display:block;
        font-size: 0.7em;
    }
    .messages{
          max-height:10%;
          overflow: auto;
    }
    .chat{
      background: rgb(33,33,33);
      color:white;
    }
</style>