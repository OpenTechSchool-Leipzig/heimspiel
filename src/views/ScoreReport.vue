<template>
  <div>
    <section class="section is-centered">
      <h1 class="title">Tages Report</h1>
      <br />
      <h2 class="subtitle">Mal schauen, wie {{team.name}} sich heute geschlagen hat</h2>
    </section>
    <section class="section"></section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import QuestCard from "@/components/quests/QuestCard.vue";
import { Quest } from "@/types";

@Component({})
export default class Dashboard extends Vue {}
</script>