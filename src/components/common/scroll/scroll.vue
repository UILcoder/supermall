<template>
  <div class="scroll" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:"scroll",
  props:{
    probeType:{
    type:Number,
    default:0
    }, 
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
       scroll:null  
    }
  },
  mounted () {
    this.scroll=new BScroll(this.$refs.scroll,{
      probeType:this.probeType,
      click:true,
      pullUpLoad:this.pullUpLoad

    })
    this.scroll.on('scroll',(position)=>{
      this.$emit("scroll",position)
    })
    if(this.pullUpLoad){
      this.scroll.on("pullingUp",()=>{
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    scrollTo(x,y,delay){
      this.scroll.scrollTo(x,y,delay)
    },
    finishPullUp(){
      this.scroll&&this.scroll.finishPullUp()
    },
    refresh(){
        this.scroll && this.scroll.refresh()
      },
      getScrollY(){
        return this.scroll?this.scroll.y:0
      }
  }
  

}
</script>

<style>

</style>