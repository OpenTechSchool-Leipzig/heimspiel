<template>
  <div v-if="id">
    <section class="section is-centered">
      <h1 class="title">Team - Übersicht</h1>
      <br />
      <h2 class="subtitle">Willkomen zurück, Team {{ teamName }}!</h2>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-quarter has-text-left">
            <article class="panel is-primary">
              <p class="panel-heading">
                Team Members
              </p>
              <div
                v-for="(player, index) in players"
                :key="index"
                class="panel-block"
              >
                <p>{{ player.name }}</p>
              </div>
            </article>

            <br />
            <br />
            <router-link :to="`/scores/${id}`" class="button"
              >Tag beenden</router-link
            >
            <br />
            <br />
            <router-link to="/quests" class="button"
              >Quests browsen</router-link
            >
          </div>
          <div class="column">
            <h2
              class="subtitle has-text-primary is-uppercase has-text-weight-semibold"
            >
              Deine Quests für heute
            </h2>
            <progress class="progress is-primary" value="15" max="100"
              >15%</progress
            >

            <div class="columns is-multiline">
              <div
                v-for="quest in quests"
                :key="quest.id"
                class="column is-one-quarter"
              >
                <QuestCard :quest="quest"></QuestCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import QuestCard from "@/components/quests/QuestCard.vue";
import { TeamModule } from "@/store/modules/team";
import { Quest } from "@/types";

@Component({
  name: "dashboard",
  components: { QuestCard }
})
export default class Dashboard extends Vue {
  private quests: Array<Quest> = [
    {
      id: 0,
      title: "Müll rausbringen",
      category: {
        title: "Haushalt",
        id: 4
      },
      text:
        "Das übelrichende Müllmonster hat wieder zugeschlagen, bringe es schnell raus, bevor es schlimemr wird.. oder anfängt wegzulaufen!",
      flavorText: "sorgt dafür, dass die Wohnung sauber bleibt.",
      score: 5,
      image: ""
    },
    {
      id: 1,
      title: "Home Office",
      category: {
        title: "Produktivität",
        id: 3
      },
      text:
        "Das tägliche Übel des Broterwerbs... na hoffentlich machts auch Spaß!",
      flavorText: "",
      score: 15,
      image: ""
    }
  ];

  async mounted() {
    if (!this.$router.currentRoute.params.id) {
      console.log("Dashboard not found");
    }
    try {
      await TeamModule.getTeam(this.$router.currentRoute.params.id);
      await TeamModule.getPlayers();
    } catch (error) {
      console.log(error);
    }
  }

  get id() {
    return this.$router.currentRoute.params.id;
  }

  get teamName() {
    return TeamModule.team.name;
  }

  get players() {
    return TeamModule.players;
  }
}
</script>
