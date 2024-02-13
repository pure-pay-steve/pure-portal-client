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
        <collapsible header="Employee details" default-open>
            <div class="flex flex-wrap gap-2">
                <title-selector></title-selector>
                <flex-break />
                <labelled-input label="First name"></labelled-input>
                <labelled-input label="Middle name(s)"></labelled-input>
                <labelled-input label="Surname" class="flex-grow"></labelled-input>
                <flex-break />
                <gender-toggle top-label="Gender" left-label="Male" right-label="Female"></gender-toggle>
                <flex-break />
                <labelled-input label="Address" class="w-full"></labelled-input>
                <flex-break />
                <labelled-input label="Email"></labelled-input>
        </div>
        </collapsible>
    </div>

</template>

<style scoped>

</style>
