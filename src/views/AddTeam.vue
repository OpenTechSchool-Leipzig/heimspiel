<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Neues Team anlegen</h1>
      <form>
        <div class="field">
          <label class="label">Wie heißt dein Team?</label>
          <div class="control">
            <input class="input" type="text" />
          </div>
        </div>

        <h2 class="subtitle">Deine Teammitglieder:</h2>
        <div v-for="(member, index) in teamMembers" :key="index" class="card">
          <div class="card-content">
            <p class="title is-4">{{ member.name }}</p>
            <span
              v-for="(tag, index) in member.attributes"
              :key="index"
              class="tag is-small"
              >{{ tag }}</span
            >
          </div>
        </div>

        <add-member v-model="teamMembers" />

        <br />

        <div class="control">
          <button class="button is-link">Fertig</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddMember from '@/components/team/AddMember.vue';

@Component({ components: { AddMember } })
export default class AddTeam extends Vue {
  teamMembers: Array = [];
}
</script>
