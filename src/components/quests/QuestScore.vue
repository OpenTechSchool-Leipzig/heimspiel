<template>
  <div class="score-wrapper">
    <span class="score">{{ score }}</span>
    <svg
      class="score-icon"
      :class="'category-' + categoryId"
      viewBox="0 0 34 29"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 0L33.4545 28.5H0.545517L17 0Z" />
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Categories } from "@/types";

@Component
export default class QuestScore extends Vue {
  @Prop() private score!: number;
  @Prop() private category!: Categories;

  get categoryId() {
    return Categories[this.category];
  }
}
</script>

<style lang="scss" scoped>
.score-wrapper {
  width: 40px;
  display: flex;
  justify-content: center;
  z-index: 0;
  position: relative;
}
.score {
  width: 100%;
  color: $white;
  text-align: center;
}
.score-icon {
  width: 100%;
  position: absolute;
  z-index: -1;
  bottom: 0;
}
</style>
