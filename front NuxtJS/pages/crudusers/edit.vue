<template>
  <div>
    <navBar />
    <div class="container">
      <img
        class="back"
        src="https://img.icons8.com/flat-round/64/000000/back--v1.png"
        @click="$router.back()"
      />
      <div class="card">
        <form @submit.prevent="EditUser">
          <label for="">USERNAME</label>
          <h1>{{ $route.params.name }}</h1>
          <input type="text" v-model="EditedUser.name" /> <br />
          <hr />
          <label for="">EMAIL</label>
          <h1>{{ $route.params.email }}</h1>
          <input type="text" v-model="EditedUser.email" />
          <hr />
          <label for="">NEW PASSWORD</label><br />
          <input type="password" v-model="EditedUser.password" />
          <hr />
          <hr />
          <label for="">ADMIN</label><br />
          <input type="text" v-model="EditedUser.admin" />
          <hr />
          <button type="submit" class="btn btn-success">SAVE</button>
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
  name: "Edit-User",
  data() {
    return {
      EditedUser: {
        name: this.$route.params.name,
        email: this.$route.params.email,
        password: "",
        admin: this.$route.params.admin
      }
    };
  },

  methods: {
    EditUser() {
      var axios = require("axios");
      var data = JSON.stringify({
        ...(this.EditedUser.name ? { name: this.EditedUser.name } : {}),
        ...(this.EditedUser.email ? { email: this.EditedUser.email } : {}),
        ...(this.EditedUser.password
          ? { password: this.EditedUser.password }
          : {}),
        ...(this.EditedUser.admin ? { admin: this.EditedUser.admin } : {})
      });
      var config = {
        method: "patch",
        url: "http://localhost:8000/users/" + this.$route.params.id,

        headers: {
          "Content-Type": "application/json"
        },
        data: data
      };
      axios(config)
        .then(response => {
          this.$toast.success("Saved!").goAway(1500);
          this.$router.push("/crudusers");
        })
        .catch(error => {
          this.$toast
            .error("Make sure that you have filled all areas!")
            .goAway(1500);
          console.log(error);
        });
    }
  }
};
</script>

<style></style>
