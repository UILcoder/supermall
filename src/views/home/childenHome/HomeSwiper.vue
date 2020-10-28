<template>
  <swiper class="home-swiper">
    <swiper-item v-for="item in banners" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
 import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name:"HomeSwiper",
  props: {
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      isload:false
    }
  },
  components: {
    Swiper,SwiperItem
  },
  methods: {
    swiperLoad(){
      if(!this.isload){
      this.$emit("swiperLoadImage");
      this.isload=true
      }
    }
  }

}
</script>

<style>

</style>