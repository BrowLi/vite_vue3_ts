<script lang="ts" setup></script>

<template>
  <div class="collapse">
    <main>
      <details :open="true">
        <summary>Accordion Tab #1</summary>
        <div class="tab-content">
          <p>your text goes here</p>
        </div>
      </details>

      <details>
        <summary>Accordion Tab #2</summary>
        <div class="tab-content">
          <p>your text goes here</p>
        </div>
      </details>
      <details>
        <summary>Accordion Tab #3</summary>
        <div class="tab-content">
          <p>your text goes here</p>
        </div>
      </details>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  /* .tab-content can be styled as you like */
  main {
    max-width: 400px;
    margin: 0 auto;
  }
  p {
    text-align: justify;
    font-family: monospace;
    font-size: 13px;
  }
  summary {
    font-size: 1rem;
    font-weight: 600;
    background-color: #f3f3f3;
    color: #000;
    padding: 1rem;
    margin-bottom: 1rem;
    outline: none;
    border-radius: 0.25rem;
    cursor: pointer;
    position: relative;
  }
  details[open] summary ~ * {
    animation: sweep 0.5s ease-in-out;
  }
  @keyframes sweep {
    0% {
      opacity: 0;
      margin-top: -10px;
    }
    100% {
      opacity: 1;
      margin-top: 0;
    }
  }
  details > summary::after {
    position: absolute;
    content: '+';
    right: 20px;
  }
  details[open] > summary::after {
    position: absolute;
    content: '-';
    right: 20px;
  }
  details > summary::-webkit-details-marker {
    display: none;
  }
</style>
