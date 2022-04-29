<script lang="ts" setup>
  import Tooltip from '@/components/Tooltip.vue'
  import WriteOffList from '@/components/WriteOffList.vue'
  import Collapse from '@/components/Collapse.vue'
  import SideMenu from '@/components/SideMenu.vue'
</script>

<template>
  <div class="index">
    <tooltip content="我是李凯">
      <span>likai</span>
    </tooltip>
    <write-off-list />
    <collapse />
    <side-menu />
  </div>
</template>

<style lang="scss" scoped>
  .index {
    color: $color-text;
  }
</style>
