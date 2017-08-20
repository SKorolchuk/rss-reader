<template>
  <v-app id="app" standalone>
    <v-navigation-drawer persistent clipped light v-model="drawer">
      <v-list>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>All</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>grade</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Favourites</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>archive</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Archives</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>content_copy</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Subscriptions</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
        <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="`https://s0.wp.com/wp-content/themes/vip/techcrunch-2013/assets/images/favicon.ico`" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title>Techcrunch</v-list-tile-title>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="`http://www.cbc.ca/a/favicon.ico`" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title>Techcrunch</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="primary" dark>
      <v-toolbar-side-icon v-on:click.stop.prevent="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>All</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field prepend-icon="search" label="Search..." hide-details single-line dark></v-text-field>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>
<script>
export default {
  name: 'rss-reader',
  data() {
    return {
      drawer: true,
      mini: false,
      right: null,
    };
  },
};
</script>

<style lang="stylus">
@import './assets/_font'
@import '../../node_modules/vuetify/src/stylus/settings/_colors.styl'

$theme := {
  primary: $grey.darken-4
  accent: $red.accent-2
  secondary: $deep-purple.darken-2
  info: $blue.lighten-1
  warning: $amber.darken-2
  error: $red.accent-4
  success: $green.lighten-2
}

@import '../../node_modules/vuetify/src/stylus/main'
</style>
