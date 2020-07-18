<template>
  <div id="Maintabbar">
    <tabbar>
      <Tabbar-item path='/home'>
      <img slot="item-icon" src="~assets/img/tabbar/home .svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/home-1.svg">
      <div slot="item-text">首页</div>
      </Tabbar-item>
      <Tabbar-item path='/sort'>
      <img slot="item-icon" src="~assets/img/tabbar/sort.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/sort-1.svg">
      <div slot="item-text">分类</div>
      </Tabbar-item>
      <Tabbar-item path='/cart'>
      <img slot="item-icon" src="~assets/img/tabbar/cart.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/cart-1.svg">
      <div slot="item-text">购物车</div>
      </Tabbar-item>
      <Tabbar-item path='/user'>
      <img slot="item-icon" src="~assets/img/tabbar/user.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/user-1.svg">
      <div slot="item-text">我的</div>
      </Tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/common/tabbar/Tabbar'
import TabbarItem from 'components/common/tabbar/TabbarItem'

export default {
  name:'Maintabbar',
  components:{
    Tabbar,
    TabbarItem
  }
}
</script>

<style>

</style>