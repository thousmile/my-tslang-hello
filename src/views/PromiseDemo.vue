<template>
  <div>
    <h2>Setup Promise Demo</h2>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";

export default {
  setup() {
    const msg = ref("");
    new Promise((resolve, reject) => {
      setTimeout(() => {
        msg.value = "Hello";
        return resolve();
      }, 1000);
    });
    return {
      msg,
    };
  },
};
</script>

<style lang="scss" scoped></style>
