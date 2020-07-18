<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
     class="tab-control-item"
      @click="btnclick(index)" 
    :class="{active:index==count}" >
      <span >{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'tabControl',
  props: {
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      count:0
    }
  },
  methods: {
    btnclick(index){
      this.count=index,
      this.$emit("tabclick",index)
    }
  }

}
</script>

<style>
.tab-control{
  height: 40px;
  display: flex;
  text-align: center;
  line-height: 40px;
  background-color: #fff;
  position: sticky;
  z-index: 10;
}
.tab-control-item{
  flex: 1;
  font-size: 15px;
  
}
.tab-control-item span{
  padding: 3px;
}
.active{
  color: rgb(230, 49, 49);
  
}
.active span{
  border-bottom: solid 2px rgb(230, 49, 49);
}
</style>