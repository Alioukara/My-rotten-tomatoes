<template>
  <span>
    <navBar/>
     <img class="back" src="https://img.icons8.com/flat-round/64/000000/back--v1.png" @click="$router.back()"/>
    <button class="btn-create" @click="goToCreateUser()">
      Create New User
    </button>
    <div>
      <CrudUser
        v-for="item in listofusers"
        :key="item"
        :user="item"
        @removeUser="removeUser"
      />
    </div>
  </span>
</template>

<script>
import CrudUser from "/components/CrudUser.vue";
import navBar from "~/components/navBar.vue";


export default {
  name: "users",
  data() {
    return {
      listofusers: [],
    };
  },
  created() {
    this.getAllusers();
  },
  methods: {
    getAllusers() {
      this.$axios
        .get("users")
        .then((response) => {
          this.listofusers = response.data;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    removeUser(id) {
      this.listofusers = this.listofusers.filter((n) => n.id !== id);
    },
    goToCreateUser() {
      this.$router.push("/crudusers/create");
    },
  },
  components: { 
    CrudUser, 
    navBar
   
  },
};
</script>

<style>
.btn-create {
  background-color: green;
  color: white;
  border-radius: 5px;
  text-align: center;
  width: 150px;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 5px;
}
</style>