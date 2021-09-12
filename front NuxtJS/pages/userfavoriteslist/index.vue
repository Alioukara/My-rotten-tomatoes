<template>
<div> <navBar/>
  <div class="container">
   
    <img class="back" src="https://img.icons8.com/flat-round/64/000000/back--v1.png" @click="$router.back()"/>
    <h1>YOUR LIST OF FAVORITES MOVIES</h1>

    <div class="row justify-content-center">
      <FavMovies
        v-for="item in favoritList"
        :key="item"
        :favmovies="JSON.stringify(item)"
        @removeFav="removeFav"
      />
    </div>
  </div>
</div>
</template>

<script>
import FavMovies from "../../components/favMovies.vue";
import navBar from "~/components/navBar.vue";
export default {
  components: {
    FavMovies,
    navBar
  },
  data() {
    FavMovies;
    return {
      favoritList: [],
      movie_id: []
    };
  },
  created() {
    this.getFavoriteList();
    // this. getFavMovies()
  },
  methods: {
    getFavoriteList() {
      this.$axios
        .get("favorites/"+this.$cookies.get("user_id"))
        .then(response => {
          let result = response.data[1];
          for (const obj of result) {
            this.movie_id.push(obj.movie_id);
          }
          this.getFavMovies();
        })
        .catch(error => {
          console.log(error);
        });
    },

    getFavMovies() {
      let y = this.movie_id;
      y.forEach(element =>
        this.$axios
          .get("http://localhost:8000/api/" + element)
          .then(response => {
            this.favoritList.push(response.data);
          })
          .catch(error => {
            console.log(error);
          })
      );
    },
    removeFav(id) {
      this.favoritList = this.favoritList.filter(n => n.id !== id);
    }
  }
};
</script>

<style>
.container {
  margin-top: 60px;
}
h1 {
  text-align: center;
}
</style>
