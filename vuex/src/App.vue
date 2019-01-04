<template>
  <div id="app">
    <button @click="changeNum({payload: '+'})">+</button>
    <span>{{num}}</span>
    <button @click="changeNum({payload: '-'})">-</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

export default {
  name: 'app',
  
  methods: {
    getd() {
      console.log(this.$store.dispatch('hideFooter'))
    }
  },
  computed: {
    ...mapState({
      num: state=>state.number.num
    })
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
