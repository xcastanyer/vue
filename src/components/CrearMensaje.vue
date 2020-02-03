<template>
    <div class ="container" style="margin-bottom: 30px">
        <form @submit.prevent="crearMensaje">
            <div class="from-group">
                <input type="text" name="message" placeholder="..." v-model="nuevoMensaje" class="form-control">
                
            </div>
            <br>
            <button class="btn btn-primary" type="submit" name="action">Enviar</button>
            <br>
            <br>
            <p class="text-danger" v-if="errorText">{{errorText}}</p>
        </form>
    </div>
</template>

<script>

import fb from '@/firebase/init';

export default {
    name:'CrearMensaje',
    props:['name','ip'],
    data(){
        return{
            nuevoMensaje: null,
            errorText: null

        }
    },
    methods:{
        crearMensaje(){
            if (this.nuevoMensaje){
                fb.collection('mensajes').add({
                    mensaje: this.nuevoMensaje,
                    name:this.name,
                    timestamp:Date.now(),
                    ip:this.ip
                }).catch(err =>{
                    this.errorText = err;
                    //console.log(err);
                });
                this.nuevoMensaje = null;
                this.errorText = null;
            }else{
                this.errorText = "Se requiere un mensaje!!";
            }
        }
    }
}
</script>