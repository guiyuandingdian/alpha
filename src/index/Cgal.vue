<template>
  <div>
    <div class="banner">
      <img src="../../static/img/banner16.png" alt class="banner">
      <i></i>
    </div>
    <div class="cgal waper">
      <div
        class="xuexiao"
        v-for="(item, index) in list"
        :key="index"
        :class="[{'set': item.type === 0}]"
      >
        <div class="tupian">
          <a :href="item.imgs" target="_black">
            <img :src="item.img">
          </a>
          <div class="wb">
            <el-row class="bitao wp">
              <el-col :span="12">
                <div>{{item.name}}</div>
              </el-col>
              <el-col :span="12">
                <div>{{item.school}}</div>
              </el-col>
            </el-row>
            <el-row class="gogo wp">
              <el-col :span="6">
                <div>GPA</div>
              </el-col>
              <el-col :span="6">
                <div>TOEFL</div>
              </el-col>
              <el-col :span="6">
                <div>IELTS</div>
              </el-col>
              <el-col :span="6">
                <div>SAT</div>
              </el-col>
            </el-row>
            <el-row class="zhen">
              <el-col :span="6">
                <div>{{item.gpa}}</div>
              </el-col>
              <el-col :span="6">
                <div>{{item.toefl}}</div>
              </el-col>
              <el-col :span="6">
                <div>{{item.ielts}}</div>
              </el-col>
              <el-col :span="6">
                <div>{{item.sat}}</div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    <ul class="waper weqwe">
      <li class="head">
        <span>姓名</span>
        <span>学校</span>
        <span>GPA</span>
        <span>TOEFL</span>
        <span>IELTS</span>
        <span>SAT</span>
      </li>
      <li v-for="(item, index) in list" :key="index" :class="[{'set': item.type === 1}]">
        <span>{{item.name}}</span>
        <span>{{item.school}}</span>
        <span>{{item.gpa}}</span>
        <span>{{item.toefl}}</span>
        <span>{{item.ielts}}</span>
        <span>{{item.sat}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Cgal",
  props: {},
  data() {
    return {
      list: [
        {
          imgs: "../../static/img/cg01.png",
          img: "../../static/img/cg01.png",
          name: "X同学",
          school: "/",
          gpa: "3.85",
          toefl: "/",
          ielts: "7",
          sat: "/",
          type: 1
        },
        {
          imgs: "../../static/img/cg02.png",
          img: "../../static/img/cg02.png",
          name: "z同学xiaolan",
          school: "/",
          gpa: "3.9",
          toefl: "/",
          ielts: "7.5",
          sat: "/",
          type: 1
        },
        {
          imgs: "../../static/img/cg03.png",
          img: "../../static/img/cg03.png",
          name: "X同学zhiyi",
          school: "/",
          gpa: "3.9",
          toefl: "/",
          ielts: "7.5",
          sat: "/",
          type: 1
        },
        {
          imgs: "../../static/img/cg04.png",
          img: "../../static/img/cg04.png",
          name: "X同学zhiyi",
          school: "/",
          gpa: "3.85",
          toefl: "/",
          ielts: "7.5",
          sat: "/",
          type: 1
        },
        {
          imgs: "../../static/img/cg05.png",
          img: "../../static/img/cg05.png",
          name: "吴同学",
          school: "美国康奈尔大学",
          gpa: "3.9",
          toefl: "110",
          ielts: "/",
          sat: "1500",
          type: 1
        },
        {
          imgs: "../../static/img/cg06.png",
          img: "../../static/img/cg06.png",
          name: "黄同学",
          school: "美国康奈尔大学",
          gpa: "4",
          toefl: "115",
          ielts: "7.5",
          sat: "1520",
          type: 1
        },
        {
          imgs: "",
          img: "",
          name: "倪同学",
          school: "牛津大学;伦敦大学国王学院",
          gpa: "3.8",
          toefl: "/",
          ielts: "7.5",
          sat: "/",
          type: 0
        },
        {
          imgs: "",
          img: "",
          name: "吴同学",
          school: "伦敦大学国王学院",
          gpa: "3.85",
          toefl: "/",
          ielts: "7",
          sat: "/",
          type: 0
        },
        {
          imgs: "../../static/img/cg09.png",
          img: "../../static/img/cg09.png",
          name: "Yifei",
          school: "罗切斯特大学",
          gpa: "3.8",
          toefl: "105",
          ielts: "/",
          sat: "1450",
          type: 1
        },
        {
          imgs: "",
          img: "",
          name: "Yiheng Chen",
          school: "曼彻斯特大学",
          gpa: "3.8",
          toefl: "/",
          ielts: "7",
          sat: "/",
          type: 0
        },
        {
          imgs: "",
          img: "",
          name: "Jiawei",
          school: "巴布森学院",
          gpa: "3.8",
          toefl: "107",
          ielts: "/",
          sat: "1440",
          type: 0
        },
        {
          imgs: "",
          img: "",
          name: "罗迈",
          school: "纽约大学阿布扎比分校",
          gpa: "3.85",
          toefl: "112",
          ielts: "/",
          sat: "1480",
          type: 0
        },
        {
          imgs: "",
          img: "",
          name: "芮芃",
          school: "康奈尔大学",
          gpa: "3.9",
          toefl: "118",
          ielts: "/",
          sat: "1540",
          type: 0
        },
        {
          imgs: "",
          img: "",
          name: "刘同学",
          school: "纽约大学斯坦哈特文化、教育与人类发展学院",
          gpa: "3.8",
          toefl: "115",
          ielts: "/",
          sat: "1550",
          type: 0
        },
        {
          imgs: "",
          img: "",
          name: "杨同学",
          school: "范德堡大学",
          gpa: "3.9",
          toefl: "108",
          ielts: "/",
          sat: "1490",
          type: 0
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.waper {
  width: 1280px;
  margin: 0 auto;
}
.banner {
  font-size: 0;
  line-height: 0;
  position: relative;
  height: 400px;
  img {
    position: absolute;
    width: 1920px;
    height: 400px;
    left: 50%;
    margin-left: -960px;
  }
  i {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background: rgba(0, 0, 0, 0.4);
  }
}
.cgal {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 100px;
  .xuexiao {
    width: 600px;
    background: rgba(242, 242, 242, 1);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.16);
    margin-bottom: 100px;
    height: 500px;
    overflow: hidden;
    .tupian {
      a {
        display: block;
        height: 500px;
        font-size: 0;
        line-height: 0;
        overflow: hidden;
        img {
          min-width: 100%;
          min-height: 100%;
        }
      }
      .wb {
        height: 200px;
        text-align: center;
        background: #f2f2f2;
        color: #333333;
        .wp {
          width: 420px;
          margin: 0 auto;
        }
        .bitao {
          border-bottom: 1px solid #707070;
          font-size: 18px;
          font-weight: bold;
          overflow: hidden;
          height: 70px;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        .gogo {
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
          padding: 20px 0;
        }
        .zhen {
          padding: 0 90px;
          background: #fff;
          line-height: 40px;
          font-size: 16px;
          font-weight: 600;
        }
      }
    }
    &:hover {
      height: 700px;
    }
  }
  .set {
    display: none !important;
  }
}
.weqwe {
  margin-bottom: 100px;
  .head {
    background: #333333;
    height: 40px;
    margin-bottom: 10px;
    span {
      color: #fff;
      display: inline-block;
      text-align: center;
      padding: 10px 0 !important;
      line-height: 20px;
    }
  }
  li {
    span {
      display: inline-block;
      text-align: center;
      line-height: 20px;
      padding: 30px 0;
      vertical-align: middle;
      &:nth-child(1) {
        width: 200px;
      }
      &:nth-child(2) {
        width: 250px;
      }
      &:nth-child(3) {
        width: 200px;
      }
      &:nth-child(4) {
        width: 200px;
      }
      &:nth-child(5) {
        width: 200px;
      }
      &:nth-child(6) {
        width: 206px;
      }
    }
    &:nth-child(2n) {
      background: #fafafa;
    }
  }
  .set {
    display: none !important;
  }
}
</style>
