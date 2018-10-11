/* eslint-disable */
<template>
 <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="blue darken-3" dark>

          <v-icon>directions_bike</v-icon>
          <v-toolbar-title>Oslo Bysykkel</v-toolbar-title>

          <v-spacer></v-spacer>

        </v-toolbar>

        <v-list two-line>
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
              @click=""
            >
              <v-list-tile-avatar color="blue darken-3">
                <span class="white--text headline">{{item.avatar}}</span>
                <!-- <v-icon color>{{item.avatar}}</v-icon> -->
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          { header: 'Ledige Sykler i området' },
          {
            avatar: '12',
            title: 'Bjølsen Studentby',
            subtitle: "<span class='text--primary'>12 ledige sykler</span>"
          },
          { divider: true, inset: true },
          {
            avatar: '10',
            title: 'Badebakken',
            subtitle: "<span class='text--primary'>10 ledige sykler</span>"
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
