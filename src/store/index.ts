import { Quest } from "./../types";
import Vue from "vue";
import Vuex, { Store } from "vuex";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

Vue.use(Vuex);
interface StateInterface {
  adventureGroupId: number | null;
  selectedQuests: Array<Quest>;
}

export default new Vuex.Store({
  state: {
    adventureGroupId: null,
    selectedQuests: []
  } as StateInterface,
  mutations: {
    addSelectedQuest(state, quest: Quest) {
      state.selectedQuests = [...state.selectedQuests, quest];
    },
    removeSelectedQuest(state, questId: number) {
      state.selectedQuests = state.selectedQuests.filter(
        sq => sq.id != questId
      );
    }
  },
  actions: {},
  modules: {}
});
