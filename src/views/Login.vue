<template>
  <div class="container">
    <div class="login">
      <h2 class="card-title text-center"></h2>
      <form @submit.prevent="login" class="text-center">
        <div class="from-group">
          <input
            type="text"
            class="form-control"
            placeholder="Entra tu nombre"
            name="name"
            v-model="name"
            autocomplete="off"
          />
          <p v-if="errorText" class="text-danger">{{errorText}}</p>
        </div>
        <br>
        <button type="submit" class="btn btn-primary">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      name: "",
      errorText: null,
      results: null
    };
  },
  created() {},
  methods: {
    login() {
      if (this.name) {
        this.$router.push({ name: "Xat", params: { name: this.name, ip: "" } });
      } else {
        this.errorText = "Es necesario un nombre";
      }     
      
              this.$notification.show(
                "Xat-fb",
                {
                  body: this.name
                },
                {}
              );
            
    }
  }
};
</script>

<style>
.login {
  max-width: 450px;
  margin-top: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>