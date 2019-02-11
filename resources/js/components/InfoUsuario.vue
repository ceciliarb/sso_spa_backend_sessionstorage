<template>
    <div>
        <pre class="prettyprint">
            <code>
                {{ user }}
            </code>
        </pre>
    </div>
</template>

<script>
import Auth from "./Auth"

export default {
    props: {
    },
    extends: Auth,
    data() {
        return {
            infousu: [],
        }
    },
    mounted() {

    }
}
</script>

<style>

</style>
