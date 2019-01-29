<template>
  <div class="home">
    <h1>Search</h1>
    <input type="search" v-model="query">
    <button @click="search">Search</button>

    <div class="results">
      <ul>
        <li v-bind:key="result.id" v-for="result in results">
          {{result.name}}
          <a :href="result.directionsUrl">Get Directions</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data: function() {
    return {
      query: ""
    };
  },
  computed: {
    results() {
      return this.$store.state.searchResults;
    }
  },
  methods: {
    search() {
      this.$store.dispatch("doSearch", this.query);
    }
  }
};

// this.$store.state.query
</script>


