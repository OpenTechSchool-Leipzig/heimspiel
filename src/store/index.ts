import { Quest, Team } from "./../types";
import Vue from "vue";
import Vuex, { Store } from "vuex";
import axios from 'axios';
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

const baseUrl = "https://heimspiel.pythonanywhere.com/"

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
  actions: {
    createTeam({commit}, team) {
      return axios
        .get(baseUrl)
        .then(response => {
          commit('addTeam', team)
        })
    }
  },
  modules: {}
});
