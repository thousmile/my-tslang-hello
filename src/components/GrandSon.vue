<template>
  <div>
    <h3 :style="{ color: color }">孙子组件: {{ color }}</h3>
  </div>
</template>

<script lang="ts" setup>
import { inject } from "@vue/runtime-core";
const color = inject("color");
</script>
