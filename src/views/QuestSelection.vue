<template>
  <div>
    <section class="section is-centered">
      <h1 class="title">Quests - Übersicht</h1>
      <br />
      <h2 class="subtitle">Wähle deine Quests durch anklicken aus.</h2>
    </section>
    <section>
      <div class="quest-select columns">
        <div class="column is-one-third">
          <SelectedQuestList></SelectedQuestList>
        </div>
        <div class="column is-two-thirds">
          <QuestList></QuestList>
          <div>
            <button class="button inverted outlined" @click="showModal = true">
              Neues Quest hinzufügen
            </button>
          </div>
        </div>
        <Modal v-if="showModal" @closeModal="closeModal">
          <AddQuest />
        </Modal>
      </div>
    </section>
  </div>
</template>

<script>
import QuestList from "@/components/quests/QuestList";
import SelectedQuestList from "@/components/quests/SelectedQuestList";
import AddQuest from "@/components/quests/AddQuest";
import Modal from "@/components/general/Modal.vue";

export default {
  components: {
    QuestList,
    SelectedQuestList,
    AddQuest,
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
