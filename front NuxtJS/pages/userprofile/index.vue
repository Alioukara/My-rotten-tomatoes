<template>
  <div>
    <navBar/>
    <img class="back" src="https://img.icons8.com/flat-round/64/000000/back--v1.png" @click="$router.back()"/>
       
    <div class="edit-form">
      <h1>EDIT MY PROFIL</h1>
      <form @submit.prevent="EditUser">
        <label class="label" for="">EMAIL</label>
        <hr />

        <input type="text" class="input" v-model="email" />
        <hr />
        <label class="label" for="">USERNAME</label>
        <hr />

        <input type="text" class="input" v-model="name" />
        <hr />
        <label class="label" for="">ENTER YOUR  PASSWORD OR A NEW NEW ONE</label><br />
        <input type="password" class="input" v-model="password" />
        <hr />
        <!-- <label class="label" for="">ADMIN</label><br />
        <input type="text" class="input" v-model="admin" />
        <hr /> -->
        <button type="submit" class="btn btn-success">SAVE</button>
      </form>
    </div>
  </div>
</template>

<script>
import navBar from "~/components/navBar.vue";
export default {
  components: {
    navBar
  },
  data() {
    return {
      id: "",
      name: "",
      email: "",
      password: "",
    //   admin: "",
    };
  },
  created() {
    this.getUserById();
  },
  methods: {
      getUserById() {
      this.$axios
        .get("/users/" +  this.$cookies.get('user_id'))
        .then((response) => {
         
          this.email = response.data.email;
          this.id = response.data.id;
          this.name = response.data.name;
          // this.password = response.data.password;
         
        });
    },
    EditUser() {
      var axios = require("axios");
      var data = JSON.stringify({
        ...(this.name ? { name: this.name } : {}),
        ...(this.email ? { email: this.email } : {}),
        ...(this.password ? { password: this.password } : {}),
       
          "admin":"0"
      });
      var config = {
        method: "patch",
        url: 'http://localhost:8000/users/' + this.id,

        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then((response) => {
          
          this.$router.push("/userprofile");
          this.$toast.success("Saved").goAway(1500);
        })
        .catch((error) => {
       
          console.log(error);
             this.$toast.error("Make sure that you have filled all areas!").goAway(1500);
        });
    },
  }
};
</script>

<style>

.edit-form{
    margin-left: 10px;
}

.input {
    background-color: rgb(243, 240, 240);
    width: auto;
}

.label {
    font-weight: bold;
}
</style>