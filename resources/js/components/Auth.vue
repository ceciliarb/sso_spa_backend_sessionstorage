<template>

</template>

<script>
export default {
   computed: {
        user() {
            return this.$store.getters.user
        }
    },
    mounted() {
        setInterval(
            () => {
                if(sessionStorage.getItem('token')) {
                    this.$axios.get('user').then((response) => { this.$store.commit('setUser', response.data) })
                }
            }, 10 * 60 * 1000)
    }

}
</script>

<style>

</style>
