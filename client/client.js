import {Meteor} from 'meteor/meteor';
import Vue from 'vue';
import routerFactory from '/imports/ui/routes';
import AppLayout from '/imports/ui/layouts/AppLayout.vue';
import store from '/imports/ui/store';

Meteor.startup(() => {
    // Start the router
    const router = routerFactory.create();

    new Vue({
        router,
        store,
        render: h => h(AppLayout),
    }).$mount('app');
});