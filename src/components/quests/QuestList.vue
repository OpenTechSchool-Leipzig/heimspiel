<template>
  <div>
    <FilterBar v-model="filter"></FilterBar>
    <ul class="columns is-multiline">
      <QuestCard
        v-for="quest in filteredQuest"
        :quest="quest"
        :key="quest.id"
        @click="selectQuest(quest)"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Categories, Quest, QuestFilter } from "@/types";
import QuestCard from "./QuestCard.vue";
import FilterBar from "./FilterBar.vue";
import { QuestsModule } from "@/store/modules/quests";

@Component({
  components: {
    QuestCard,
    FilterBar
  }
})
export default class QuestList extends Vue {
  private filter: QuestFilter = {
    category: null,
    searchString: ""
  };

  mounted() {
    try {
      QuestsModule.fetchQuests();
    } catch (error) {
      console.log(error);
    }
  }

  get quests() {
    return QuestsModule.quests;
  }

  get selectedQuestIds(): Array<number> {
    return QuestsModule.selectedQuests.map(q => q.id);
  }

  get openQuests(): Array<Quest> {
    return this.quests.filter(q => !this.selectedQuestIds.includes(q.id));
  }

  get filteredQuest(): Array<Quest> {
    if (this.openQuests && this.openQuests.length > 0) {
      return this.openQuests.filter(
        q =>
          q.text.toLowerCase().match(this.filter.searchString.toLowerCase()) &&
          (!this.filter.category ||
            Categories[q.category] === this.filter.category)
      );
    }
    return [];
  }

  selectQuest(quest: Quest) {
    QuestsModule.addSelectedQuest(quest);
  }
}
</script>

<style></style>
