<template>
    <div>
        <h1>Vue loves Meteor!</h1>
        <p>Feel free to edit this template</p>
        <router-link :to="{ name: 'Posts', params: { }}">
            Look also at Posts page!
        </router-link>
    </div>
</template>

<script>
    export default  {
        components: {

        },
        data() {
            return {

            }
        }
    }
</script>