<template>
  <div>
    <FilterBar v-model="filter"></FilterBar>
    <ul class="columns list">
      <QuestCard
        v-for="quest in filteredQuest"
        :quest="quest"
        :key="quest.id"
        @click="selectQuest(quest)"
      ></QuestCard>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Quest, QuestFilter } from "@/types";
import QuestCard from "./QuestCard.vue";
import FilterBar from "./FilterBar.vue";
import { Mutation, State } from "vuex-class";

@Component({
  components: {
    QuestCard,
    FilterBar
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
      category: 4,
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
  private filter: QuestFilter = {
    category: null,
    searchString: ""
  };

  get selectedQuestIds(): Array<number> {
    return this.selectedQuests.map(q => q.id);
  }

  get openQuests(): Array<Quest> {
    return this.quests.filter(q => !this.selectedQuestIds.includes(q.id));
  }

  get filteredQuest(): Array<Quest> {
    if (this.openQuests && this.openQuests.length > 0) {
      return this.openQuests.filter(
        q =>
          q.text.toLowerCase().match(this.filter.searchString.toLowerCase()) &&
          (!this.filter.category || q.category === this.filter.category)
      );
    }
    return [];
  }

  selectQuest(quest: Quest) {
    this.addSelectedQuest(quest);
  }
}
</script>

<style></style>
