<template>
  <div class="quest-select columns">
    <div class="column is-one-third">
      <SelectedQuestList></SelectedQuestList>
    </div>
    <div class="column is-two-thirds">
      <QuestList></QuestList>
    </div>
  </div>
</template>

<script>
import QuestList from "@/components/quests/QuestList";
import SelectedQuestList from "@/components/quests/SelectedQuestList";

export default {
  components: {
    QuestList,
    SelectedQuestList
  }
};
</script>

<style></style>
