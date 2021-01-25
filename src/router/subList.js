import layout from "@/views/layout";
const subRouters = [
  {
    path: "/",
    redirect: "home",
    name: "base",
    component: layout,
    children: [
      {
        path: "home",
        name: "home",
        component: () => import(/* webpackChunkName: "about" */ "@/views/Home")
      },
      {
        path: "reference",
        name: "reference",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/reference")
      },
      {
        path: "expert",
        name: "expert",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/expert")
      },
      {
        path: "talk",
        name: "talk",
        component: () => import(/* webpackChunkName: "about" */ "@/views/talk")
      },
      {
        path: "privateLetter",
        name: "privateLetter",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/privateLetter")
      }
    ]
  }
];
export default subRouters;
