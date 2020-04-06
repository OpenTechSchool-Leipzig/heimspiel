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
import { Component, Vue } from "vue-property-decorator";
import QuestCard from "@/components/quests/QuestCard.vue";
import { QuestsModule } from "@/store/modules/quests";

@Component({
  components: {
    QuestCard
  }
})
export default class SelectedQuestList extends Vue {
  deSelectQuest(questID: number) {
    QuestsModule.removeSelectedQuest(questID);
  }

  get selectedQuests() {
    return QuestsModule.selectedQuests;
  }
}
</script>

<style></style>
