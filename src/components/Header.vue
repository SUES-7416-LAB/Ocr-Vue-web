<template>
  <el-menu :default-active="$route.path" class="header" mode="horizontal" @select="handleSelect" router>
    <el-menu-item index="/">
      <img src="@/assets/logo.png" alt="" class="logo">
    </el-menu-item>
    <el-menu-item index="/TextRecognition" class="hidden-sm-and-down">OCR识别</el-menu-item>
    <el-menu-item index="/PersonalCenter" class="hidden-sm-and-down">个人中心</el-menu-item>
    <template v-if="$route.meta.type === 0">
      <el-submenu index="2" class="submenu-sm hidden-md-and-up">
        <template slot="title">{{ Title }}</template>
        <el-menu-item index="/PersonalCenter">个人中心</el-menu-item>
        <el-menu-item index="/TextRecognition">
          <span slot="title">文本识别</span>
        </el-menu-item>
        <el-menu-item index="/TableAutoDR">
          <span slot="title">表格自动检测识别</span>
        </el-menu-item>
        <el-menu-item index="/TableRecognition">
          <span slot="title">表格识别</span>
        </el-menu-item>
      </el-submenu>
    </template>
    <template v-else>
      <el-submenu index="2" class="submenu-sm hidden-md-and-up">
        <template slot="title">{{ Title }}</template>
        <el-menu-item index="/PersonalCenter">
          <span slot="title">文本识别记录</span>
        </el-menu-item>
        <el-menu-item index="/PersonalCenter/tableDR">
          <span slot="title">表格记录1</span>
        </el-menu-item>
        <el-menu-item index="/PersonalCenter/table">
          <span slot="title">表格记录2</span>
        </el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '/'
    }
  },
  computed: {
    Title () {
      return this.$route.meta.routeTitle
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="less">
.header {
  //border-radius: 0 0 2.5rem 2.5rem;
  .logo {
    width: 80%;
    height: 80%;
  }

  .submenu-sm {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
