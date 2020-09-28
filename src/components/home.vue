<template>
  <div>
    <h1>这是首页</h1>

    <el-button @click="goto">这是个按钮</el-button>

  </div>

</template>

<script>
export default {
  name: "Home",
  methods:{
    goto(){
      this.$router.push({path:"/user"})
    }
  }
}
</script>

<style scoped>

</style>