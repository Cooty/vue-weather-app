<template>
  <article class="bg-light py-3 shadow-lg">
    <wrapper>
      <b-form>
        <b-form-group
          label="Country:"
          label-for="select-country"
        >
          <b-form-select
            id="select-country"
            v-model="query.country"
            :options="countries"
            required
          />
        </b-form-group>
        <b-form-group
          label="City:"
          label-for="input-city"
        >
          <b-form-input
            id="input-city"
            v-model="query.city"
            name="city"
            placeholder="Type your city"
            required
          />
        </b-form-group>
        <b-form-group>
          <b-button
            type="submit"
            variant="primary"
          >
            Check the weather!
          </b-button>
        </b-form-group>
      </b-form>
    </wrapper>
  </article>
</template>

<script>
import Wrapper from '../../ui/Wrapper.vue';
import {BForm, BFormGroup, BFormInput, BFormSelect, BButton} from 'bootstrap-vue'
import countryOptions from './country-options';

export default {
  name: 'QueryForm',
  components: {
    Wrapper,
    BForm,
    BFormInput,
    BFormGroup,
    BFormSelect,
    BButton
  },
  data() {
    return {
      query: {
        city: '',
        country: null,
      },
      countries: [{ text: 'Select a country', value: null }, ...countryOptions],
      valid: false
    }
  },
}
</script>
