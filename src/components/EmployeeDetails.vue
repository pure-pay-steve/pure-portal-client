<script setup lang="ts">

import { ref } from 'vue'
import Collapsible from '../components/Collapsible.vue'
import LabelledInput from '../components/LabelledInput.vue'
import FlexBreak from '../components/FlexBreak.vue'
import TitleSelector from '../components/TitleSelector.vue'
import GenderToggle from '../components/GenderToggle.vue'
import DateSelector from '../components/DateSelector.vue'

// defineProps({
// })

// defineEmits([])

</script>

<template>
    <div>
        <div class="flex flex-wrap gap-2">
            <title-selector label="Title"></title-selector>
            <flex-break />
            <labelled-input label="First name" case-treatment="proper-name"></labelled-input>
            <labelled-input label="Middle name(s)" case-treatment="proper-name"></labelled-input>
            <labelled-input label="Surname" class="flex-grow" case-treatment="proper-name"></labelled-input>
            <flex-break />
            <date-selector label="Date of birth" />
            <gender-toggle class="ml-8" top-label="Gender" left-label="Male" right-label="Female"></gender-toggle>
            <flex-break />
            <labelled-input label="Address" class="w-full"></labelled-input>
            <flex-break />
            <labelled-input label="Email"></labelled-input>
        </div>
    </div>
</template>

<style scoped></style>
