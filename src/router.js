import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Work from './pages/Work.vue';
import Play from './pages/Play.vue';
import Thoughts from './pages/Thoughts.vue';


export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/work', component: Work },
    { path: '/play', component: Play },
    { path: '/thoughts', component: Thoughts },
    { path: '*', redirect: '/' }
  ]
});
