<template>
  <div class="attribute-input">
    <CategoryTile :catID="id" :isSmall="true" />
    <div class="container-right">
      <span :class="'category-' + id">{{ name }}</span>
      <div class="control">
        <input
          class="input"
          :class="'category-' + id"
          type="number"
          :value="value"
          @input="$emit('input', $event.target.value)"
        />
      </div>
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

<style lang="scss" scoped>
.attribute-input {
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  margin: 3rem auto;
}
.container-right {
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  align-items: flex-end;
}
.input {
  max-width: 100px;
}
</style>
