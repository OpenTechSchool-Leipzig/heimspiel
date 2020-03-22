<template>
  <div>
    <div class="field">
      <label class="label">Wie soll Eure neue Quest heißen?*</label>
      <div class="control">
        <input class="input" type="text" v-model="title" />
      </div>
    </div>

    <div class="field">
      <label class="label">In welche Kategorie passt sie am besten?*</label>
      <div class="control">
        <div class="select">
          <select v-model="category">
            <option selected disabled value>Select poll state</option>
            <option value>Alle Anzeigen</option>
            <option v-for="cat in cats" :value="cat.id" :key="cat.id">{{cat.name}}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Was ist zu tun?*</label>
      <div class="control">
        <input class="input" type="text" v-model="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">Etwas flavor?</label>
      <div class="control">
        <input class="input" type="text" v-model="flavorText" />
      </div>
    </div>

    <div class="field">
      <label class="label">Ein Bild könnte die Quest aufwerten?</label>
      <div class="control">
        <input class="input" type="text" v-model="imgURL" />
      </div>
    </div>
    <div class="field">
      <label class="label">Wieviele Punkte sollte Sie geben?*</label>
      <div class="control">
        <div class="select">
          <select v-model="score">
            <option selected disabled value>Auswählen</option>
            <option v-for="val in 6" :value="val" :key="val">{{val}}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <DefaultButton @click="add">Hinzufügen</DefaultButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { getCatArray } from "@/utility/categories";
import { CatItem, Categories } from "../../types";

@Component
export default class AddQuest extends Vue {
  @Prop({
    default: getCatArray
  })
  private cats!: Array<CatItem>;
  title = "";
  category: Categories | null = null;
  text = "";
  flavorText = "";
  imgURL = "";
  score = 0;

  add() {
    // TODO: push input to database / store
  }
}
</script>
