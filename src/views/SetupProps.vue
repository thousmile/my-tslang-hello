<template>
  <div>
    父组件：<br />
    <h2>msg: {{ message }}</h2>
    <child :msg="message" psto="wqe" @hello="childHello" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import child from "../components/child.vue";
export default defineComponent({
  name: "SetupProps",
  components: {
    child,
  },
  setup() {
    const message = ref("你在做什么?");
    const childHello = (msg: string) => {
      message.value += msg;
    };
    return {
      childHello,
      message,
    };
  },
});
</script>
