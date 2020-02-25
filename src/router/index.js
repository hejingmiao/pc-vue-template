import Vue from 'vue';
import VueRouter from 'vue-router';
import { trackEvent } from '@/utils/track'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '*', redirect: '/home' },
    { path: '/home', name: 'home', component: Home, meta: { title: '首页' } },
    { path: '/about', name: 'about', component: About, meta: { title: 'about' } }
  ]
});

router.afterEach((to) => {
  // 更新标题
  let title = to.meta.title || process.env.VUE_APP_TITLE
  document.title = title

  // 统计
  trackEvent('pageview' + to.path.replace(/\//g, '_'))
})

export default router;
