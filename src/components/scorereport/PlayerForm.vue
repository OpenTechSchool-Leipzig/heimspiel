<template>
  <form class="player-form">
    <template v-for="cat in cats">
      <CatInput
        :id="cat.id"
        :name="cat.name"
        :key="cat.id"
        v-model.number="value[cat.id]"
      />
    </template>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import CatInput from "@/components/scorereport/CatInput.vue";

import { getCatArray } from "@/utility/categories";
import { CatItem } from "../../types";

@Component({
  components: { CatInput }
})
export default class PlayerForm extends Vue {
  @Prop({
    default: getCatArray
  })
  private cats!: Array<CatItem>;

  @Prop() private value!: any; // create a usefull type for playerpoints?

  @Watch("value")
  valChanged(newVal: any) {
    console.log(newVal);
    this.$emit("input", newVal);
  }
}
</script>
