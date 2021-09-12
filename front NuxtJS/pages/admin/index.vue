<template>
<div>
    <navBar/>
  <div class="container">
    
    <img class="back" src="https://img.icons8.com/flat-round/64/000000/back--v1.png" @click="$router.back()"/>
    <div class="card">
      <h1 class="title">ADMIN DASHBOARD</h1>
      <div class="row d-flex justify-content-center">
    <button type="button" class="btn-crud "  @click="goToCrudeUsers">Crud Users</button>
    <button type="button" class="btn-crud" >Crud Movies</button>
      </div>
    <!-- <button type="button" class="btn-crud">Crud Comments</button> -->
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
    
    methods: {
    goToCrudeUsers() {
      this.$router.push("/crudusers");
    },
    }
};
</script>

<style>

.title {
    text-align: center;
}

.btn-crud {
  display: flex;
  justify-content: space-between;
  justify-self: center;
  align-self: center;
  align-items: center;
  text-align: center;
  background-color: rgb(0, 0, 255);
  color: white;
  border-radius: 5px;
  text-align: center;
  width: 150px;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 5px;
  font-weight: bold;
}

</style>