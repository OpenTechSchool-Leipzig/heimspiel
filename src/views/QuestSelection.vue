<template>
  <div class="container">
    <section class="section is-centered">
      <h1 class="title">Quests - Übersicht</h1>
      <br />
      <h2 class="subtitle">Wähle deine Quests durch anklicken aus.</h2>
    </section>
    <section class="section is-centered">
      <QuestList></QuestList>
    </section>
    <section class="section is-centered">
      <button class="button is-inverted is-outlined" @click="showModal = true">
        Neues Quest hinzufügen
      </button>
    </section>

    <Modal v-if="showModal" @closeModal="closeModal">
      <AddQuest />
    </Modal>
  </div>
</template>

<script>
import QuestList from "@/components/quests/QuestList";
import AddQuest from "@/components/quests/AddQuest";
import Modal from "@/components/general/Modal.vue";

export default {
  components: {
    QuestList,
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
