<template>
  <div>
    <Botit></Botit>
    <div class="btiaoti">
      <template>
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :value="item.value"></el-option>
        </el-select>
        <el-button class="queren">添加活动</el-button>
      </template>
    </div>
    <div>
      <el-form :inline="true" :model="huodong" class="demo-form-inline">
        <el-form-item>
          <p>活动名称</p>
          <el-input v-model="huodong.name" placeholder></el-input>
        </el-form-item>

        <el-form-item>
          <p>活动类型</p>
          <el-select v-model="typevalue" placeholder="请选择">
            <el-option v-for="item in types" :key="item.value" :value="item.value"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <p>职位/领导描述和组织名称</p>
          <el-input v-model="huodong.user" placeholder></el-input>
        </el-form-item>

        <el-row>
          <el-col :span="18">
            <el-form-item>
              <p>请描述此活动，包括您完成的工作以及您收到的任何表彰等。</p>
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容"
                v-model="txts"
                class="shurukuang"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <p class="demonstration">多选选择任意一级选项</p>
          <el-cascader :options="opts" :props="{ multiple: true, checkStrictly: true }" clearable></el-cascader>
        </el-form-item>
        <el-form-item>
          <p>参与时间</p>
          <el-select v-model="shijian" placeholder="请选择">
            <el-option v-for="item in types" :key="item.value" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <p>每周花费的时间</p>
          <el-input v-model="huodong.user" placeholder></el-input>
        </el-form-item>
        <el-form-item>
          <p>每年花费的周</p>
          <el-input v-model="huodong.user" placeholder></el-input>
        </el-form-item>
        <el-form-item>
          <p>是否愿意在大学里参加类似的活动</p>
          <el-radio v-model="radio" label="1">备选项</el-radio>
          <el-radio v-model="radio" label="2">备选项</el-radio>
        </el-form-item>
        <div>
          <el-form-item>
          <el-upload
            class="upload-demo"
            action
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="5"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>


<script>
import Botit from "./Botit";
export default {
  name: "Hd",
  props: {},
  data() {
    return {
      options: [
        {
          value: "活动1",
          label: "黄金糕"
        },
        {
          value: "活动2",
          label: "双皮奶"
        }
      ],
      value: "黄金糕",
      types: [
        {
          value: "社会活动",
          label: "社会活动"
        },
        {
          value: "义工活动",
          label: "义工活动"
        }
      ],
      typevalue: "社会活动",
      huodong: {
        name: "",
        type: "",
        user: "",
        txts: ""
      },
      txts: "",
      opts: [
        {
          value: "zhinan",
          label: "1"
        },
        {
          value: "daohang",
          label: "2"
        },
        {
          value: "dingbudaohang",
          label: "3"
        }
      ],
      shijian: "",
      shijian: [
        {
          value: "zhinan",
          label: "1"
        },
        {
          value: "daohang",
          label: "2"
        },
        {
          value: "dingbudaohang",
          label: "3"
        }
      ],
      radio: "",
      fileList: [
        {
          name: "",
          url: ""
        }
      ]
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  },
  components: {
    Botit
  }
};
</script>

<style scoped lang="scss">
.btiaoti {
  padding: 20px 0;
  border-bottom: 1px solid rgba(153, 153, 153, 1);
  .el-input__inner {
    height: 40px;
    line-height: 40px;
  }
  .el-form-item{
    margin-bottom: 20px !important;
  }
  .el-select {
    width: 582px;
  }
  .queren {
    width: 220px;
    background: rgba(179, 24, 24, 1);
    box-shadow: 0px 3px 6px rgba(204, 10, 10, 0.3);
    color: #fff;
    margin-left: 40px;
    border-radius: 10px;
  }
}
.shurukuang {
  width: 100% !important;
}
</style>
