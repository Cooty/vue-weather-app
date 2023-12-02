<template>
  <b-navbar
    :sticky="true"
    :variant="isLightTheme ? 'light' : 'secondary'"
    class="app-header shadow-sm"
  >
    <b-container fluid="lg">
      <b-row align-h="between" align-v="center" class="w-100 g-0">
        <b-col class="flex-1" cols="auto">
          <slot name="left" />
        </b-col>
        <b-col class="d-flex justify-content-end pl-lg-5" cols="auto">
          <div
            class="right-slot d-flex"
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
import store from "../infrastructure/store";

export default {
  name: "AppHeader",
  computed: {
    isLightTheme() {
      return store.theme === "light";
    },
  },
};
</script>

<style scoped>
.flex-1 {
  flex: 1;
}

.app-header {
  height: var(--bottom-bar-height);
}

.right-slot {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);
  height: var(--bottom-bar-height);
}

@media screen and (min-width: 1024px) {
  .right-slot {
    position: relative;
    bottom: auto;
    left: auto;
    right: auto;
    box-shadow: none;
    padding: 0;
    height: auto;
  }

  .app-header {
    height: auto;
  }
}
</style>
