import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)
const Home = () => import('../views/home/Home')
const Sort = () => import('../views/sort/Sort')
const Cart = () => import('../views/cart/Cart')
const User = () => import('../views/user/User')


const routes = [
  { path: "", redirect: "/home" },
  { path: "/home", component: Home, meta: { title: "首页" } },
  { path: "/sort", component: Sort, meta: { title: "分类" } },
  { path: "/cart", component: Cart, meta: { title: "购物车" } },
  { path: "/user", component: User, meta: { title: "我的" } }
];

const router = new Router({
  routes,
  mode:'history'
})
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
})

export default router