<template>
    <table class="table table-stripped table-bordred">
      <thead class="thead-dark">
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Admin</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </thead>
      <tbody>
        <tr>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.admin }}</td>
          <td>
            <button type="button" class="btn btn-warning" @click="redirect">
              Edit
            </button>
          </td>
          <td>
            <button type="button" class="btn btn-danger" @click="deleteUser">
              Delete
            </button>
          </td>
          <td>
            <!-- <button type="button" class="btn btn-success" @click="redirectuser">
              Create
            </button> -->
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  name: "CrudUser",
  props: ['user'],
  methods: {
    deleteUser() {
      this.$axios
        .delete("users/" + this.user.id)
        .then((response) => {
          this.$toast.error("Deleted!").goAway(1500);
        })
        .catch((error) => {
          console.log(error.response);
        });
        this.$emit("removeUser", this.user.id);
    },
    redirect() {
      this.$router.push({
        name: "crudusers-edit",
        params: {
          id: this.user.id,
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          admin: this.user.admin,
        },
      });
    },
  }
};
</script>

<style>
</style>