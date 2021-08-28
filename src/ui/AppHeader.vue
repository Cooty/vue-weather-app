<template>
  <b-navbar
    :sticky="true"
    type="light"
    :variant="isLightTheme ? 'light' : 'secondary'"
    class="shadow-sm"
  >
    <b-container fluid="lg">
      <b-row
        align-h="between"
        class="w-100 no-gutters"
      >
        <b-col
          class="flex-1"
          cols="auto"
        >
          <slot name="left" />
        </b-col>
        <b-col
          class="d-flex justify-content-end pl-md-5"
          cols="auto"
        >
          <div
            class="right-slot p-2 p-md-0 d-flex"
            :class="{
              'bg-light': isLightTheme,
              'bg-secondary': !isLightTheme,
            }"
          >
            <slot name="right" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-navbar>
</template>

<script>
import {
  BNavbar,
  BContainer,
  BRow,
  BCol
} from 'bootstrap-vue'
import store from '../infrastructure/store'

export default {
  name: 'AppHeader',
  components: {
    BNavbar,
    BContainer,
    BRow,
    BCol
  },
  data() {
    return {
      appState: store.state
    }
  },
  computed: {
    isLightTheme() {
      return this.appState.theme === 'light'
    }
  }
}
</script>

<style scoped>

.flex-1 {
  flex: 1;
}

.right-slot {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

@media screen and (min-width: 768px) {
  .right-slot {
    position: relative;
    bottom: auto;
    left: auto;
    right: auto;
    box-shadow: none;
  }
}

</style>