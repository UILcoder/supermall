<template>
<div id="cart">
  <nav-bar class="cart-nav"><div slot="center">购物车({{counter}})</div></nav-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    name:'Cart',
    components: {
      NavBar
    },
    data () {
      return {
        counter:0
      }
    }

}
</script>

<style>
.cart-nav{
  background-color: var(--color-tint);
  color: #fff;
  font-size: 20px;
  box-shadow: 0 1px 1px rgba(100,100,100,.1);
}

</style>