import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2'
import NotFound from '/imports/ui/pages/NotFound.vue';
import Home from '/imports/ui/pages/Home.vue';
import Posts from '/imports/ui/pages/Posts.vue';

// Create router instance
const routerFactory = new RouterFactory({
    mode: 'history',
    scrollBehavior: nativeScrollBehavior
});

// Specify routes of our app
RouterFactory.configure(router => {
    router.addRoutes([
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/posts',
            name: 'Posts',
            component: Posts
        },
        {
            path: '*',
            component: NotFound,
        }
    ]);
}, -1);

export default routerFactory;