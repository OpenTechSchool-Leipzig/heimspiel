<template>
  <div class="attribute-input">
    <CategoryTile :catID="id" :isSmall="true" />
    <span>{{ name }}</span>
    <div class="control">
      <input class="input" type="number" v-model="value" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import CategoryTile from "@/components/icons/CategoryTile.vue";

@Component({
  components: {
    CategoryTile
  }
})
export default class CatInput extends Vue {
  @Prop() private value!: number;
  @Prop() private id!: number;
  @Prop() private name!: string;
}
</script>