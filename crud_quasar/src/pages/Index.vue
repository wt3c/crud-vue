<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">

    <q-field
      icon="people"
      label="Your name"
      helper="Helper"
      :count="10"
    >
      <q-input v-model="product.name" float-label="Input float label"/>
    </q-field>

    <q-field
      icon="flight_takeoff"
      label="Flight"
      helper="Pick the day when you want to go"
    >
      <q-option-group
        type="radio"
        v-model="option"
        :options="[
                { label: 'Monday', value: 'monday' },
                { label: 'Tuesday', value: 'tuesday' },
                { label: 'Friday', value: 'friday' }
                 ]"
      />
    </q-field>

  </q-page>
</template>

<style>
</style>

<script>
import { QInput, QOptionGroup } from 'quasar';

export default {
  name: 'PageIndex',
  components: {
    QInput,
    QOptionGroup
  },

  data () {
    return {
      product: { id: '', name: '' },
      option: ''
    };
  }
};
</script>
