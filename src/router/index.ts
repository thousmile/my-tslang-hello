import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/ReactiveView",
    name: "ReactiveView",
    component: () => import("../views/ReactiveView.vue"),
  },
  {
    path: "/SetupAndRef",
    name: "SetupAndRef",
    component: () => import("../views/SetupAndRef.vue"),
  },
  {
    path: "/SetupProps",
    name: "SetupProps",
    component: () => import("../views/SetupProps.vue"),
  },
  {
    path: "/ComputedAndWatch",
    name: "ComputedAndWatch",
    component: () => import("../views/ComputedAndWatch.vue"),
  },
  {
    path: "/ProvideAndInject",
    name: "ProvideAndInject",
    component: () => import("../views/ProvideAndInject.vue"),
  },
  {
    path: "/PromiseDemo",
    name: "PromiseDemo",
    component: () => import("../views/PromiseDemo.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
