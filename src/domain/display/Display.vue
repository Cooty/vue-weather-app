<template>
  <wrapper>
    <b-card
      tag="article"
      class="shadow"
    >
      <text-row :bold="true">
        The weather for Burgas (BG) is:
      </text-row>
      <div class="d-flex flex-nowrap justify-content-between">
        <h1 class="h2">
          24°C
        </h1>
        <div>
          <b-badge variant="info">few clouds</b-badge>
        </div>
      </div>
      <text-row>
        feels like 21°C
      </text-row>
      <divider />
      <text-row :muted="true">
        <b-icon-thermometer/> min 10°C / <b-icon-thermometer-half/> max 26°C
      </text-row>
      <text-row :muted="true">
        Humidity: 69%
      </text-row>
      <text-row :muted="true">
        Pressure: 1011hPa
      </text-row>
    </b-card>
  </wrapper>
</template>

<script>
import Wrapper from '../../ui/Wrapper.vue'
import {BCard, BBadge, BIconThermometer, BIconThermometerHalf} from 'bootstrap-vue'
import TextRow from '../../ui/TextRow.vue';
import Divider from '../../ui/Divider.vue';

export default {
  name: 'Display',
  components: {
    Wrapper,
    BCard,
    TextRow,
    Divider,
    BBadge,
    BIconThermometer,
    BIconThermometerHalf
  }
}
</script>
