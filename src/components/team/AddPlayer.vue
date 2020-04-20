<template>
  <div>
    <label class="label">Wie heißt dein Teammitglied?</label>
    <div class="control">
      <input class="input" type="text" v-model="memberName" />
    </div>
    <br />
    <label class="label">Welche Eigenschaften hat {{ memberName }}?</label>
    <div class="tags">
      <span
        v-for="(attribute, index) in playerAttributes"
        :key="index"
        :class="['tag', 'is-medium', isSelected(attribute) ? 'is-primary' : '']"
        @click="addAttribute(attribute)"
        >{{ attribute.name }}</span
      >
    </div>
    <div class="control">
      <button class="button is-inverted is-outlined" @click="addMember">
        Teammitglied hinzufügen
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Player, PlayerAttribute } from "@/types";
import { TeamModule } from "@/store/modules/team";

@Component
export default class AddMember extends Vue {
  memberName = "";
  memberAttributes: PlayerAttribute[] = [];
  teamMembers: Player[] = [];

  mounted() {
    try {
      TeamModule.fetchPlayerAttributes();
    } catch (error) {
      console.log(error);
    }
  }

  get playerAttributes(): PlayerAttribute[] {
    return TeamModule.playerAttributes;
  }

  attributeExists(attribute: PlayerAttribute) {
    return this.memberAttributes.find(_attribute => {
      return _attribute.name === attribute.name;
    });
  }

  addAttribute(attribute: PlayerAttribute) {
    if (this.attributeExists(attribute)) {
      return;
    }
    this.memberAttributes.push(attribute);
  }

  addMember() {
    if (this.memberName === "") return;

    const member: Player = {
      name: this.memberName,
      attributes: this.memberAttributes
    };

    this.teamMembers.push(member);
    this.memberName = "";
    this.memberAttributes = [];
    this.$emit("input", this.teamMembers);
  }

  isSelected(attribute: PlayerAttribute) {
    return this.memberAttributes.find(_attribute => {
      return _attribute.name === attribute.name;
    });
  }
}
</script>

<style scoped lang="scss">
.tag {
  cursor: pointer;
}
</style>
