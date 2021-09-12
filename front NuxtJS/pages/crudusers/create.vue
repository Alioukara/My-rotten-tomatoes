<template>
<div><navBar/>
  <div class="container">
    
     <img class="back" src="https://img.icons8.com/flat-round/64/000000/back--v1.png" @click="$router.back()"/>
    <div class="card">

    <form @submit.prevent="CreateUser">
      <h1>CREATE A NEW USER</h1>
      <br />
      <hr />
      <label for="">USERNAME</label><br />

      <input type="text" v-model="Newuser.username" /> <br />
      <hr />
      <label for="">EMAIL</label><br />

      <input type="text" v-model="Newuser.email" />
      <hr />
      <label for="">PASSWORD</label><br />
      <input type="text" v-model="Newuser.password" />
      <hr />
      <button type="submit" class="btn btn-success" @click="$router.back()">Save</button>
    </form>
    </div>
  </div>
</div>
</template>

<script>
import navBar from "~/components/navBar.vue";
export default {
  components: {
    navBar
  },
  name: "Create-User",
  data() {
    return {
      Newuser: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    CreateUser() {
      var axios = require("axios");
      var data = JSON.stringify({
        name: this.Newuser.username,
        email: this.Newuser.email,
        password: this.Newuser.password,
      });

      var config = {
        method: "post",
        url: 'http://localhost:8000/users/register',
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          
          this.$router.push("/crudusers");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>


</style>