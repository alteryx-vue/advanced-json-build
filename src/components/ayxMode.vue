<template>

  <div>

    <h3 class="mb-1">
      <v-icon color="amber">{{ pages[page].icon }}</v-icon>
      {{ pages[page].name }}
    </h3>

      <v-alert outline :type="alertType" :value="showAlert" class="mb-3">
        {{ alertText }}
      </v-alert>

      <v-radio-group v-model="mode" mandatory="true" class="transparent">
        <template v-for="opt in modeOptions">
          <v-radio
            :label="opt.label" 
            :value="opt.value" 
            :key="opt.id" 
            @change="updateMode()"
            color="blue darken-1">
          </v-radio>
        </template>
      </v-radio-group>

  </div>

</template>

<script>

  import { required } from 'vuelidate/lib/validators'

  export default {
  	name: 'ayxMode',
    // validations: {
    //   apiKey: { required }
    // },
    data () {
      return {
        loading: false,
        mode: this.$store.state.ui.mode,
        modeOptions: this.$store.state.config.modeOptions,
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
      },
      page() {
        return this.$store.state.config.page
      },
      pages() {
        return this.$store.state.config.pages
      }
    },
    methods: {
      moveOn() {
        this.$store.commit('updatePage', 1)
      },
      updateMode() {
          this.$store.commit('updateMode',this.mode)
      }
    }
  }
</script>
