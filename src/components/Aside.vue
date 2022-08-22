<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    style="min-height:100vh;text-align:left"
    router
  >
    <template v-if="$route.meta.type === 0">
      <el-menu-item index="/TextRecognition" class="menu-item-p">
        <i class="el-icon-menu"></i>
        <span slot="title">文本识别</span>
      </el-menu-item>
      <el-menu-item index="/TableAutoDR" class="menu-item-p">
        <i class="el-icon-document"></i>
        <span slot="title">表格自动检测识别</span>
      </el-menu-item>
      <el-menu-item index="/TableRecognition" class="menu-item-p">
        <i class="el-icon-setting"></i>
        <span slot="title">表格识别</span>
      </el-menu-item>
      <el-menu-item index="/RlineTableRecognition" class="menu-item-p">
        <i class="el-icon-setting"></i>
        <span slot="title">实线表格识别</span>
      </el-menu-item>
    </template>
    <template v-else>
      <el-menu-item index="/PersonalCenter" class="menu-item-p">
        <i class="el-icon-menu"></i>
        <span slot="title">文本识别记录</span>
      </el-menu-item>
      <el-menu-item index="/PersonalCenter/tableDR" class="menu-item-p">
        <i class="el-icon-document"></i>
        <span slot="title">表格记录1</span>
      </el-menu-item>
      <el-menu-item index="/PersonalCenter/table" class="menu-item-p">
        <i class="el-icon-setting"></i>
        <span slot="title">表格记录2</span>
      </el-menu-item>
    </template>

  </el-menu>
</template>

<script>
export default {
  name: 'Aside',
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
.menu-item-p {
  padding-left: 70px !important;
}
</style>
