<script lang="ts" setup></script>

<template>
  <div class="side-menu css-dynamic-sidebar">
    <nav>
      <a class="" href="#">Menu #1</a>
      <a class="" href="#">Menu #2</a>
      <a class="" href="#">Menu #3</a>
    </nav>

    <div class="site-content">
      <p>Hover over the sidebar</p>
      <p>Also work with Tab selector (for accessibility)</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .css-dynamic-sidebar {
    overflow: hidden;
    position: relative;
    height: 15em;
    max-width: 15em;
    margin: auto;
  }

  .site-content {
    margin: auto;
  }

  nav {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 100%;
    padding: 1em;
    background-color: #f3f3f3;
    transform: translateX(1em);
    transition: 0.2s transform;
  }

  nav:hover,
  nav:focus-within {
    transform: translateX(100%);
  }

  a {
    white-space: pre;
    color: black;
  }

  p {
    font-size: 2em;
    font-family: monospace;
    text-align: center;
  }
</style>
