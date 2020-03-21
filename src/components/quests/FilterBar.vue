<template>
  <div class="filter-body">
    <div class="level is-mobile">
      <div class="level-left">
        <div class="control" v-if="typeof value.searchString != 'undefined'">
          <input class="input" type="text" v-model="value.searchString" placeholder="Suche" />
        </div>
        <div v-if="typeof value.category != 'undefined'" class="field">
          <div class="control">
            <div class="select">
              <select v-model="value.category">
                <option selected disabled value>Select poll state</option>
                <option value>Alle Anzeigen</option>
                <option v-for="cat in cats" :value="cat.id" :key="cat.id">{{cat.name}}</option>
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
import { QuestFilter, CatItem } from "../../types";
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
.filter-body {
  padding: 0.75rem;
}
</style>
