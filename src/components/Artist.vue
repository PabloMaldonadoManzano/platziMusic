<template>
   <li >
        <h2>
          <a v-bind:href="artist.url" target="_blank">
            {{artist.name}}
          </a>
          <br>
        </h2>
         <img :src="artist.image[2]['#text']">
      </li>
</template>

<script>
export default {
  name: 'artist',
  props: ['artist']
}
</script>

<style type="text/css" scoped>
  li.artist{
    display: block;
    margin: 10px 0;
  }
</style>

