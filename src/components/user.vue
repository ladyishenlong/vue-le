<template>

  <div>
    这是用户界面

    <el-button @click="request">网络请求</el-button>

  </div>
</template>

<script>
export default {
  name: "user",

  methods:{
    request(){

      this.$axios.get('/test').then((result)=>{
        console.log(result);
      })



    }
  }
}
</script>

<style scoped>

</style>