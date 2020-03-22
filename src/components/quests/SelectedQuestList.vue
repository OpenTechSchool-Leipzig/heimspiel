<template>
  <ul class="selected-questions">
    <QuestCard
      v-for="quest in selectedQuests"
      :quest="quest"
      :key="quest.id"
      @click="deSelectQuest(quest.id)"
    ></QuestCard>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import QuestCard from "./QuestCard.vue";
import { State, Mutation } from "vuex-class";
import { Quest } from "../../types";

@Component({
  components: {
    QuestCard
  }
})
export default class SelectedQuestList extends Vue {
  @State public selectedQuests!: Array<Quest>;
  @Mutation public removeSelectedQuest!: (questID: number) => void;

  deSelectQuest(questID: number) {
    this.removeSelectedQuest(questID);
  }
}
</script>

<style></style>
