<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { onMounted, ref } from 'vue'
import { v4 as uuid } from 'uuid'
import { PencilIcon } from '@heroicons/vue/20/solid'

import type { Address } from '../../model/Address'

const id = ref(uuid())
const hideGetAddressInput = ref(false)
const addressValueAsText = ref('')
const addressValue = ref<Address>()

const props = defineProps<{
    label: string
    size: string
    testId: string
    placeholder: string
}>()

const emit = defineEmits(["resolved", "leave"])

const model = defineModel<Address>()

const getWidth = () => {
    switch (props.size) {
        case 'short':
            return 'w-28'
        case 'medium':
            return 'w-36'
        case 'long':
            return 'w-72'
        case 'full':
            return 'w-full'
        default:
            return ''
    }
}

const toFormattedAddress = (address: Address) : string => {
    console.log(address.postcode)

    const formattedAddress = address.formatted_address
    var result = ''

    for (var i = 0; i < formattedAddress.length; i++) {
        if (formattedAddress[i].length > 0) {
            result += formattedAddress[i] + ', '
        }
    }
    result = result.slice(0, -2)
    result = result + ' ' + address.postcode

    console.log(result)

    return result
}

const onLeaveFocus = () => {
    emit('leave')
}

const getAddressSelected = (e: any) => {
        const address = e.address as Address
        address.displayValue = toFormattedAddress(address)
        addressValue.value = address
        hideGetAddressInput.value = true
        addressValueAsText.value = address.displayValue
        model.value = address
        emit('resolved')
}

const onEdit = () => {
    hideGetAddressInput.value = false
    // using this rather then ref because getAddress seems to stop it working
    setTimeout(() => {
        const target = document.getElementById(`a-${id.value}`) as HTMLInputElement
        if (target && addressValue.value) {
            target.value = addressValue.value.displayValue
            target.focus()
            target.setSelectionRange(target.value.length, target.value.length)
        }
    }, 100)
}

const enableGetAddress = () => {
    // @ts-ignore
    getAddress.autocomplete(`a-${id.value}`, 'jdrOJaE6v0STy2YPrktLgw41803', { bind_output_fields: false})
}

const onUnload = () => {
        document.removeEventListener('beforeunload', onUnload);
        document.removeEventListener("getaddress-autocomplete-address-selected", getAddressSelected)
}

onMounted(() => {
    console.log('Address finder mounted')

    // @ts-ignore
    getAddress.autocomplete(`a-${id.value}`, 'jdrOJaE6v0STy2YPrktLgw41803', { bind_output_fields: false})

    document.addEventListener("getaddress-autocomplete-address-selected", getAddressSelected)
    document.addEventListener('beforeunload', onUnload)

    hideGetAddressInput.value = false
})

</script>

<template>
    <div class="-mt-2" :class="getWidth()">
        <label :for="id" class="text-sm font-medium leading-3 text-inputlabel">{{ label }}</label>
        <div class="mt-2 flex flex-row">
            <input type="text" :id="`a-${id}`" autocomplete="off" data-1p-ignore data-lp-ignore :class="hideGetAddressInput ? 'hidden' : 'visible'"
                @blur="onLeaveFocus" :placeholder="placeholder" :data-testid="testId"
                class="grow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <input v-if="hideGetAddressInput" type="text" :id="`b-${id}`" autocomplete="off" data-1p-ignore data-lp-ignore
                @blur="onLeaveFocus" v-model="addressValueAsText" readonly
                class="grow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                <button v-if="hideGetAddressInput" class="grow-0 -ml-8 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 w-8" @click="onEdit"><pencil-icon class="-ml-[0.5rem] h-5 w-5" aria-hidden="true" /></button>
        </div>
    </div>
</template>

<style scoped></style>
