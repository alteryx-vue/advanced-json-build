<template>

  <div class="pt-4 px-4 mb-0 pb-0">
      <h3 class="mb-0 pb-0">
        <v-icon color="grey darken-2" class="mr-2">{{ pages[page].icon }}</v-icon>
        {{ pages[page].name }}
        <v-btn
          v-if="page == 0"
          small
          flat
          right
          fixed
          color="primary"
          @click="updatePage">
          {{ pages[pages[page].oppo].label }}
          <v-icon right>arrow_forward</v-icon>
        </v-btn>
        <v-btn
          v-else
          small
          flat
          right
          fixed
          color="primary"
          @click="updatePage">
          <v-icon left>arrow_back</v-icon>
          {{ pages[pages[page].oppo].label }}
        </v-btn>
      </h3>
  </div>

</template>

<script>

  export default {
    name: 'ayxNav',
    computed: {
      page() {
        return this.$store.state.config.page
      },
      pages() {
        return this.$store.state.config.pages
      },
    },
    methods: {
      updatePage() {
        this.$store.commit('updatePage', this.$store.state.config.pages[this.$store.state.config.page].oppo)
      }
    }
  }

</script>