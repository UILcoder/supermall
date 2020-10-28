<template>
  <div class="goods-item">
    <a :href="goodsitem.link">
    <img :src="goodsitem.image" class="img" @load="imgload"/>
    </a>
    <div class="title">
      <p>{{goodsitem.title}}</p>
      <span class="price">￥{{goodsitem.price}}</span>
      <span class="count">
        <img :src="goodsitem.img"/>
        {{goodsitem.count}}
        </span>
    </div>
    

  </div>
</template>

<script>
export default {
  name:'goodsItem',
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    imgload(){
      //通过事件总线发射图片加载信息
      this.$bus.$emit("imgload")
      
    }
  }

}
</script>

<style>
  .goods-item {
    padding-bottom: 50px;
    position: relative;
    width: 48%;
  }
  .goods-item .img {
    width: 100%;
    height: 200px;
    border-radius: 5px;
    /* border:3px solid var(--color-tint); */
  }
  .title{
    font-size: 12px;
    position: absolute;
    bottom:10px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  
  }
  .title p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 8px;
  }
  .title .price{
    position: relative;
    float: left;
    font-size: 14px;
    color: #f30b0b;
  }
  .title img{
    width: 14px;
  }
  .title .count{
    position: relative;
    float: right;
    right: 10px;
  }

</style>