  
<template>
  <div class="home-recommend">
    <div class="home-recommend-item" v-for="item in recommend">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>


</template>

<script>
    export default {
        name: "HomeRecommend",
        props:{
            recommend:{
                type:Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
  .home-recommend{
    display: flex;
    width: 100%;
    text-align: center;
    padding: 5px;
    border-bottom: 10px solid #eee;
  }
  .home-recommend-item{
    flex: 1;
  }
  .home-recommend-item img{
    width: 70px;
    height: 65px;
    margin-bottom: 10px;
  }

  .home-recommend-item p{
    /* color: rgb(231, 59, 16); */
    font-size: 12px;
    margin-bottom: 20px;
  }
</style>