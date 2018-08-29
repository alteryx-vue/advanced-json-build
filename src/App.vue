<template>

  <v-app>

    <ayx-nav app></ayx-nav>

      <v-content>
        <v-container>

          <ayx-mode v-if="page == 0"></ayx-mode>
          <ayx-options v-if="page == 1"></ayx-options>
          
          <ayx-update></ayx-update>

        </v-container>
      </v-content>
    
  </v-app>

</template>

<script>

  import ayxNav from './components/ayxNav.vue';
  import ayxMode from './components/ayxMode.vue';
  import ayxOptions from './components/ayxOptions.vue';
  import ayxUpdate from './components/ayxUpdate.vue';

  export default {
    components: {
        ayxNav,
        ayxMode,
        ayxOptions,
        ayxUpdate
    },
    computed: {
      page() {
        return this.$store.state.config.page
      }
    }
  }

</script>
