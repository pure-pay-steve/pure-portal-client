<script lang="ts" setup>

const props = defineProps({
    open: Boolean
})
</script>

<template>
    <div class="outer border border-feint rounded-xl rounded-r-none" :class="open ? 'is-open' : ''"
        style="z-index: 100; position: fixed; top: 7vh; background-color: white; height: 90vh;">Banana
        <!-- <div style="; width: 20vw; height: 90vh"
        class="inner "></div> -->
    </div>
</template>

<style scoped>
.outer {
    display: block;
    width: 0vw;
    left: 100vw;
    transition: width 0.25s ease-out, left 0.25s ease-out;
}

.outer.is-open {
    width: 20vw;
    left: 80vw;
}

.inner {
    overflow: hidden;
}
</style>