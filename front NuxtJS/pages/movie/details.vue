<template>
  <div>
    <navBar />
    <div class="card">
      <div class="card-body">
        <img
          class="back"
          src="https://img.icons8.com/flat-round/64/000000/back--v1.png"
          @click="$router.back()"
        />
        <h1>{{ $route.params.title }}</h1>
        <img :src="`https://image.tmdb.org/t/p/w1280/${$route.params.image}`" />
        <h2>Overview:</h2>
        <h3>{{ $route.params.overview }}</h3>
        <h2>Release Date:</h2>
        <h3>{{ $route.params.date }}</h3>
        <h2>Vote Count:</h2>
        <h3>{{ $route.params.vote }}</h3>
      </div>
    </div>
    <div class="create">
      <CreateComment @create-new-comment="addcomments($event)" />
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm">
          <CommentCard
            v-for="comment in listofcomments"
            :key="comment.id"
            :comment="comment"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CommentCard from "../../components/CommentCard.vue";
import CreateComment from "@/components/CreateComment.vue";
import navBar from "~/components/navBar.vue";
export default {
  components: {
    CommentCard,
    CreateComment,
    navBar
  },
  data: () => {
    return {
      listofcomments: []
    };
  },
  created() {
    this.getAllComments();
  },
  methods: {
    getAllComments() {
      this.$axios
        .get("comments/" + this.$route.params.id)
        .then(response => {
          response.data[1].forEach(element => {
            this.listofcomments.push(element);
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    addcomments(newComment) {
      const data = {
        text: newComment.text,
        user_id: this.$cookies.get("user_id"),
        user_name: this.$cookies.get("user_name"),
        movie_id: this.$route.params.id
      };

      this.$toast.show("Commenting...").goAway(1500);
      this.$axios
        .post("comments", data)
        .then(response => {
          this.$toast.success("commented").goAway(1500);
        })

        .catch(e => {
          this.$toast.error("Error while commenting").goAway(1500);
          console.log(e.message);
        });
    }
  }
};
</script>

<style scoped>
.card-body {
  width: 90%;
  margin: 90px;
  justify-content: center;
  text-align: center;
}
.back {
  width: 100px;
}

.create {
  margin-bottom: 50px;
}
h2 {
  text-decoration: underline;
  font-style: italic;
  font-weight: bold;
}
</style>
