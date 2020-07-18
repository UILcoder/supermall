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
    } 
  },
  data () {
    return {
       scroll:null  
    }
  },
  mounted () {
    this.scroll=new BScroll(this.$refs.scroll,{
      probeType:this.probeType

    })
    this.scroll.on('scroll',(position)=>{
      this.$emit("scroll",position)
    })
  }
  

}
</script>

<style>

</style>