const routes = [
  {
    path: "/jayanth",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // { path: '', component: () => import('pages/IndexPage.vue') }
      {
        path: "/jayanth",
        component: () => import("src/components/LandingPage.vue"),
      },
      // { path: "hobbies", component: () => import("pages/MyHobbies.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
