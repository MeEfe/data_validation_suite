<script setup lang="ts">
import { ref, onMounted } from "vue";
import { testService } from "./services/test-service";

onMounted(async () => {
  const result = await testService.testGet();
  console.log(result);

  await testService.createCat("Joseph");
});
</script>

<template>
  <NuxtPage />
</template>
