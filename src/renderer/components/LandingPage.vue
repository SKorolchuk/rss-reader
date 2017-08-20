<template>
    <v-layout row wrap>
      <v-flex xs12>
        <v-list two-line>
          <v-list-item  style="background:white;" @click="openLink(bookmark.url)">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img :src="`https://s0.wp.com/wp-content/themes/vip/techcrunch-2013/assets/images/favicon.ico`">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title> Sample </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon class="yellow--text yellow--accent-4">grade</v-icon>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-menu bottom left transition="v-slide-y-transition">
                  <v-btn icon="icon" slot="activator">
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                  <v-list>
                    <v-list-item>
                      <v-list-tile>
                        <v-list-tile-title>Mark as favourite</v-list-tile-title>
                      </v-list-tile>
                    </v-list-item>
                    <v-list-item>
                      <v-list-tile>
                        <v-list-tile-title>Delete</v-list-tile-title>
                      </v-list-tile>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-tile-action>
            </v-list-tile>
             <v-divider></v-divider>
          </v-list-item>
          <v-list-item  style="background:white;" @click="openLink(bookmark.url)">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img :src="`https://s0.wp.com/wp-content/themes/vip/techcrunch-2013/assets/images/favicon.ico`">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title> Sample </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon class="yellow--text yellow--accent-4">grade</v-icon>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-menu bottom left transition="v-slide-y-transition">
                  <v-btn icon="icon" slot="activator">
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                  <v-list>
                    <v-list-item>
                      <v-list-tile>
                        <v-list-tile-title>Mark as favourite</v-list-tile-title>
                      </v-list-tile>
                    </v-list-item>
                    <v-list-item>
                      <v-list-tile>
                        <v-list-tile-title>Delete</v-list-tile-title>
                      </v-list-tile>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-item>
          <v-list-item  style="background:white;" @click="openLink(bookmark.url)">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img :src="`https://s0.wp.com/wp-content/themes/vip/techcrunch-2013/assets/images/favicon.ico`">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title> Sample </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon class="yellow--text yellow--accent-4">grade</v-icon>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-menu bottom left transition="v-slide-y-transition">
                  <v-btn icon="icon" slot="activator">
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                  <v-list>
                    <v-list-item>
                      <v-list-tile>
                        <v-list-tile-title>Mark as favourite</v-list-tile-title>
                      </v-list-tile>
                    </v-list-item>
                    <v-list-item>
                      <v-list-tile>
                        <v-list-tile-title>Delete</v-list-tile-title>
                      </v-list-tile>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-flex>
      <v-fab-transition>
        <v-btn
        fixed
        dark
        fab
        bottom
        right
        class="pink"
        >
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
    </v-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' },
      ],
      mini: false,
      right: null,
    };
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
  },
};
</script>
