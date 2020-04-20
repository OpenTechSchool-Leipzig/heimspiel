import { Module, VuexModule, getModule } from "vuex-module-decorators";
import store from "@/store";

export interface AppState {
  error: string;
}

@Module({ dynamic: true, store, name: "app" })
class App extends VuexModule {
  error = "";
}

export const AppModule = getModule(App);
