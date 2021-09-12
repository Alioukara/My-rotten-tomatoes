<template>
 
  <v-app id="inspire">
     
     <navBar/>
     
    <v-main>
      <img class="back" src="https://img.icons8.com/flat-round/64/000000/back--v1.png" @click="$router.back()"/>
      <v-container fluid fill-height>
        
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    name="email"
                    label="Email"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" type="submit" @click="loginHandler">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import navBar from "~/components/navBar.vue";
export default {
  conponents: {
    navBar
  },
  // middleware: 'auth',
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async loginHandler() {
      const data = {
        email: this.email,
        password: this.password
      };
      try {
        this.$toast.show("Logging in...").goAway(1500);
        const response = await this.$axios.post("users/login", data);
       
        this.$toast.success("Successfully logged in").goAway(1500);
        let token = response.data.jwt;
        let admin = response.data.user.admin;
        let user_name = response.data.user.name;
        let user_id = response.data.user.id;
        
        this.$cookies.set("user_name", user_name);
        this.$cookies.set("user_id", user_id);
        this.$cookies.set("token", token);
        this.$cookies.set("admin", admin);
        const cookies = this.$cookies.get("admin");
       
        if (!cookies) {
          this.$router.push("/");
        } else {
          this.$router.push("/admin");
        }
      } catch (e) {
        this.$toast.error("Error while logging in").goAway(1500);
        console.log("error=", e.message);
      }
    }
  }
};
</script>

<style></style>
