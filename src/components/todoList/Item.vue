<template>
    <div class="item">
        <slot name="item"></slot>
    </div>
</template>

<script setup>
</script>

<style>
.item {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top: 8px;
}
</style>
