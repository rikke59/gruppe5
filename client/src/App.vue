<template>
  <v-app dark>

    <v-layout align-center justify-space-between row/> 
          <ruter/>
          <bysykkel/>
    </v-layout>

  </v-app>
</template>

<script>
import Ruter from './components/Ruter.vue'
import Bysykkel from './components/Bysykkel.vue'

export default {
  name: 'App',
  components: {
    Ruter,
    Bysykkel
  },
  data () {
    return {
      
    }
  }

}
</script>
