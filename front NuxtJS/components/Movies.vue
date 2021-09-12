<template>
  <v-card class="mx-auto" width="344" height="auto">
    <v-img
      class="img"
      :src="`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`"
      height="200px"
      @click="gotodetails"
    ></v-img>

    <v-card-title>
      {{ movies.original_title }}
    </v-card-title>

    <v-card-subtitle>
      <p>{{ movies.vote_average }}/10</p>
    </v-card-subtitle>

    <v-card-subtitle>
      <p>{{ movies.release_date }}</p>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" @click="gotodetails" text>
        Details
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ movies.overview }}
        </v-card-text>
      </div>
    </v-expand-transition>
    <div>
      <img
        class="heart"
        src="https://img.icons8.com/fluency/100/000000/like.png"
        @click="addToFavorites"
      />
      <div class="comment">
        <img
          src="https://img.icons8.com/fluency/48/000000/comments.png"
          @click="gotodetails"
        />
        {{ numCo }}
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Movies",
  props: ["movies", "favmovies"],

  data: () => ({
    show: false,
    numCo: ""
  }),
  created() {
    this.getNumCom();
  },

  methods: {
    gotodetails() {
      this.$router.push({
        name: "movie-details",
        params: {
          id: this.movies.id,
          title: this.movies.original_title,
          overview: this.movies.overview,
          image: this.movies.backdrop_path,
          poster: this.movies.poster_path,
          date: this.movies.release_date,
          vote: this.movies.vote_count
        }
      });
    },
    addToFavorites() {
      const data = {
        user_id: this.$cookies.get("user_id"),
        movie_id: this.movies.id,
        movie_name: this.movies.original_title
      };

      try {
        const response = this.$axios.post("/favorites", data).then(response => {
          this.$emit("addFav");
          this.$toast.success("added").goAway(1500);
        });
      } catch (e) {
        this.$toast.error("Something goes wrong").goAway(1500);
        console.log(e);
      }
    },
    getNumCom() {
      this.$axios
        .get("comments/" + this.movies.id)
        .then(response => {
          this.numCo = response.data[0];
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.card {
  margin: 20px;
  background-color: antiquewhite;
}
.img {
  cursor: pointer;
}
.mx-auto {
  margin-bottom: 20px;
}
.heart {
  width: 45px;
  cursor: pointer;
}
.comment {
  float: right;
  cursor: pointer;
}
</style>
