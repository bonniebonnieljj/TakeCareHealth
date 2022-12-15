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
        path: "tinymce",
        name: "tinymce",
        component: () => import(/* webpackChunkName: "about" */ "@/views/tinymce")
      },
      {
        path: "privateLetter",
        name: "privateLetter",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/privateLetter")
      },{
        path: "/print",
        name: "print",
        component: () => import(/* webpackChunkName: "Print" */ "@/views/Print")
      }
    ]
  },
  {
    path: "/antvx6",
    name: "antvx6",
    component: () => import(/* webpackChunkName: "Print" */ "@/views/AntvX6")
  },
  {
    path: "/draggable",
    name: "draggable",
    component: () => import(/* webpackChunkName: "draggable" */ "@/views/draggable")
  }
];
export default subRouters;
