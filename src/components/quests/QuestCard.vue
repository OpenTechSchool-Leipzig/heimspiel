<template>
  <li class="column quest-card" @click="$emit('click')">
    <div class="quest-card-top">
      <h3>{{quest.title}}</h3>
      <span class="symbol" :class="iconClass">{{quest.score}}</span>
    </div>
    <div class="quest-card-img">
      <img :src="quest.url" />
    </div>
    <div class="quest-card-text">
      <p class="text">{{quest.text}}</p>
      <p class="flavor-text">{{quest.flavorText}}</p>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Quest } from "@/types";

@Component
export default class QuestCard extends Vue {
  // TODO: fetch quests from API
  @Prop() private quest!: Quest;
  get iconClass(): string {
    return `symbol-${this.quest.category}`;
  }
}
</script>
