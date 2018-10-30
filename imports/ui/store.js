import Vue from 'vue'
import Vuex from 'vuex'
import {callServerMethod} from "./helpers/client";

Vue.use(Vuex);

const state = {
    STATUS: {
        LOADING: false
    },
    posts: [],
};

const mutations = {
    setPosts: (state, posts) => {
        state.posts = posts
    },
    setLoadingState: (state, loadingStatus = true) => {
        state.STATUS.LOADING = loadingStatus
    },
};

const actions = {
    asyncGetPosts(store) {
        callServerMethod({
            name: 'getPosts',
            data: {},
            success: (error, result) => {
                store.commit('setPosts', result);
            }
        });
    }
};

const getters = {
    loading: state => state.STATUS.LOADING,
    posts: state => state.posts,
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});