<script lang="ts" setup>
  interface Props {
    content: string
    effect: string | undefined
  }
  const props = withDefaults(defineProps<Props>(), {
    content: '',
    effect: () => 'dark',
  })
  // defineProps<{ content: string, effect: string }>()
</script>

<template>
  <div class="tooltip-box">
    <span
      :class="['tooltip', props.effect === 'dark' ? 'is-dark' : '']"
      :tooltip-data="props.content"
    >
      <slot></slot>
    </span>
  </div>
</template>

<style lang="scss" scoped>
  .tooltip {
    position: relative;
    border-bottom: 1px dotted black;
  }

  .tooltip:before {
    content: attr(tooltip-data);
    position: absolute;
    width: 250px;
    background-color: #efba93;
    color: #fff;
    text-align: center;
    padding: 15px;
    line-height: 1.1;
    border-radius: 5px;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.5s;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    font-size: 0.7em;
    visibility: hidden;
  }

  .tooltip:after {
    content: '';
    position: absolute;
    bottom: 75%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    opacity: 0;
    transition: opacity 0.5s;
    border-color: #000 transparent transparent transparent;
    visibility: hidden;
  }

  .tooltip:hover:before,
  .tooltip:hover:after {
    opacity: 1;
    visibility: visible;
  }
</style>
