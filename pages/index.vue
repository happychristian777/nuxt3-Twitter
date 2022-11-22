<template>
    <div>
        <MainSection :title="Home" :loading="loading">
            This is our Home Page
        </MainSection>
    </div>
</template>
<script setup>
const loading = ref(true)
</script>