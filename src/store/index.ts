import { Quest, Team } from "./../types";
import Vue from "vue";
import Vuex, { Store } from "vuex";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

Vue.use(Vuex);
interface StateInterface {
  adventureGroupId: number | null;
  selectedQuests: Array<Quest>;
  team: Team | null;
}

export default new Vuex.Store({
  state: {
    adventureGroupId: null,
    selectedQuests: [],
    team: null
  } as StateInterface,
  mutations: {
    addSelectedQuest(state, quest: Quest) {
      state.selectedQuests = [...state.selectedQuests, quest];
    },
    removeSelectedQuest(state, questId: number) {
      state.selectedQuests = state.selectedQuests.filter(
        sq => sq.id != questId
      );
    },
    addTeam(state, team: Team) {
      state.team = team
    }
  },
  actions: {},
  modules: {}
});
