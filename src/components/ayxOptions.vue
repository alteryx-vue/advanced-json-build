<template>

	<div>

    <h3 class="mb-3">{{ pages[page].name }}
      <v-btn
        small
        flat
        right
        fixed
        color="primary"
        @click="goBack"
        v-show="!showAlert">
        <v-icon left>arrow_back</v-icon>
        mode
      </v-btn>
    </h3>

    <div>

      <v-alert outline :type="alertType" :value="showAlert" class="mb-3">
        {{ alertText }}
      </v-alert>

<!--       <v-list v-show="!showAlert" class="transparent" dense>

        <v-switch 
          v-for="section in sections" 
          :label="section.name" 
          v-model="selections" 
          :value="section.key" 
          :key="section.key" 
          @change="updateSelections()"
          color="grey darken-4"
          hide-details
          class="mb-1">
        </v-switch>

      </v-list> -->

    </div>

  </div>

</template>

<script>
  export default {
  	name: 'ayxOptions',
    data() {
      return {
        page: this.$store.state.config.page,
        pages: this.$store.state.config.pages,
      }
    },
    computed: {
      showAlert() {
        return false
      },
      alertType() {
        return 'success'
      },
      alertText() {
        const runworthy = 'Connected'
        return runworthy
      }
    },
    methods: {
      goBack() {
        this.$store.commit('updatePage', 0)
      }
    }
  }
</script>

