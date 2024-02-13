<script setup lang="ts">

import { ref } from 'vue'
import Collapsible from '../components/Collapsible.vue'
import LabelledInput from '../components/LabelledInput.vue'
import FlexBreak from '../components/FlexBreak.vue'
import TitleSelector from '../components/TitleSelector.vue'
import GenderToggle from '../components/GenderToggle.vue'

// defineProps({
// })

// defineEmits([])

</script>

<template>
    <div class="bg-bkg">
        <collapsible header="Employment details" default-open>
            <div class="flex flex-wrap">
                <title-selector></title-selector>
                <flex-break />
                <labelled-input label="First name"></labelled-input>
                <labelled-input label="Middle name(s)"></labelled-input>
                <labelled-input label="Surname"></labelled-input>
                <flex-break />
                <gender-toggle top-label="Gender" left-label="Male" right-label="Female"></gender-toggle>
        </div>
        </collapsible>
    </div>

</template>

<style scoped>

</style>
