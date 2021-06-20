<template>
  <main class="sticky-footer-container">
    <section class="sticky-footer-content">
      <display />
    </section>
    <section class="sticky-footer-footer">
      <query-form />
    </section>
  </main>
</template>

<script>
import QueryForm from '../domain/query/QueryForm.vue';
import Display from '../domain/display/Display.vue';

export default {
  name: 'App',
  components: {
    QueryForm,
    Display
  }
}
</script>
