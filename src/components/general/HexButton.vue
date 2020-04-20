<template>
  <button class="hex-btn" @click="$emit('click')">
    <div class="centered">
      <span><slot></slot></span>
    </div>
    <svg viewBox="0 0 81 94" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M80.0001 69.9143V24.0857L40.5 1.15627L1.00006 24.0857V69.9143L40.5 92.8437L80.0001 69.9143Z"
        stroke-width="2"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HexButton extends Vue {}
</script>

<style lang="scss">
.hex-btn {
  position: relative;
  background-color: transparent;
  border: none;
  width: 63px;
  padding: 0;
  -webkit-appearance: none;
  svg {
    width: 100%;
    stroke: $white;
  }
  cursor: pointer;
  &:hover {
    svg {
      stroke: $activity;
    }
  }
  &:focus {
    outline: none;
  }
}
.centered {
  position: absolute;
  display: flex;
  color: $white;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
