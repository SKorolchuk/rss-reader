<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'rss-reader',
};
</script>

<style lang="stylus">
@import './assets/_font'
@import '../../node_modules/vuetify/src/stylus/settings/_colors'
$theme := {
  primary: $grey.darken-4
  accent: $red.accent-2
  secondary: $pink.darken-1
  info: $blue.lighten-1
  warning: $amber.darken-2
  error: $red.accent-4
  success: $green.lighten-2
}
@import '../../node_modules/vuetify/src/stylus/main'
</style>
