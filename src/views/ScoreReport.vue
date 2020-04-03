<template>
  <div>
    <section class="section is-centered">
      <h1 class="title">Tages Report</h1>
      <br />
      <h2 class="subtitle">Mal schauen, wie {{ teamName }} sich heute geschlagen hat</h2>
    </section>
    <section class="section">
      <div class="player-list">
        <span
          v-for="(player, key) in players"
          :key="key"
          :class="{ active: key === activePlayerKey }"
        >{{ player.name }}</span>
      </div>
      <span>{{ activePlayer.name }}</span>
      <div class="list-headline">
        <span>Kategorie</span>
        <span>Punkte</span>
      </div>
      <PlayerForm name="test" v-model="activePlayer.points" />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PlayerForm from "@/components/scorereport/PlayerForm.vue";

@Component({
  name: "ScoreReport",
  components: { PlayerForm }
})
export default class ScoreReport extends Vue {
  activePlayerKey = 0;
  //TODO: get teamname and players from store
  teamName = "test";
  players = [{ name: "Klaus" }, { name: "Test" }];
  get activePlayer() {
    // get active Player from List
    return {
      name: "Klaus",
      points: {
        1: 2,
        3: 4
      }
    };
  }
  // I guess i should build the points-obj in the mounted hook?
  // how are the currently stored in the backend?
}
</script>