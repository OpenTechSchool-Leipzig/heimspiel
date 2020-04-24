<template>
  <div>
    <FilterBar v-model="filter"></FilterBar>
    <p class="quests-count">
      Du hast {{ selectedQuestsCount }} Quests ausgewählt
    </p>
    <ul class="columns is-centered is-multiline">
      <QuestCard
        v-for="quest in filteredQuest"
        :quest="quest"
        :key="quest.id"
        @click="onClick"
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

  get filteredQuest(): Array<Quest> {
    if (this.quests && this.quests.length > 0) {
      return this.quests.filter(
        q =>
          q.text.toLowerCase().match(this.filter.searchString.toLowerCase()) &&
          (!this.filter.category ||
            Categories[q.category] === this.filter.category)
      );
    }
    return [];
  }

  get selectedQuestIds(): Array<number> {
    return QuestsModule.selectedQuests.map(q => q.id);
  }

  get selectedQuestsCount(): number {
    return this.selectedQuestIds.length;
  }

  onClick(quest: Quest) {
    if (this.selectedQuestIds.includes(quest.id)) {
      QuestsModule.removeSelectedQuest(quest.id);
    } else {
      QuestsModule.addSelectedQuest(quest);
    }
  }
}
</script>

<style lang="scss" scoped>
.quests-count {
  margin-bottom: 4rem;
}
</style>
