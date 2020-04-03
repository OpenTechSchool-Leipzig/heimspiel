import { Quest, Team, PlayerAttribute, User } from "@/types";
import Vue from "vue";
import Vuex, { Store } from "vuex";
import axios from "axios";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

const baseUrl = "https://heimspiel.pythonanywhere.com";

Vue.use(Vuex);
interface StateInterface {
  adventureGroupId: number | null;
  selectedQuests: Array<Quest>;
  playerAttributes: PlayerAttribute[];
  user: User;
}

export default new Vuex.Store({
  state: {
    adventureGroupId: null,
    selectedQuests: [],
    user: {
      id: "",
      name: "",
      token: "",
      url: ""
    },
    playerAttributes: []
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
    addUser(state, user: User) {
      state.user.token = user.token || "";
      state.user.id = user.id || "";
      state.user.name = user.name || "";
      state.user.url = user.url || "";
    },
    addPlayerAttributes(state, attributes: PlayerAttribute[]) {
      state.playerAttributes = attributes;
    }
  },
  actions: {
    createUser({ commit }, teamName) {
      return axios
        .post(`${baseUrl}/users/`, { name: teamName })
        .then(response => {
          commit("addUser", response.data);
        });
    },
    createPlayer({ commit, state }, { name, attributes }) {
      if (state.user.token === "") {
        return Promise.reject("User token missing");
      }
      const attributesList = attributes.map(
        (attribute: PlayerAttribute) => attribute.url
      );
      return axios.post(`${baseUrl}/players/`, {
        user: state.user.url,
        name: name,
        attributes: attributesList
      });
    },
    getPlayerAttributes({ commit, state }) {
      if (state.playerAttributes.length !== 0) {
        return Promise.resolve(state.playerAttributes);
      }

      return axios.get(`${baseUrl}/playerattributes/`).then(response => {
        commit("addPlayerAttributes", response.data.results);
      });
    }
  },
  modules: {}
});
