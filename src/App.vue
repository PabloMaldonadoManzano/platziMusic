<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--router-view/-->
    <select v-model="selectedCountry">
      <option v-for="country in countries" :value="country.value">
        {{country.name}}
      </option>
    </select>
    <spinner v-show="loading"></spinner>
    <ul>
      <!--li v-for="artist in artists">
        {{artist.name}}
      </li-->
      <artist v-for="artist in artists" 
      v-bind:artist="artist" v-bind:key="artist.mbid">
    </artist>
    </ul>
  </div>
</template>

<script>
import Artist from './components/Artist.vue';
import Spinner from './components/Spinner.vue';
import getArtists from '../api';
export default {
  name: 'App',
  data () {
    return {
    artists: [],
    countries: [
      { name: 'México', value: 'mexico'},
      { name: 'Argentina', value: 'argentina'},
      { name: 'españa', value: 'spain'}
    ],
    selectedCountry: 'mexico',
        loading: true
    }
  },
  components:{
    Artist: Artist,
      Spinner: Spinner
  },
  methods:{
    refreshArtists(){
      const self = this;
      self.loading = true
       getArtists(this.selectedCountry)
      .then(function(artists){
        self.artists = artists;
        self.loading = false
      })
    }
  },
  mounted: function () {
    /*const self = this;
    getArtists()
    .then(function(artists){
      self.artists = artists;
    })*/
    this.refreshArtists();
  },
  watch: {
    selectedCountry: function(){
      this.refreshArtists();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
