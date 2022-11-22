<template>
    <div class="p-3 hover:bg-gray-100 darl:hover:bg-dim-300
    border-b" :class="wrapperClasses">
        <slot></slot>
    </div>
</template>
<script setup>
const wrapperClasses=computed(()=>`${defaultTransition}${twitterBorderColor}`)
const {defaultTransition, twitterBorderColor}=useTailwindConfig()
</script>