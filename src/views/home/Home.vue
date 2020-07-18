<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  <scroll class="scroll" ref="scrolls" :probe-type="3" @scroll="contentscroll"> 
   <home-swiper :banners="banners"/>
   <home-recommend :recommend="recommend"/>
   <home-feature/>
   <tab-control class="tab-control" 
   :titles='["流行" ,"新款","精选"]'  @tabclick="tabclick"/>
   <goods :goods="showGoods"/>
   </scroll>
   <back-top @click.native="backclick" v-show="isShowBack"/>
  </div>
</template>

<script>

import HomeSwiper from './childenHome/HomeSwiper'
import HomeRecommend from './childenHome/HomeRecommend'
import HomeFeature from './childenHome/HomeFeature'
import {getHomeMulitidata,getHomeGoods} from 'network/home'

import NavBar from 'components/common/navbar/NavBar'
import scroll from 'components/common/scroll/scroll'
import backTop from 'components/common/backTop/backTop'

import tabControl from 'components/content/tabControl/tabControl'
import goods from 'components/content/goods/goods'
export default {
    name:'Home',
    components: {
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      
      NavBar,
      scroll,
      backTop,

      tabControl,
      goods
    },
    data () {
      return {
        banners:[],
        recommend:[],
        goods:{
          'pop':{page:0,list:[]},
          'news':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        isShowBack:false
      }
    },
    created () {
      //1.请求多个数据
      this.getHomeMulitidata(),

      //2.请求商品数据
      this.getHomeGoods("pop"),
      this.getHomeGoods("news"),
      this.getHomeGoods("sell")
     

     
    },
    computed: {
      showGoods(){
        return  this.goods[this.currentType].list
      }
    },
    methods: {
      /*
      *事件监听相关的方法
      */
     tabclick(index){
       switch(index){
         case 0: this.currentType='pop' ;break;
         case 1: this.currentType='news' ;break;
         case 2: this.currentType='sell' ;break;
       }
     },
     backclick(){
       this.$refs.scrolls.scroll.scrollTo(0,0,500)
     },
     contentscroll(position){
       console.log(position)
         this.isShowBack=position.y<-1000
     },

      /*
      *网络请求相关的方法
      */
      getHomeMulitidata(){
        getHomeMulitidata().then(res=>{
        //  console.log(res);
         this.banners=res.data.banners.list;
         this.recommend=res.data.recommend.list
        //  console.log(this.banners ,this.recommend)
      })
      },
      getHomeGoods(type){
        const page=this.goods[type].page
        // console.log(page)
        getHomeGoods(type,page).then(res=>{
          // console.log(res.data[type].page[page].list)
         this.goods[type].list.push(...res.data[type].page[page].list);
         this.goods[type].page+=1
      })
      }
    }

}
</script>

<style scope>
#home{
  margin-top: 44px;
  height: 100vh;
}
.home-nav{
  background-color: var( --color-tint);
  color: #fff;
  font-size: 20px;

  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9;
}
.tab-control{
  top: 44px;
}
.scroll{
  height: calc(100% - 49px);
  overflow: hidden;
}

</style>
