<template>
  <v-app id="inspire">
    <navBar />

    <v-main>
      <img
        class="back"
        src="https://img.icons8.com/flat-round/64/000000/back--v1.png"
        @click="$router.back()"
      />
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Signup</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="name"
                    name="name"
                    label="Name"
                    type="text"
                    required="required"
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    name="email"
                    label="Email"
                    type="text"
                    required="required"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    required="required"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="signupHandler">Signup</v-btn>
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
  components: {
    navBar
  },
  name: "Signup",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    async signupHandler() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password
      };

      try {
        this.$toast.show("Creating account...").goAway(1500);
        const response = await this.$axios.post("users/register", data);
        this.$toast.success("Successfully created").goAway(1500);

        this.$router.push("/login");
      } catch (e) {
        this.$toast.error("Error while creating").goAway(1500);
        console.log(e.message);
      }
    }
  }
};
</script>

<style></style>
