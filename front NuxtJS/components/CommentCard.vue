<template>
  <div>
    <div class="card rounded" style="width: 25rem;">
      <div class="card-body">
        <h5 class="card-title">{{ comment.user_name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted"></h6>
        <p class="card-text">{{ comment.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentCard",
  props: {
    comment: Object
  }
};
</script>

<style scoped>
.card {
  background-color: rgb(35, 140, 200);
}
.card-body {
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
.input-group {
  margin-bottom: 50px;
}
</style>
