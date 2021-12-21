import { createRouter, createWebHistory } from 'vue-router'

import Edit from '../views/Edit.vue'
import AddTodo from '../views/addTodo.vue'


const routes = [

  {
    path: '/',
    name: 'add',
    component: AddTodo
  },
  {
    path: '/todos/:id/edit',
    name: 'edit',
    component: Edit
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
