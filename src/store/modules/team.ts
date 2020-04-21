import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import { PlayerAttribute, Player, Team as TeamType } from "@/types";
import axios from "axios";
import store from "@/store";

const baseUrl = "https://heimspiel.pythonanywhere.com";

const axiosInstance = axios.create({
  baseURL: baseUrl
});

const getAxiosAuthInstance = (token: string) => {
  return axios.create({
    baseURL: baseUrl,
    headers: { Authorization: `Token ${token}` }
  });
};

export interface TeamState {
  adventureGroupId: number | null;
  team: TeamType;
  players: Player[];
  playerAttributes: PlayerAttribute[];
}

@Module({ dynamic: true, store, name: "team" })
class Team extends VuexModule {
  public adventureGroupId: number | null = null;
  public team = {
    id: "",
    name: "",
    token: ""
  } as TeamType;
  public players: Player[] = [];
  public playerAttributes: PlayerAttribute[] = [];

  @Mutation
  private RESET_STORE() {
    this.adventureGroupId = null;
    this.team = {
      id: "",
      name: "",
      token: ""
    };
    this.players = [];
    this.playerAttributes = [];
  }

  @Mutation
  private ADD_TEAM(user: TeamType) {
    this.team.token = user.token || "";
    this.team.id = user.id || "";
    this.team.name = user.name || "";
  }

  @Mutation
  private ADD_PLAYERS(players: Player[]) {
    this.players = players;
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
  public async createTeam(teamName: string) {
    this.RESET_STORE();
    try {
      const { data } = await axiosInstance.post("/users/", {
        name: teamName
      });
      this.ADD_TEAM(data);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  @Action({ rawError: true })
  public async getTeam(token: string) {
    this.RESET_STORE();
    try {
      const axiosAuthInstance = getAxiosAuthInstance(token);
      const { data } = await axiosAuthInstance.get(`/users`);
      // todo: right now, returning the first user found
      // once auth is implemented api should only return the requested user for the token
      const user: TeamType = {
        token,
        id: data.results[0].id,
        name: data.results[0].name
      };
      this.ADD_TEAM(user);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Action({ rawError: true })
  public async createPlayer({
    name,
    attributes
  }: {
    name: string;
    attributes: PlayerAttribute[];
  }) {
    if (this.team.token === "") {
      throw Error("User token missing");
    }
    const attributesList = attributes.map(
      (attribute: PlayerAttribute) => attribute.id
    );
    try {
      const axiosAuthInstance = getAxiosAuthInstance(this.team.token);
      const response = await axiosAuthInstance.post("/players/", {
        user: this.team.id,
        name: name,
        attributes: attributesList
      });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  @Action({ rawError: true })
  public async getPlayers() {
    try {
      const axiosAuthInstance = getAxiosAuthInstance(this.team.token);
      const { data } = await axiosAuthInstance.get("/players");
      this.ADD_PLAYERS(data.results);
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
