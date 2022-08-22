<template>
  <div class="textRecognition">
    <p>文本识别</p>
    <el-steps :active=active align-center>
      <el-step title="上传"></el-step>
      <el-step title="系统处理中"></el-step>
      <el-step title="结果"></el-step>
    </el-steps>
    <div class="main">
      <!--      :data=uploadData-->
      <el-upload
        v-if="active===0"
        class="upload-demo"
        drag
        action="/api/earn_text"
        name="file"
        :on-success="successFunction"
        :before-upload="beforeFunction"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <div class="loading-sun-wrap" v-if="active===1">
        <div class="loading-sun">
          <div class="sun">
            <div class="sun-body">
              <div class="line" style="--i: 1"></div>
              <div class="line" style="--i: 2"></div>
              <div class="line" style="--i: 3"></div>
              <div class="line" style="--i: 4"></div>
              <div class="line" style="--i: 5"></div>
              <div class="line" style="--i: 6"></div>
              <div class="line" style="--i: 7"></div>
              <div class="line" style="--i: 8"></div>
            </div>
            <div class="eye"></div>
          </div>
          <div class="horizon"></div>
        </div>
      </div>
      <div class="result" v-if="active===3">
        <el-card class="result-card">
          <p>{{ result }}</p>
          <el-button type="primary" @click="active=0">返回</el-button>
        </el-card>
      </div>
    </div>
    <!--    <el-button @click="next()">下一部</el-button>-->
  </div>
</template>

<script>
export default {
  name: 'TextRecognition',
  data () {
    return {
      active: 0,
      // uploadData: {
      //   password: '8907',
      //   reqmode: 'ocr_pp'
      // },
      result: []
    }
  },
  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
    },
    successFunction (response) {
      if (response.code === 200 && response.result !== null) {
        this.active = 3
        this.$notify({
          title: '成功',
          message: 'OCR识别成功',
          type: 'success'
        })
        this.result = response.result
      } else {
        this.$notify({
          title: '失败',
          message: 'OCR识别错误',
          type: 'error'
        })
        this.active = 0
      }
    },
    beforeFunction () {
      this.active = 1
    }
  }
}
</script>

<style scoped lang="less">

.textRecognition {
  .main {
    margin-top: 20px;
    height: 50vh;

    .result {
      display: flex;
      justify-content: center;
      align-items: center;

      .result-card {
        //width: 500px;
        //width: 50%
        max-width: 70%;
      }
    }
  }
}
</style>
