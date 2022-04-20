<template>
  <div>
    子组件
    <h2>msg: {{ msg }}</h2>
    <button @click="emitHello">emit分发实践</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "child",
  props: ["msg"],
  setup(props, { attrs, emit, slots }) {
    console.log("props :>> ", props);
    console.log("attrs :>> ", attrs);
    console.log("emit :>> ", emit);
    console.log("slots :>> ", slots);
    const emitHello = () => {
      emit("hello", "child..");
    };
    const showMsg1 = () => {
      console.log("showMsg1...");
    };
    return {
      showMsg1,
      emitHello,
    };
  },
});
</script>

<style lang="scss" scoped></style>
