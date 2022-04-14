<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import { useMainStore } from '@/store/main'
import { zhCN, darkTheme, NButton } from 'naive-ui'
import { ref } from 'vue'
const theme = ref(null)
const mainStore = useMainStore()
import { searchTips } from '@/axios/apis/example'

// console.log(import.meta.env.VITE_APP_WEB_URL)
// 使用 store 更新 state
const updateName = () => {
  // $patch 修改 store 中的数据
  mainStore.$patch({
    name: '修改 name 值',
  })
  onSearchTips()
}

const onSearchTips = () => {
  const params = {
    q: 'aaa',
  }
  searchTips.tips(params).then((res: any) => {
    console.log(res)
  })
}
</script>

<template>
  <!--  <n-space>-->
  <n-button @click="theme = darkTheme">深色</n-button>
  <n-button @click="theme = null">浅色</n-button>
  <!--  </n-space>-->
  <!--  <n-config-provider :locale="zhCN" :theme="theme">-->
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>store 的 name：{{ mainStore.name }}</p>
  <n-button @click="updateName">修改 store 的 name</n-button>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <!--  </n-config-provider>-->
</template>

<style lang="scss">
#app {
  text-align: center;
  color: $color-text;
  margin-top: 60px;
}
</style>
