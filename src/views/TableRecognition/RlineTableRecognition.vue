<template>
  <div class="rline-table-recognition">
    <p>表格识别</p>
    <el-steps :active=active align-center>
      <el-step title="上传"></el-step>
      <el-step title="系统处理中"></el-step>
      <el-step title="结果"></el-step>
    </el-steps>
    <div class="main">
      <el-upload
        v-if="active===0"
        class="upload-demo"
        drag
        action="/api/earn_rlinetable"
        name="file"
        :on-success="successFunction"
        :before-upload="beforeFunction"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传JPG/PNG文件</div>
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
          <el-alert type="success" show-icon :closable="false">
            <template v-slot:title>识别成功！当前共检测出{{ fileNum }}张表格</template>
          </el-alert>
          <template>
            <el-table
              :data="fileData"
              stripe
              style="width: 100%">
              <el-table-column
                prop="page"
                label="页码"
                width="180">
              </el-table-column>
              <el-table-column
                label="预览"
                width="180">
                <template v-slot="scope">
                  <el-button @click="showHtmlDialog(scope.row.html, scope.$index)">
                    <i class="el-icon-view"></i>
                    点击预览
                  </el-button>
                </template>
              </el-table-column>
              <el-table-column
                label="文件下载">
                <template v-slot="scope">
                  <el-button @click="downloadFile(scope.row.url)">
                    <i class="el-icon-download"></i>
                    点击下载
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
          <el-button type="primary" @click="active=0" class="btn-return">返回</el-button>
        </el-card>
      </div>
      <!--      测试 部分-->
      <!--      测试END-->
    </div>
    <el-dialog
      title="预览"
      :visible.sync="dialogVisible"
      width="30%">
      <span v-html="htmlData" class="html-data"></span>
      <span slot="footer" class="dialog-footer">
    <!--    <el-button @click="dialogVisible = false">取 消</el-button>-->
          <el-button type="primary" @click="dialogVisible = false">关闭</el-button>
          </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'RlineTableRecognition',
  data () {
    return {
      active: 0,
      dialogVisible: false,
      htmlData: '',
      // urlList: ['https://cdn.dramaclub.cn/usr/uploads/2022/05/f3ef5d6b37edbad4413ace8abd1c918b_31.jpg',
      //   'https://cdn.dramaclub.cn/usr/uploads/2022/05/3cfe3d7a4ac300965afe93e848ad89bc_48.jpg'],
      fileData: []
    }
  },
  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
    },
    downloadFile (url) {
      window.location.href = url
    },
    showHtmlDialog (html, index) {
      this.dialogVisible = true
      this.htmlData = html
      console.log(index)
    },
    successFunction (response) {
      if (response.code === 200 && response.fileData !== null) {
        this.active = 3
        this.$notify({
          title: '成功',
          message: 'OCR识别成功',
          type: 'success'
        })
        this.fileData = response.fileData
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
  },
  computed: {
    fileNum () {
      return this.fileData.length
    }
  }
}
</script>

<style scoped lang="less">
.rline-table-recognition {
  .html-data {
    display: flex;
    justify-content: center;
    align-items: center;

    /deep/ table {
      border-collapse: collapse;
    }

    /deep/ table, /deep/ th, /deep/ td {
      border: 1px solid black;
    }

    /deep/ td {
      padding: 15px;
    }
  }

  .main {
    margin-top: 20px;
    height: 50px;

    .result {
      display: flex;
      justify-content: center;
      align-items: center;

      .result-card {
        //width: 500px;
        //width: 50%
        max-width: 70%;
        min-width: 50%;
      }
    }

    .btn-return {
      margin-top: 20px;
    }
  }
}
</style>
