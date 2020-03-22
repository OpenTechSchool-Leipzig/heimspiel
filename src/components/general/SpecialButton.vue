<template>
  <router-link
    v-if="hasTarget"
    :to="target"
    class="button is-large is-special"
    :class="activeColorClass"
  >
    <slot></slot>
  </router-link>
  <button v-else class="button is-large is-special" :class="activeColorClass">
    <slot></slot>
  </button>
</template>

<script lang="ts">
// TODO: special Button für die Welcome Page
// Ich dachte vielleicht wechselt er randomly die farbe durch alle Kategorie farben
import { Component, Vue, Prop } from "vue-property-decorator";
import { CatItem } from "../../types";
import { getCatArray } from "../../utility/categories";

@Component
export default class SpecialButton extends Vue {
  @Prop({ type: Array, default: getCatArray }) private cats!: CatItem[];
  @Prop({ type: String, default: "" }) public target!: string;
  private activeColorId = 1;

  get activeColorClass(): string {
    return "color-" + this.activeColorId;
  }

  get hasTarget() {
    return this.target !== "";
  }

  setRandomColor(lastID: number) {
    const key: number = Math.floor(1 + Math.random() * this.cats.length);
    if (key !== lastID) {
      this.activeColorId = key;
    } else {
      this.setRandomColor(key);
    }
  }
  mounted() {
    setInterval(() => this.setRandomColor(this.activeColorId), 5000);
  }
}
</script>

<style lang="scss" scoped>
.button.is-special {
  color: $background;
  border: $background;
  transition: all 0.5s ease;
  &:hover {
    opacity: 0.8;
  }
}
.color-1 {
  background-color: $productivity;
}
.color-2 {
  background-color: $health;
}
.color-3 {
  background-color: $calm;
}
.color-4 {
  background-color: $household;
}
.color-5 {
  background-color: $social;
}
.color-6 {
  background-color: $activity;
}
</style>
