<template>
  <div class="tile-grid" :class="position">
    <div class="tile-grid__row" v-for="(row, key) in tileArray" :key="key">
      <div class="tile-grid__itm" v-for="(itm, key) in row" :key="key">
        <CategoryTile :catID="catID" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import CategoryTile from "@/components/icons/CategoryTile.vue";
import { getCatArray } from "../../utility/categories";
import { CatItem, TilePosition } from "../../types";

@Component({
  components: {
    CategoryTile
  }
})
export default class RandomTileGrid extends Vue {
  //@Prop() private catID!: number;
  @Prop({ type: Array, default: getCatArray }) private cats!: CatItem[];
  @Prop({ type: String, default: "top-right" }) private position!: TilePosition;

  private tileArray: number[] = [];
  private catID = 0;

  initTileGrid() {
    const tiles = [];
    const rows = Math.round(2 + Math.random());
    console.log(rows);

    for (let i = 0; i < rows; i++) {
      const cols = Math.round(1 + Math.random());
      tiles.push(cols);
      console.log(cols);
    }
    this.tileArray = tiles;
  }

  setRandomCatID() {
    const key: number = Math.floor(1 + Math.random() * this.cats.length);
    this.catID = key;
  }

  mounted() {
    console.log("mounting");
    this.initTileGrid();
    this.setRandomCatID();
  }
}
</script>

<style lang="scss">
.tile-grid {
  width: 300px;
  transform: scale(0.7);
  position: absolute;
  &.top-right {
    top: -20%;
    right: -5%;
  }
  &.bottom-left {
    left: -5%;
    bottom: -20%;
  }

  &__row {
    display: flex;
    width: 100%;
    margin-bottom: -16.5%;
    &:nth-child(2n) {
      svg {
        transform: translateX(50%);
      }
    }
  }
}
</style>
