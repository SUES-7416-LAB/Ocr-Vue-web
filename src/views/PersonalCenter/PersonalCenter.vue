<template>
  <div class="personal-center">
    <el-container>
      <el-header>
        <Header/>
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
  </div>
</template>

<script>
import Header from '@/components/Header'
import Aside from '@/components/Aside'

export default {
  name: 'PersonalCenter',
  components: {
    Header,
    Aside
  }
}
</script>

<style scoped>

</style>
