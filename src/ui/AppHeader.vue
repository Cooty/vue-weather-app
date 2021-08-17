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
          class="d-flex justify-content-end position-relative pl-5"
          cols="auto"
        >
          <button
            class="right-slot-toggler-lt-md d-md-none h4 mb-0 text-secondary"
            :class="isLightTheme ? 'text-secondary' : 'text-light'"
            @click="toggle"
          >
            <template v-if="appState.isRightSectionOpened">
              <b-icon-x />
            </template>
            <template v-else>
              <b-icon-gear />
            </template>
          </button>
          <div
            class="right-slot p-2 p-md-0 rounded d-md-flex"
            :class="{
              'opened': appState.isRightSectionOpened,
              'bg-white': isLightTheme,
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
  BCol,
  BIconGear,
  BIconX
} from 'bootstrap-vue'
import store from '../infrastructure/store'

export default {
  name: 'AppHeader',
  components: {
    BNavbar,
    BContainer,
    BRow,
    BCol,
    BIconGear,
    BIconX
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
  },
  methods: {
    toggle() {
      store.setIsRightSectionOpened(!this.appState.isRightSectionOpened)
    }
  }
}
</script>

<style scoped>

.flex-1 {
  flex: 1;
}

.right-slot-toggler-lt-md {
  border: 0;
  padding: 0;
  cursor: pointer;
  background: none;
}

.right-slot {
  display: none;
  position: absolute;
  top: calc(100% + 1rem);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  min-width: 180px;
}

@media screen and (max-width: 767px) {
  .right-slot.opened {
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.125)
  }
}

@media screen and (min-width: 768px) {
  .right-slot {
    position: relative;
    top: auto;
    background: none;
    box-shadow: none;
    min-width: 0;
  }
}

</style>