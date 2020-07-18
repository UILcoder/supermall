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
    }),
    this.scroll.on("pullingUp",()=>{
      this.$emit('pullingUp')
      console.log('bbb')
    })
  }
  

}
</script>

<style>

</style>