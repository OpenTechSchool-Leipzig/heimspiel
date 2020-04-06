import Vue from "vue";
import Vuex from "vuex";
import { AppState } from "@/store/modules/app";
import { TeamState } from "@/store/modules/team";
import { QuestsState } from "@/store/modules/quests";

Vue.use(Vuex);

export interface RootState {
  app: AppState;
  team: TeamState;
  quest: QuestsState;
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<RootState>({});
