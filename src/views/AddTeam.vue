<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half">
          <h1 class="title">Neues Team anlegen</h1>
          <form v-on:submit.prevent>
            <div class="field">
              <label class="label">Wie heißt dein Team?</label>
              <div class="control">
                <input class="input" type="text" v-model="teamName" />
              </div>
            </div>
            <br />
            <br />

            <add-member v-model="teamMembers" />

            <br />
            <br />
            <hr />
            <br />

            <h2 class="subtitle">
              Dein Team heißt:
              <strong>{{ teamName }}</strong>
            </h2>

            <h2 class="subtitle">Deine Teammitglieder sind:</h2>
            <div class="columns is-multiline">
              <div
                v-for="(member, index) in teamMembers"
                :key="index"
                class="column is-half"
              >
                <div class="box">
                  <p class="title is-6">{{ member.name }}</p>
                  <div class="tags">
                    <span
                      v-for="(attribute, index) in member.attributes"
                      :key="index"
                      class="tag is-small"
                      >{{ attribute.name }}</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <br />

            <div class="control has-text-centered">
              <button
                :class="[
                  'button',
                  'is-info',
                  'is-medium',
                  isLoading ? 'is-loading' : ''
                ]"
                :disabled="disabled"
                @click="addTeam"
              >
                Fertig!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddPlayer from "@/components/team/AddPlayer.vue";
import { Player } from "@/types";
import { TeamModule } from "@/store/modules/team";

@Component({ components: { AddPlayer } })
export default class AddTeam extends Vue {
  teamMembers: Player[] = [];
  teamName = "";
  isLoading = false;

  get disabled() {
    return this.teamName.trim() === "" || this.teamMembers.length < 1;
  }

  async addTeam() {
    try {
      this.isLoading = true;
      await TeamModule.createTeam(this.teamName);

      await Promise.all(
        this.teamMembers.map(async member => {
          return await TeamModule.createPlayer({
            name: member.name,
            attributes: member.attributes
          });
        })
      );

      this.$router.push({
        path: `/dashboard/${TeamModule.team.token}`
      });
    } catch (error) {
      console.log(error);
    }
    this.isLoading = false;
  }
}
</script>

<style scoped lang="scss">
hr {
  background-color: $white;
}
.box {
  background-color: $white;

  .title {
    color: $background;
  }
}
</style>
