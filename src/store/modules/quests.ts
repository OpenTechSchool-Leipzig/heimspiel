import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import axios from "axios";
import { Quest } from "@/types";
import store from "@/store";

export interface QuestsState {
  quests: Quest[];
  selectedQuests: Quest[];
}

const baseUrl = "https://heimspiel.pythonanywhere.com";

const axiosInstance = axios.create({
  baseURL: baseUrl
});

@Module({ dynamic: true, store, name: "quests" })
class Quests extends VuexModule {
  public quests: Quest[] = [];
  public selectedQuests: Quest[] = [];

  @Mutation
  private ADD_SELECTED_QUEST(quest: Quest) {
    this.selectedQuests = [...this.selectedQuests, quest];
  }

  @Mutation
  private REMOVE_SELECTED_QUEST(questId: number) {
    this.selectedQuests = this.selectedQuests.filter((sq) => sq.id != questId);
  }

  @Mutation
  private UPDATE_QUESTS(quests: Quest[]) {
    this.quests = quests;
  }

  @Action({ rawError: true })
  public async addSelectedQuest(quest: Quest) {
    this.ADD_SELECTED_QUEST(quest);
  }

  @Action({ rawError: true })
  public async removeSelectedQuest(questId: number) {
    this.REMOVE_SELECTED_QUEST(questId);
  }

  @Action({ rawError: true })
  public async fetchQuests() {
    try {
      const { data } = await axiosInstance.get("/quests");
      if (data.results) {
        this.UPDATE_QUESTS(data.results);
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const QuestsModule = getModule(Quests);
