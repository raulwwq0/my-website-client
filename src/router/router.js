import { createWebHistory, createRouter} from 'vue-router';
import HomeES from '../components/es/Home/Home';
import ProjectsES from '../components/es/Projects/Projects';
import ContactES from '../components/es/Contact/Contact';
import ErrorComponent from '../components/Error';

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', name: 'HomeES', component: HomeES},
    {path: '/projects', name: 'ProjectsES', component: ProjectsES},
    {path: '/contact', name: 'ContactES', component: ContactES},
    {path: '/:catchAll(.*)', name: 'ErrorComponent', component: ErrorComponent}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});

export default router;