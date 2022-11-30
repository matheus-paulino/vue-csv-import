<template>
  <slot name="submit" :submit="submit" :mapped-csv="VueCsvImportData.value">
    <button type="submit" v-bind="$attrs" @click.prevent="submit">
      {{ labels.submitBtn }}
    </button>
  </slot>
</template>

<script>
import { inject } from "vue";

export default {
  name: "VueCsvImportSubmit",

  setup(_, context) {
    const VueCsvImportData = inject("VueCsvImportData");
    const buildMappedCsv = inject("buildMappedCsv");
    const labels = VueCsvImportData.language;

    const submit = function () {
      buildMappedCsv();
      context.emit("submit", VueCsvImportData.value);
    };

    return {
      submit,
      VueCsvImportData,
      labels,
    };
  },
};
</script>
