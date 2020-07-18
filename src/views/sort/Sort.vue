<template>
<div id="sort">
  <nav-bar class="sort-nav"><div slot="center">商品分类</div></nav-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    name:'Sort',
    components: {
      NavBar
    }

}
</script>

<style>
.sort-nav{
  background-color: var(--color-tint);
  color: #fff;
  font-size: 20px;
  box-shadow: 0 1px 1px rgba(100,100,100,.1);
}

</style>