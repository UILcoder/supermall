<template>
  <div class="goods">
    <goods-item  v-for='item in goods' :goodsitem='item'/>
  </div>
</template>

<script>
import goodsItem from './goodsItem'
export default {
  name:'goods',
  props: {
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    goodsItem
  }

}
</script>

<style>
 .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);
    padding: 2px;
  }
</style>