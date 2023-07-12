import type { RouteRecordRaw } from "vue-router";
import LoginView from "@/views/login/index.vue";

export enum RouteNames {
  LOGIN = "login",
}

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: RouteNames.LOGIN,
    component: LoginView,
  },
];

export default routes;
