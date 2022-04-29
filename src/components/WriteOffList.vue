<script lang="ts" setup></script>

<template>
  <div class="write-off-list">
    <h2>Item Checklist with CSS</h2>
    <label>
      <input type="checkbox" name="" id="1" />
      <i></i>
      <span>Item #1</span>
    </label>
    <label>
      <input type="checkbox" name="" id="2" />
      <i></i>
      <span>Item #2</span>
    </label>
    <label>
      <input type="checkbox" name="" id="3" />
      <i></i>
      <span>Item #3</span>
    </label>
  </div>
</template>

<style lang="scss">
  .write-off-list {
    padding: 50px;
    position: relative;
    background: #043b3e;
    border-top: 50px solid #03a2f4;
  }
  .write-off-list h2 {
    color: #f3f3f3;
    font-size: 25px;
    padding: 10px 0;
    margin-left: 10px;
    display: inline-block;
    border-bottom: 4px solid #f3f3f3;
  }
  .write-off-list label {
    position: relative;
    display: block;
    margin: 40px 0;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
  }
  .write-off-list input[type='checkbox'] {
    -webkit-appearance: none;
  }
  .write-off-list i {
    position: absolute;
    top: 2px;
    display: inline-block;
    width: 25px;
    height: 25px;
    border: 2px solid #fff;
  }
  .write-off-list input[type='checkbox']:checked ~ i {
    top: 1px;
    height: 15px;
    width: 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
  }
  .write-off-list span {
    position: relative;
    left: 40px;
    transition: 0.5s;
  }
  .write-off-list span:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: #fff;
    transform: translateY(-50%) scaleX(0);
    transform-origin: left;
    transition: transform 0.5s;
  }
  .write-off-list input[type='checkbox']:checked ~ span:before {
    transform: translateY(-50%) scaleX(1);
    transform-origin: right;
    transition: transform 0.5s;
  }
  .write-off-list input[type='checkbox']:checked ~ span {
    color: #154e6b;
  }
</style>
