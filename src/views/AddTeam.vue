<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half">
          <h1 class="title">Neues Team anlegen</h1>
          <form>
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
                      class="tag pointer is-small"
                      >{{ tag }}</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <br />

            <div class="control has-text-centered">
              <button class="button is-info is-medium" disabled>
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
import { Member } from "@/types";

@Component({ components: { AddMember } })
export default class AddTeam extends Vue {
  teamMembers: Member[] = [];
  teamName = "";
}
</script>

<style lang="scss">
.tag.pointer {
  cursor: pointer;
}
</style>
