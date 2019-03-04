import Vue from 'vue';
import Router from 'vue-router';
import Courses from '@/screens/Courses';
import Lessons from '@/screens/Lessons';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Courses',
            component: Courses
        },
        {
            path: '/lessons/:id',
            name: 'Lessons',
            component: Lessons
        },
    ]
});

export default router
