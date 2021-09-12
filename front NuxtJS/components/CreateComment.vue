<template>

  <form @submit.prevent="createComments" class="input-group input-group-lg" style="width: 70%; height: 30px;">
  <div class="input-group-prepend">
    <span><button type="submit" class="btn btn-primary btn-lg" >Comment</button></span>
  </div>
  <input type="text" class="form-control" aria-label="Large" 
  aria-describedby="inputGroup-sizing-sm" 
  placeholder="Enter Your Comment"  v-model="newComment.text"
  >

</form> 
</template>

<script>
export default {
    data: () => {
    return {
    
    newComment: {
        text: "",
      },
    }
  },
  methods:{
      createComments() {
      this.$emit("create-new-comment", this.newComment);
      this.newComment = {};
    },
  }

}
</script>

<style>

</style>