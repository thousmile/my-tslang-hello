<template>
  <h1>计算属性和监视</h1>

  <fieldset>
    <legend>姓名操作</legend>
    姓氏:
    <input
      type="text"
      v-model="user.firstName"
      placeholder="请输入姓氏.."
    /><br />
    名字:
    <input
      type="text"
      v-model="user.lastName"
      placeholder="请输入名字.."
    /><br />
  </fieldset>

  <fieldset>
    <legend>姓名计算和监视</legend>
    计算属性1:
    <input type="text" v-model="fullName1" placeholder="姓名.." /><br />
    计算属性1:
    <input type="text" v-model="fullName2" placeholder="姓名.." /><br />
    监视属性1:
    <input type="text" v-model="fullName3" placeholder="姓名.." /><br />
    监视属性2:
    <input type="text" v-model="fullName4" placeholder="姓名.." /><br />
  </fieldset>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
  watch,
  watchEffect,
} from "vue";
export default defineComponent({
  name: "ComputedAndWatch",
  setup() {
    const user = reactive({
      firstName: "东方",
      lastName: "不败",
    });
    const fullName1 = computed(() => {
      return user.firstName + "_" + user.lastName;
    });

    const fullName2 = computed({
      set(val: string) {
        let arr = val.split("_");
        user.firstName = arr[0];
        user.lastName = arr[1];
      },
      get(): string {
        return user.firstName + "_" + user.lastName;
      },
    });

    const fullName3 = ref("");

    watch(
      user,
      ({ firstName, lastName }) => {
        fullName3.value = firstName + "_" + lastName;
      },
      { immediate: true, deep: true }
    );

    const fullName4 = ref("");

    watchEffect(() => {
      fullName4.value = user.firstName + "_" + user.lastName;
    });

    return {
      user,
      fullName1,
      fullName2,
      fullName3,
      fullName4,
    };
  },
});
</script>
