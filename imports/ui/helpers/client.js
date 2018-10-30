import store from '../store';

export const callServerMethod = (params) => {
    store.commit('setLoadingState', true);

    Meteor.call(params.name, params.data, (e, r) => {
        store.commit('setLoadingState', false);

        console.log(e);
        console.log(r);
        params.success(e, r);
    });
};