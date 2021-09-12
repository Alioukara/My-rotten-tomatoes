<template>
  <div class="topnav" id="myTopnav">
    <NuxtLink to="/" class="active">Home</NuxtLink>
    <div v-if="admin">
    <NuxtLink to="/admin" >Admin</NuxtLink>
     </div>
    <div v-if="logged">
      <NuxtLink to="/userprofile">Profil</NuxtLink>
      <NuxtLink to="/login"><button @click="logout()">Logout</button></NuxtLink>
    </div>
    <div v-else>
       <NuxtLink to="/login">Signin</NuxtLink>
       <NuxtLink to="/signup">Signup</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logged: this.$cookies.get("user_name"),
      admin: this.$cookies.get("admin")
    };
  },
  methods: {
    logout() {
      this.$cookies.remove("token");
      this.$cookies.remove("admin");
      this.$cookies.remove("user_id");
      this.$cookies.remove("user_name");
      this.$toast.error("Logged Out !").goAway(1500);
    }
  }
};
</script>

<style scoped>
/* Add a black background color to the top navigation */
.topnav {
  background-color: rgb(70, 125, 197);
  overflow: hidden;
  margin-bottom: 30px;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: right;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: rgb(236, 160, 17);
  color: black;
}

/* Add an active class to highlight the current page */
.topnav a.active {
  background-color: #04aa6d;
  color: white;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}
</style>
