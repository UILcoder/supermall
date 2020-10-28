<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tab-control" :titles='["流行" ,"新款","精选"]'  @tabclick="tabclick" ref="tabControl1" v-show="istabControl"/>
  <scroll class="scroll" ref="scrolls"
   :probe-type="3" @scroll="contentscroll"
   :pull-up-load="pullUpLoad" @pullingUp="loadMore"> 
   <home-swiper :banners="banners" @swiperLoadImage="swiperLoadImage"/>
   <home-recommend :recommend="recommend"/>
   <home-feature/>
   <tab-control :titles='["流行" ,"新款","精选"]'  @tabclick="tabclick" ref="tabControl2"/>
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
import {debounce} from 'common/utils'

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
        isShowBack:false,
        pullUpLoad:true,
        tabOffetTop:0,
        istabControl:false,
        saveY:0
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
    mounted () {
      //调用scroll中的refresh()
      // console.log(this.$refs.scrolls.refresh)
      const refresh=debounce(this.$refs.scrolls.refresh,500)
       //3.监听goodsitem中的图片加载
      this.$bus.$on("imgload",()=>{
        // console.log(refresh)
         refresh()

      })
    },
       activated () {
       this.$refs.scrolls.scrollTo(0,this.saveY,0);
       this.$refs.scrolls.refresh();
       console.log("actived",this.saveY)
     },
     deactivated () {
       this.saveY=this.$refs.scrolls.getScrollY();
       console.log("chf")
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
       this.$refs.tabControl1.count=index;
       this.$refs.tabControl2.count=index
     },
     backclick(){
       this.$refs.scrolls.scrollTo(0,0,500)
     },
     contentscroll(position){
       //判断backTop是否出现
         this.isShowBack=position.y<-1000
       //判断tabControl是否吸顶（position:fixed)
       this.istabControl=(position.y)<-this.tabOffetTop
     },
     loadMore(){
       this.getHomeGoods(this.currentType)
      //  this.$refs.scrolls.refresh()
     },
     swiperLoadImage(){
       this.tabOffetTop=this.$refs.tabControl2.$el.offsetTop
       console.log(this.tabOffetTop);
       console.log(this.$refs.tabControl2)
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
         this.goods[type].page+=1;
         
         //完成下来加载更多
         this.$refs.scrolls.finishPullUp()
      })
      }
    }

}
</script>

<style scope>
#home{
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var( --color-tint);
  color: #fff;
  font-size: 20px;
}
.tab-control{
  position: relative;
  z-index: 10;
  top:-1px
}
.scroll{
 position: absolute;   
  top:44px;
  height: calc(100% - 49px);
  overflow: hidden;
}

</style>
