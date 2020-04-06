import { Module, VuexModule, getModule } from "vuex-module-decorators";
import store from "@/store";

export interface AppState {}

@Module({ dynamic: true, store, name: "app" })
class App extends VuexModule {}

export const AppModule = getModule(App);
