<template>
  <div>
    <label class="label">Wie heißt dein Teammitglied?</label>
    <div class="control">
      <input class="input" type="text" v-model="name" />
    </div>
    <label class="label">Eigenschaften</label>
    <span
      v-for="(tag, index) in tags"
      :key="index"
      :class="['tag', 'is-medium', isSelected(tag) ? 'is-primary' : '']"
      @click="addAttribute(tag)"
    >
      {{ tag }}
    </span>
    <div class="control">
      <button class="button is-small" @click="add">Hinzufügen</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Member } from "@/types";

@Component
export default class AddMember extends Vue {
  name = "";
  attributes: string[] = [];
  teamMembers: Member[] = [];
  tags: string[] = [
    "Sportskanone",
    "Witzbold",
    "Ruhepol",
    "Braucht Ruhe",
    "Muss arbeiten",
    "Kocht gerne",
    "Treibt viel Sport"
  ];

  addAttribute(attribute: string) {
    if (this.attributes.includes(attribute)) {
      return;
    }
    this.attributes.push(attribute);
  }

  add() {
    if (this.name === "") return;
    const member: Member = {
      name: this.name,
      attributes: this.attributes
    };
    this.teamMembers.push(member);
    this.name = "";
    this.attributes = [];
    this.$emit("input", this.teamMembers);
  }

  isSelected(tag: string) {
    return this.attributes.includes(tag);
  }
}
</script>
