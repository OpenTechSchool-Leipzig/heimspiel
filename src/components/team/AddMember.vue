<template>
  <div>
    <label class="label">Wie heißt dein Teammitglied?</label>
    <div class="control">
      <input class="input" type="text" v-model="name" />
    </div>
    <br />
    <label class="label">Welche Eigenschaften hat {{ name }}?</label>
    <div class="tags">
      <span
        v-for="(tag, index) in tags"
        :key="index"
        :class="['tag', 'is-medium', isSelected(tag) ? 'is-primary' : '']"
        @click="addAttribute(tag)"
      >
        {{ tag }}
      </span>
    </div>
    <div class="control">
      <button class="button is-inverted is-outlined" @click="add">
        Weitere Mitglieder hinzufügen
      </button>
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

<style scoped lang="scss">
.tag {
  cursor: pointer;
}
</style>
