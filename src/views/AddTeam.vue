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
            <br /><br />

            <add-member v-model="teamMembers" />

            <br />
            <br />
            <hr />
            <br />

            <h2 class="subtitle">
              Dein Team heißt: <strong>{{ teamName }}</strong>
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
                      v-for="(tag, index) in member.attributes"
                      :key="index"
                      class="tag is-small"
                      >{{ tag }}</span
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
                @click="add"
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
import AddMember from "@/components/team/AddMember.vue";
import { Member, Team } from "@/types";
import { Action } from "vuex-class";

@Component({ components: { AddMember } })
export default class AddTeam extends Vue {
  @Action public createTeam!: (team: Team) => void;

  teamMembers: Member[] = [];
  teamName = "";
  isLoading = false;

  get disabled() {
    return this.teamName.trim() === "" || this.teamMembers.length < 1;
  }

  async add() {
    try {
      this.isLoading = true;
      await this.createTeam({ name: this.teamName, members: this.teamMembers });
      this.$router.push("/quests");
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
