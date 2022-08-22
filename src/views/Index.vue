<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="291px" class="hidden-sm-and-down">
        <Aside/>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from '@/components/Header'
import Aside from '@/components/Aside'

export default {
  name: 'Index',
  components: {
    Header,
    Aside
  }
}
</script>

<style scoped lang="less">

</style>
