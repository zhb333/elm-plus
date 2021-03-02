<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ElAffix",
  props: {},
  setup(props) {
    console.log("affix");
    // init here
    return {};
  }
});
</script>
<style scoped></style>
