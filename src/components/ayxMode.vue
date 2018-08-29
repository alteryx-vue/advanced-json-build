<template>

  <div>

      <v-radio-group v-model="mode" mandatory="true" hide-details class="transparent mb-0 pt-0">
        <template v-for="opt in modeOptions">
          <v-radio
            :label="opt.label" 
            :value="opt.value" 
            :key="opt.id"
            :disabled="opt.disabled"
            color="orange darken-3"
            hide-details>
          </v-radio>
        </template>
      </v-radio-group>

      <ayx-examples :mode="mode"></ayx-examples>

  </div>

</template>

<script>

  import { required } from 'vuelidate/lib/validators'
  import ayxExamples from './ayxExamples.vue';

  export default {
  	name: 'ayxMode',
    components: {
        ayxExamples
    },
    data () {
      return {
        loading: false,
        modeOptions: this.$store.state.config.modeOptions,
      }
    },
    computed: {
      mode: {
        get () {
          return this.$store.state.ui.mode
        },
        set (v) {
          this.$store.commit('updateMode', v)
        }
      },
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
      }
    }
  }
</script>
