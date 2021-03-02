<template>
  <div ref="root" class="el-affix" :style="rootStyle">
    <div :class="{ 'el-affix--fixed': state.fixed }" :style="affixStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ElAffix",
  props: {},
  setup() {
    console.log("affix");
    // init here
    return {};
  }
});
</script>
<style scoped></style>
