<template>
  <div
    style="{ backgroundImage: url(https://i2.wp.com/www.dasym.com/wp-content/uploads/2017/07/Cinema-Image-by-Alexandre-Chassignon-on-Flickr.jpg?fit=2304%2C1728&ssl=1)}"
  >
    <navBar />
    <div class="container">
      <div v-if="logged">
        <img
          class="favoritelist"
          src="https://img.icons8.com/ios/50/000000/likes-folder--v1.png"
          @click="goToFavorites"
        />
        <p>{{ favoritelist }}</p>
      </div>

      <div class="card">
        <span>
          <h4>FILTER</h4>
          <img
            class="reload"
            src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/100/000000/external-reload-arrows-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
            @click="reload()"
          />
        </span>
        <div class="card-body">
          <label class="col-sm" for="genre-select" id="genre">Genre:</label>
          <select v-model="searchGenre" @change="filteredList">
            <option disabled value="">Search by Genre</option>
            <option
              name="genres"
              id="genres-select"
              v-for="genre in genres"
              :key="genre.id"
              :value="`${genre.id}`"
            >
              {{ genre.name }}
            </option>
          </select>
        </div>
        <div class="card-body">
          <label for="title" id="title">Title:</label>
          <input
            id="search-filter"
            type="text"
            name="title"
            placeholder="Search by Titles..."
            v-model="searchTitle"
            @input="filteredList()"
          />
        </div>
      </div>
      <div class="card2">
        <nav aria-label="Pages">
          <ul class="pagination">
            <li class="page-item">
              <a
                class="page-link"
                @click="$router.back()"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="/">1</a></li>
            <li class="page-item"><a class="page-link" href="page2">2</a></li>
            <li class="page-item"><a class="page-link" href="page3">3</a></li>
            <li class="page-item"><a class="page-link" href="page4">4</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="row justify-content-center">
        <Movies
          v-for="item in contents4"
          v-bind:key="item.id"
          :movies="item"
          @addFav="addFav"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Movies from "~/components/Movies";
// import FolioMovie from "/components/FolioMovie.vue";
import navBar from "~/components/navBar.vue";

export default {
  components: {
    Movies,
    // FolioMovie,
    navBar
  },

  data() {
    return {
      contents4: [],

      favoritelist: "",
      genres: [],

      searchDate: "",
      searchGenre: "",
      searchTitle: "",
      logged: this.$cookies.get("user_name")
    };
  },

  created: function() {
    this.getAllMovies4();

    this.getFavoriteList();
  },

  methods: {
    getAllMovies4() {
      this.$axios
        .get("http://localhost:8000/api/page/4")
        .then(response => {
          this.contents4 = response.data.results;
          this.getAllGenres();
        })
        .catch(error => {
          console.log(error.response);
        });
    },

    getFavoriteList() {
      this.$axios
        .get("favorites/" + this.$cookies.get("user_id"))
        .then(response => {
          this.favoritelist = response.data[0];
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    goToFavorites() {
      this.$router.push("userfavoriteslist");
    },
    addFav() {
      let x = 1;
      this.favoritelist = this.favoritelist += x;
    },

    getAllGenres() {
      this.$axios.get("http://localhost:8000/api/genres").then(response => {
        this.genres = response.data.genres;
      });
    },

    filteredList() {
      if (this.searchTitle == "") {
        this.contents4 = this.contents4.filter(contents4 => {
          return contents4.genre_ids
            .toString()
            .toLowerCase()
            .includes(this.searchGenre.toLowerCase());
        });
      } else if (this.searchGenre == "") {
        this.contents4 = this.contents4.filter(contents4 => {
          return contents4.original_title
            .toLowerCase()
            .includes(this.searchTitle.toLowerCase());
        });
      } else {
        this.contents4 = this.contents4.filter(contents4 => {
          return contents4.genre_ids
            .toString()
            .toLowerCase()
            .includes(this.searchGenre.toLowerCase());
        });
        this.contents4 = this.contents4.filter(contents4 => {
          return contents4.original_title
            .toLowerCase()
            .includes(this.searchTitle.toLowerCase());
        });
      }
    },
    reload() {
      this.$router.go();
    }
  }
};
</script>
<style scoped>
.row {
  align-items: center;
  margin-bottom: 15px;
}

#search-filter {
  border-style: solid;
  border: solid black;
}
.favoritelist {
  align-content: right;
  cursor: pointer;
}
.reload {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
select {
  border: solid black;
}
#title {
  display: block;
  font-style: italic;
  font-weight: bolder;
}
span {
  display: flex;
  justify-content: space-between;
}
.card {
  width: 20%;
  margin-bottom: 30px;
  background-color: rgba(130, 202, 202, 0.568);
  box-shadow: 2px 2px 2px 2px;
}
#genre {
  margin-left: -10px;
  font-style: italic;
  font-weight: bolder;
}
h4 {
  align-self: center;
}
</style>
