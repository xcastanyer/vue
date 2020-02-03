<template>
    <div class ="container" style="margin-bottom: 30px">
        <form @submit.prevent="crearMensaje">
            <div class="from-group">
                <input type="text" name="message" placeholder="Entrar mensajae ..." v-model="nuevoMensaje" class="form-control">
                <p class="text-danger" v-if="errorText">{{errorText}}</p>
            </div>
            <button class="btn btn-primary" type="submit" name="action">Enviar</button>
        </form>
    </div>
</template>

<script>

import fb from '@/firebase/init';

export default {
    name:'CrearMensaje',
    props:['name'],
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
                    timestamp:Date.now()
                }).catch(err =>{
                    console.log(err);
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