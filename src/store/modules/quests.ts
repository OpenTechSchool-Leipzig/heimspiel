import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import { Quest } from "@/types";
import store from "@/store";

export interface QuestsState {
  selectedQuests: Quest[];
}

@Module({ dynamic: true, store, name: "quests" })
class Quests extends VuexModule {
  public selectedQuests: Quest[] = [];

  @Mutation
  private ADD_SELECTED_QUEST(quest: Quest) {
    this.selectedQuests = [...this.selectedQuests, quest];
  }

  @Mutation
  private REMOVE_SELECTED_QUEST(questId: number) {
    this.selectedQuests = this.selectedQuests.filter(sq => sq.id != questId);
  }

  @Action({ rawError: true })
  public async addSelectedQuest(quest: Quest) {
    this.ADD_SELECTED_QUEST(quest);
  }

  @Action({ rawError: true })
  public async removeSelectedQuest(questId: number) {
    this.REMOVE_SELECTED_QUEST(questId);
  }
}

export const QuestsModule = getModule(Quests);
