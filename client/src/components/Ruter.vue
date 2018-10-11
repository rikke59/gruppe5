/* eslint-disable */
<template>
 <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="red darken-3" dark>

          <v-icon>directions_bus</v-icon>
          <v-toolbar-title>Ruter #</v-toolbar-title>

          <v-spacer></v-spacer>

        </v-toolbar>


        <v-list two-line>
          <template v-for="(departure, index) in departures.slice(0, 5)">

              <v-divider />

              <v-list-tile avatar>

              <v-list-tile-avatar color="red darken-3">
                <span class="white--text headline">{{departure.publicCode}}</span>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="departure.destinationDisplay"></v-list-tile-title>
                <v-list-tile-sub-title v-html="departure.departureLabel"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>


<!--         <v-list two-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :inset="item.inset"
              :key="index"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar
            >
              <v-list-tile-avatar color="red darken-3">
                <span class="white--text headline">{{item.avatar}}</span>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list> -->
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>

  import EnturAPI from '../services/EnturAPI.js'

  //import EnturService from '@entur/sdk'
  //const service = new EnturService({ clientName: 'kristiania-tavle' })
  // const now = new Date()

  export default {
    async mounted () {


      await EnturAPI.example().then(res => {
        this.departures = res
        console.log(res)
      }).catch(err => {
        console.log("error example()", err)
      })


    },
    data () {
      return {
        departures: [],
        items: [
          { header: 'Plattform 1' },
          {
            avatar: '37',
            title: 'Helsfyr',
            subtitle: "<span class='text--primary'>nå 6min 12min</span>"
          },
          { divider: true, inset: true },
          {
            avatar: '54',
            title: 'Tjuvholmen',
            subtitle: "<span class='text--primary'>nå 6min 12min</span>"
          },
          { divider: true, inset: true },
          {
            avatar: '20',
            title: 'Helvete',
            subtitle: "<span class='text--primary'>nå 6min 12min</span>"
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
