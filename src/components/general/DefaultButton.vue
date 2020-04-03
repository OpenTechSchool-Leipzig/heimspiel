<template>
  <router-link v-if="target" to="target" class="button">
    <slot></slot>
  </router-link>
  <button v-else class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class DefaultButton extends Vue {
  @Prop() private target!: boolean | null;
}
</script>

<style lang="scss">
// adjust top padding to center font
.button {
  padding-top: 0.6em;
}
</style>
