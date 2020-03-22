import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddTeam from "../views/AddTeam.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/add-team",
    name: "Add Team",
    component: AddTeam
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/quests",
    name: "Quests",
    component: () =>
      import(/* webpackChunkName: "quests" */ "../views/QuestSelection.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
    import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;
