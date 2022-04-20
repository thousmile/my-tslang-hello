<template>
  <div>
    <h1>Reactive</h1>

    <p>名称: {{ proxyUser.name }}</p>
    <p>年龄: {{ proxyUser.age }}</p>
    <p>爱好: {{ proxyUser.hobby }}</p>

    <button @click="updateUser">改变响应式数据</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"

export default defineComponent({
  name: "ReactiveView",
  setup() {
    const user = {
      name: "张三",
      age: 16,
      hobby: {
        girlfriend: "小丽",
        cars: ["奔驰", "宝马", "奥迪"]
      }
    }
    const proxyUser = reactive(user)

    const updateUser = () => {
      proxyUser.name += "++"
      proxyUser.age++
      proxyUser.hobby.girlfriend = "小红"
      proxyUser.hobby.cars[1] = "劳斯莱斯"
    }

    return {
      proxyUser,
      updateUser
    }
  }
})
</script>
