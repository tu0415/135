<template>
    <div id="app">
        <!-- <headerContent></headerContent>    -->
        <router-view/>
    </div>
</template>

<script>
import headerContent from "@/components/headerContent";
export default {
    name: 'App',
    data() {
        return {

        }
    },
    components: {
        headerContent,
    }
}
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    position: relative;
}
</style>
