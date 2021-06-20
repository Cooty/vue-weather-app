<template>
  <b-container
    fluid="md"
    class="h-100"
  >
    <b-row class="justify-content-center align-items-center h-100">
      <b-col
        cols="12"
        sm="10"
        md="8"
        lg="6"
        xl="4"
      >
        <slot />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BContainer, BRow, BCol } from 'bootstrap-vue'

export default {
  name: 'Wrapper',
  components: {
    BContainer,
    BRow,
    BCol
  }
}
</script>
