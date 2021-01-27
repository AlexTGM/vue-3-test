import { createRouter, createWebHistory } from 'vue-router'

const Templates = () =>
  import(/* webpackChunkName: "templates" */ './features/templates')

const TemplatesList = () =>
  import(/* webpackChunkName: "templates" */ './features/templates/list');

const TemplatesCreate = () =>
  import(/* webpackChunkName: "templates" */ './features/templates/create');

const Categories = () =>
  import(/* webpackChunkName: "categories" */ './features/categories/');

const CategoriesList = () =>
  import(/* webpackChunkName: "categories" */ './features/categories/list');

const CategoriesCreate = () =>
  import(/* webpackChunkName: "categories" */ './features/categories/create');

const routes = [
  {
    path: '/templates',
    component: Templates,
    redirect: { name: 'Templates List' },
    children: [
      {
        path: '',
        name: 'Templates List',
        component: TemplatesList,
      },
      {
        path: 'create',
        name: 'Create Template',
        component: TemplatesCreate
      },
    ]
  },
  {
    path: '/categories',
    component: Categories,
    children: [
      {
        path: '',
        name: 'Categories List',
        component: CategoriesList,
      },
      {
        path: 'create',
        name: 'Create Category',
        component: CategoriesCreate
      },
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
});