<template>
  <li class="column quest-card" @click="$emit('click')">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div>
          <h3 class="title is-4">{{ quest.title }}</h3>
          <span class="symbol">
            <CategoryTile :catID="quest.category.id" :isSmall="true" />
          </span>
        </div>
        <div class="quest-card-img">
          <img :src="quest.url" />
        </div>
        <div class="quest-card-text has-text-left">
          <p class="text">{{ quest.text }}</p>
          <p class="flavor-text">{{ quest.flavorText }}</p>
        </div>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Quest } from "@/types";
import CategoryTile from "@/components/icons/CategoryTile2.vue";

@Component({
  components: {
    CategoryTile
  }
})
export default class QuestCard extends Vue {
  // TODO: fetch quests from API
  @Prop() private quest!: Quest;
  get iconClass(): string {
    return `symbol-${this.quest.category}`;
  }
}
</script>

<style scoped lang="scss">
.card {
  max-width: 250px;
}
</style>
