import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from "vuex-module-decorators";
import { PlayerAttribute, User } from "@/types";
import axios from "axios";
import store from "@/store";

const baseUrl = "https://heimspiel.pythonanywhere.com";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

const getAxiosAuthInstance = (token: string) => {
  return axios.create({
    baseURL: baseUrl,
    headers: { Authorization: `Token ${token}` },
  });
};

export interface TeamState {
  adventureGroupId: number | null;
  user: User;
  playerAttributes: PlayerAttribute[];
}

@Module({ dynamic: true, store, name: "team" })
class Team extends VuexModule {
  public adventureGroupId: number | null = null;
  public user = {
    id: "",
    name: "",
    token: "",
    url: "",
  } as User;
  public playerAttributes: PlayerAttribute[] = [];

  @Mutation
  private ADD_USER(user: User) {
    this.user.token = user.token || "";
    this.user.id = user.id || "";
    this.user.name = user.name || "";
    this.user.url = user.url || "";
  }

  @Mutation
  private ADD_PLAYER_ATTRIBUTE(attributes: PlayerAttribute[]) {
    this.playerAttributes = attributes;
  }

  /**
   * Create User / Team
   * @param teamName
   */
  @Action({ rawError: true })
  public async createUser(teamName: string) {
    try {
      const { data } = await axiosInstance.post("/users/", {
        name: teamName,
      });
      this.ADD_USER(data);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  @Action({ rawError: true })
  public async createPlayer({
    name,
    attributes,
  }: {
    name: string;
    attributes: PlayerAttribute[];
  }) {
    if (this.user.token === "") {
      throw Error("User token missing");
    }
    const attributesList = attributes.map(
      (attribute: PlayerAttribute) => attribute.url
    );
    try {
      const axiosAuthInstance = getAxiosAuthInstance(this.user.token);
      const response = await axiosAuthInstance.post("/players/", {
        user: this.user.url,
        name: name,
        attributes: attributesList,
      });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  @Action({ rawError: true })
  public async fetchPlayerAttributes() {
    try {
      const { data } = await axiosInstance.get("/playerattributes/");
      this.ADD_PLAYER_ATTRIBUTE(data.results);
      return data.results;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const TeamModule = getModule(Team);
