<template>
  <b-container fluid="md">
    <b-row class="justify-content-center align-items-center">
      <b-col cols="12" xl="9">
        <slot />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Wrapper",
};
</script>
