<template>
  <div class="tar-bar-item" @click="btnClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabbarItem',
   props: {
      path: String,
      activeColor:{
        type:String,
        default:'red'
      }
    },   
    computed: {
      isActive(){ 
        return this.$route.path.indexOf(this.path)!=-1
      },
      activeStyle(){
       return this.isActive?{color:this.activeColor}:{}
      }
    },
    methods: {
      btnClick(){
       this.$router.replace(this.path).catch(err => err)
      }
    }


}
</script>

<style>
.tar-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;

}

.tar-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>