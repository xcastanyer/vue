<template>
  <div class="chat" :class="pantallaXat" >
     <button v-on:click="minimizar">Cerrar</button>
    <h2 class="text-primary text-center"></h2>
    <h5 class="text-secondary text- center"></h5>
    <div class>
        
      <div class="card-body">
       
        <p class="text-secondary messages" v-if="mensajes.length == 0">[Sin mensajes aún!!]</p>
        <div class="messages" v-chat-scroll="{always:false, smooth:true}">
        
          <div v-for="mensaje in invertir()" :key="mensaje.id">
            <span class="text-info">
              [{{ mensaje.name }}]:
              <!-- <button class="btn btn-light">*</button>-->
            </span>
            <span>{{mensaje.mensaje}}</span>
            <span class="text-secondary time">{{mensaje.timestamp}}</span>
          </div>
         
           
        </div>
         <div class="card-action">
            <CrearMensaje :name="name" :ip="ip" />
            <!-- <input type="text" v-model="limite"> -->
          </div>
      </div>
      <!-- <button>d</button>

      <button type="button" @click="notify">Show notification</button> -->
    </div>
  </div>
</template>
<script>
import CrearMensaje from "@/components/CrearMensaje";
import fb from "@/firebase/init";
import moment from "moment";

export default {
  name: "Xat",
  props: ["name", "ip"],
  components: {
    CrearMensaje
  },
  data() {
    return {
      mensajes: [],
      limite: 50,
      creating: true,
      minimizado:false
    };
  },
   computed:{

      pantallaXat(){
          return this.minimizado ? 'chat-minimizado' : 'chat-restaurado';
      }
    },
  methods: {
   
    minimizar(){
      this.minimizado = !this.minimizado;     
    },
    invertir() {
      return this.mensajes;
    },
    limpiar() {},
    notify() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification#Parameters
    }
  },

  created() {
    this.creating = true;
    let ref = fb
      .collection("mensajes")
      .orderBy("timestamp", "desc")
      .limit(this.limite);

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          if (doc.data().mensaje != "0") {
            this.mensajes.push({
              id: doc.id,
              name: doc.data().name,
              mensaje: doc.data().mensaje,
              timestamp: moment(doc.data().timestamp).format("LTS"),
              ip: doc.data().ip
            });
          
          }
        }
      });
      this.creating = false;
    });
    
  }
};
</script>

<style>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 0px;
}
.chat h5 {
  margin-top: 0px;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1em;
  font-family: "Verdana";
}
.chat .time {
  display: block;
  font-size: 0.7em;
}
.messages {
  max-height: 390px;
  overflow: auto;
}
.chat {
  background: rgb(33, 33, 33);
  color: white;
  right:0;
  bottom:0;
  
  border-radius:5px;
  border: 1px 1px 2px yellow;
  position: absolute
  
}
.chat-restaurado {
  width: 350px;
  height: 560px;
}
.chat-minimizado {
  width:150px;
  height: 60px;
}
</style>