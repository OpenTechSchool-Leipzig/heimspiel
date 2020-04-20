<template>
  <li class="quest-card" @click="$emit('click')">
    <h3 class="headline">{{ quest.title }}</h3>
    <p class="text">{{ quest.text }}</p>
    <p v-if="quest.flavorText" class="flavor-text">{{ quest.flavorText }}</p>
    <img :src="quest.image" alt="" class="img" />
    <span class="icons">
      <QuestScore :catID="quest.category.id" :score="quest.score"></QuestScore>
    </span>
    <span class="symbol">
      <CategoryTile :catID="quest.category.id" :isSmall="true" />
    </span>
    <!-- TODO: sechseck clippath sollte wahrscheinlich verschoben werden! -->
    <svg height="0" width="0">
      <defs>
        <clipPath id="clip">
          <path
            d="M92 0L0 53.2725V159.727L92 213L184 159.727V53.2725L92 0Z"
            fill="#7DC4F9"
          />
        </clipPath>
      </defs>
    </svg>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Quest } from "@/types";
import CategoryTile from "@/components/icons/CategoryTile.vue";
import QuestScore from "@/components/quests/QuestScore.vue";

@Component({
  components: {
    CategoryTile,
    QuestScore
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
.quest-card {
  width: 280px;
  height: 430px;
  background-color: $white;
  color: $black;
  padding: 2rem 1.4rem 0.7rem 0.7rem;
  text-align: left;
  margin-bottom: 1rem;
  margin-right: 1rem;
  position: relative;
  @include shadow-main;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
    @include shadow-hover;
    z-index: 100;
  }
}
.headline {
  max-width: 90%;
  font-weight: 500;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}
.text {
  font-size: 0.9rem;
}
.flavor-text {
  font-size: 0.9rem;
  position: relative;
  color: $background;
  margin-top: 10px;
  &::before {
    //kleiner strich
    content: "";
    position: absolute;
    width: 10%;
    border-top: 1px solid $black;
    top: -5px;
    left: 0;
  }
}
.img {
  position: absolute;
  left: 0;
  bottom: -53px;
  clip-path: url(#clip);
  width: 184px;
  height: 213px;
  object-fit: cover;
}
.symbol {
  position: absolute;
  top: -18px;
  right: 0;
}
.icons {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
</style>
