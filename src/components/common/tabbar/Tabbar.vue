<template>
  <div id='tab-bar'>
      <slot></slot>

  </div>
</template>

<script>
export default {
  name:'Tabbar'

}
</script>

<style>
#tab-bar{
    display: flex;
    background-color:rgb(243, 241, 241);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -1px 1px rgba(100,100,100,.1);
  }
</style>