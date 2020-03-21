<template>
  <ul class="columns list">
    <QuestCard
      v-for="quest in openQuests"
      :quest="quest"
      :key="quest.id"
      @click="selectQuest(quest)"
    ></QuestCard>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Quest } from "@/types";
import QuestCard from "./QuestCard.vue";
import { Mutation, State } from "vuex-class";

@Component({
  components: {
    QuestCard
  }
})
export default class QuestList extends Vue {
  @Mutation public addSelectedQuest!: (quest: Quest) => void;
  @State public selectedQuests!: Array<Quest>;

  // TODO: fetch quests from API
  private quests: Array<Quest> = [
    {
      id: 0,
      title: "Müll rausbringen",
      category: 1,
      text:
        "Das übelrichende Müllmonster hat wieder zugeschlagen, bringe es schnell raus, bevor es schlimemr wird.. oder anfängt wegzulaufen!",
      flavorText: "sorgt dafür, dass die Wohnung sauber bleibt.",
      score: 5,
      imageURL: ""
    },
    {
      id: 1,
      title: "Home Office",
      category: 3,
      text:
        "Das tägliche Übel des Broterwerbs... na hoffentlich machts auch Spaß!",
      flavorText: "",
      score: 15,
      imageURL: ""
    }
  ];

  get selectedQuestIds(): Array<number> {
    return this.selectedQuests.map(q => q.id);
  }

  get openQuests(): Array<Quest> {
    return this.quests.filter(q => !this.selectedQuestIds.includes(q.id));
  }

  selectQuest(quest: Quest) {
    this.addSelectedQuest(quest);
  }
}
</script>

<style></style>
