<template>
  <div class="container chat">
    <h2 class="text-primary text-center">Xat</h2>
    <h5 class="text-secondary text-center">XCO</h5>
    <div class="card">
      <div class="card-body">
        <p class="text-secondary messages" v-if="mensajes.length == 0">[Sin mensajes aún!!]</p>
        <div class="messages" v-chat-scroll="{always:false, smooth:true}">
          <div v-for="mensaje in mensajes" :key="mensaje.id">
            <span class="text-info">[{{ mensaje.name }}]:</span>
            <span>{{mensaje.mensaje}}</span>
            <span class="text-secondary time">{{mensaje.timestam}}</span>
          </div>
        </div>
      </div>
      <div class="card-action">
        <CrearMensaje :name="name" />
      </div>
    </div>
  </div>
</template>
<script>

import CrearMensaje from '@/components/CrearMensaje';
import fb from '@/firebase/init';
import moment from 'moment';

export default {
    name: 'Xat',
    props:['name'],
    components:{
        CrearMensaje
    },
    data(){
        return{
            mensajes:[]
        }
    },

    created(){
        let ref = fb.collection('mensajes').orderBy('timestamp');
        ref.onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(change =>{
             if (change.type == 'added'){
                 let doc = change.doc;
                 this.mensajes.push({
                     id:doc.id,
                     name:doc.data().nombre,
                     mensaje:doc.data().mensaje,
                     timestamp: moment(doc.data().timestamp).format('LTS')
                 });
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
        font-size:1.2em;
    }
    .chat .time{
        display:block;
        font-size: 0.7em;
    }
    .messages{
        max-height:300px;
        overflow: auto;
    }
</style>