<template>
  <div class="filter-bar">
    <div class="columns">
      <div class="column is-offset-one-quarter is-one-quarter">
        <div class="control" v-if="typeof value.searchString != 'undefined'">
          <input
            class="input is-inverted"
            type="text"
            v-model="value.searchString"
            placeholder="Suche"
          />
        </div>
      </div>
      <div class="column is-one-quarter">
        <div v-if="typeof value.category != 'undefined'" class="field">
          <div class="control is-pulled-right">
            <div class="select is-inverted">
              <select v-model="value.category">
                <option selected disabled value>Kategorie</option>
                <option value>Alle Anzeigen</option>
                <option v-for="cat in cats" :value="cat.id" :key="cat.id">{{
                  cat.name
                }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { QuestFilter, CatItem } from "@/types";
import { getCatArray } from "@/utility/categories";

@Component
export default class FilterBar extends Vue {
  @Prop() private value!: QuestFilter;
  @Prop({
    default: getCatArray
  })
  private cats!: Array<CatItem>;

  @Watch("value")
  valChanged(newVal: QuestFilter) {
    this.$emit("input", newVal);
  }
}
</script>

<style lang="scss" scoped>
.filter-bar {
  padding-bottom: 3rem;
}
</style>
