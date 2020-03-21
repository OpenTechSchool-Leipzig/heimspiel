<template>
  <div class="quest-select columns">
    <div class="column is-one-third">
      <SelectedQuestList></SelectedQuestList>
    </div>
    <div class="column is-two-thirds">
      <QuestList></QuestList>
      <button class="button inverted outlined" @click="showModal = true">Quest hinzufügen</button>
    </div>
    <Modal v-if="showModal" @closeModal="closeModal">
      <AddQuestion />
    </Modal>
  </div>
</template>

<script>
import QuestList from "@/components/quests/QuestList";
import SelectedQuestList from "@/components/quests/SelectedQuestList";
import AddQuestion from "@/components/quests/AddQuestion";
import Modal from "@/components/general/Modal.vue";

export default {
  components: {
    QuestList,
    SelectedQuestList,
    AddQuestion,
    Modal
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style></style>
