<template>
  <form class>
    <span>{{ name }}</span>
    <div class="list-headline">
      <span>Kategorie</span>
      <span>Punkte</span>
    </div>
    <template v-for="cat in cats">
      <CatInput :id="cat.id" :name="cat.name" :key="cat.id" />
    </template>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import CatInput from "@/components/scorereport/CatInput.vue";

import { getCatArray } from "@/utility/categories";
import { CatItem } from "../../types";

@Component({
  components: { CatInput }
})
export default class MemberForm extends Vue {
  @Prop({
    default: getCatArray
  })
  private cats!: Array<CatItem>;
}
</script>
