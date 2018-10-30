<template>
    <div>
        <h1>Posts</h1>
        <div v-if="loading">
            Loading...
        </div>
        <div v-else>
            <ul v-if="posts">
                <li v-for="post in posts">{{post.title}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'loading',
                'posts',
            ])
        },
        created() {
            this.$store.dispatch('asyncGetPosts');
        }
    }
</script>