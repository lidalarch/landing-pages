import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Page1 from './Page1.vue'
import Page2 from './Page2.vue'
import Page3 from './Page3.vue'
import Page4 from './Page4.vue'

Vue.config.productionTip = false;

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: App,
    },
    {
      path: '/page1',
      name:'page1',
      component: Page1,
     // props: true,
    },
    {
      path: '/page2',
      name:'page2',
      component: Page2,
    },
    {
      path: '/page3',
      name:'page3',
      component: Page3,
    },
    {
      path: '/page4',
      name:'page4',
      component: Page4,
    },
  ]
});


new Vue({
  render: h => h(App), router
}).$mount('#app');
