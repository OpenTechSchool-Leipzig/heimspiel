<template>
  <div>
    <label class="label">Wie soll Eure neue Quest heißen?*</label>
    <div class="control">
      <input class="input" type="text" v-model="title" />
    </div>

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

    <label class="label">Was ist zu tun?*</label>
    <div class="control">
      <input class="input" type="text" v-model="text" />
    </div>
    <label class="label">Etwas flavor?</label>
    <div class="control">
      <input class="input" type="text" v-model="flavorText" />
    </div>
    <label class="label">Ein Bild könnte die Quest aufwerten?</label>
    <div class="control">
      <input class="input" type="text" v-model="imgURL" />
    </div>
    <label class="label">Wieviele Punkte sollte Sie geben?*</label>
    <div class="control">
      <div class="select">
        <select v-model="score">
          <option selected disabled value>Auswählen</option>
          <option v-for="val in [1, 3 , 5 , 10 , 12, 15 ,20]" :value="val" :key="val">{{val}}</option>
        </select>
      </div>
    </div>
    <div class="control">
      <button class="button is-small" @click="add">Hinzufügen</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { getCatArray } from "@/utility/categories";
import { CatItem, Categories } from "../../types";

@Component
export default class AddQuestion extends Vue {
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
