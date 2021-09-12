<template>
  <v-card class="mx-auto" width="344" height="auto" v-if="movie != ''">
    <v-img
      class="img"
      :src="`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ movie.original_title }}
    </v-card-title>

    <v-card-subtitle>
      <p>{{ movie.vote_average }}/10</p>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text>
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
          {{ movie.overview }}
        </v-card-text>
      </div>
    </v-expand-transition>
    <img
      src="https://img.icons8.com/plasticine/100/000000/filled-trash.png"
      @click="deleteFav"
    />
  </v-card>
</template>

<script>
export default {
  name: "FavMovies",

  props: {
    favmovies: String
  },

  data: () => ({
    show: false,
    movie: ""
  }),
  created() {
    this.movie = JSON.parse(this.$props.favmovies);
    
  },
  methods: {
    deleteFav() {
      
      this.$axios
        .delete(`favorites/${this.movie.id}`)
        .then(response => {
          this.$toast.error("Deleted!").goAway(1500);
          this.$emit("removeFav", this.movie.id);
          this.$toast.danger("Deleted").goAway(1500);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>
