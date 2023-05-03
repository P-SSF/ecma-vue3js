import { createWebHistory, createRouter } from 'vue-router'

function getComponent(component) {
  return () => import(`../components/${component}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Main',
    component: getComponent('layout/MainComponent')
  },
  {
    path: '/404',
    name: 'notFound',
    component: getComponent('NotFound')
  },
  // 찾을 수 없는 모든 경로
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
