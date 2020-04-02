<template>
  <div>
    <section class="section is-centered">
      <h1 class="title">Tages Report</h1>
      <br />
      <h2 class="subtitle">Mal schauen, wie {{ teamName }} sich heute geschlagen hat</h2>
    </section>
    <section class="section">
      <!-- TODO: find a good solution dor showing/submiting the user points -->
      <MemberForm name="test" />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import MemberForm from "@/components/scorereport/MemberForm.vue";

@Component({
  name: "ScoreReport",
  components: { MemberForm }
})
export default class ScoreReport extends Vue {
  @Prop() private test!: string;
}
</script>