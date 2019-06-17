<template>
  <div class="waper">
    <p class="xian"></p>
    <ul>
      <li class="head">
        <span>排名</span>
        <span>学校</span>
        <span>地区</span>
        <span>性质</span>
        <span>性质报名</span>
        <span>报名截止日期</span>
        <span>本科入学</span>
        <span>总入学人数</span>
        <span>学费</span>
        <span>师生比例</span>
        <span>班级规模学生比例</span>
      </li>
      <li v-for="(item, index) in tableData" :key="index">
        <span>{{item.num}}</span>
        <span>{{item.scholl}}</span>
        <span>{{item.city}}</span>
        <span>{{item.xingzhi}}</span>
        <span>{{item.riqi}}</span>
        <span>{{item.jzrq}}</span>
        <span>{{item.bkrx}}</span>
        <span>{{item.riqi}}</span>
        <span>{{item.shisu}}</span>
        <span>{{item.ssbl}}</span>
        <span>{{item.bjxsbl}}</span>
      </li>
    </ul>
    <div class="dibutu">
      <img src="../../static/img/pm01.png" alt>
      <i></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "pm2",
  props: {},
  data() {
    return {
      tableData: [
        {
          num: "1",
          scholl: "Williams College",
          city: "Williamstown, Massachusetts; Rural",
          xingzhi: "Private ",
          riqi: "15%",
          jzrq: "Jan.1;Nov.15",
          bkrx: "2,117",
          many: "$55,450 ",
          shisu: "$14,500",
          ssbl: "7:01",
          bjxsbl: "<20    76.3%;  20 - 49    21.7%;  >50    2%"
        },
        {
          num: "2",
          scholl: "Amherst College",
          city: "Amherst, Massachusetts; Rural",
          xingzhi: "Private ",
          riqi: "13%",
          jzrq: "Jan.1;Nov.15",
          bkrx: " 1,836",
          many: "$56,426",
          shisu: "$14,740",
          ssbl: "8:01",
          bjxsbl: "<20    70.5%;  20 - 49    26.7%;  >50    2.8%"
        },
        {
          num: "3",
          scholl: "Swarthmore College ",
          city: "Swarthmore, Pennsylvania; Suburban",
          xingzhi: "Private ",
          riqi: "11%",
          jzrq: "Jan.1;Nov.15",
          bkrx: "1,577",
          many: "$52,588",
          shisu: "$15,474 ",
          ssbl: "8:01",
          bjxsbl: "<20    73.5%;  20 - 49    23.8%;  >50    2.7%"
        },
        {
          num: "3",
          scholl: "Wellesley College",
          city: " Wellesley, Massachusetts; Suburban",
          xingzhi: "Private ",
          riqi: "22%",
          jzrq: "Jan.15;Nov.1",
          bkrx: "2,508",
          many: "$53,732",
          shisu: "$16,468 ",
          ssbl: "7:01",
          bjxsbl: "<20    70.3%;  20 - 49    29.5%;  >50    0.2%"
        },
        {
          num: "5",
          scholl: "Bowdoin College",
          city: "Brunswick, Maine; Suburban",
          xingzhi: "Private ",
          riqi: "14%",
          jzrq: "Jan.1;Nov.15",
          bkrx: "1,816",
          many: "$53,922",
          shisu: "$14,698 ",
          ssbl: "9:01",
          bjxsbl: "<20    66.3%;  20 - 49    31.4%;  >50    2.2%"
        },
        {
          num: "5",
          scholl: "Carleton College",
          city: "Northfield, Minnesota; Rural",
          xingzhi: "Private ",
          riqi: "21%",
          jzrq: "Jan.15;Nov.15",
          bkrx: "2,078",
          many: "$54,759 ",
          shisu: "$14,085",
          ssbl: "9:01",
          bjxsbl: "<20    69.6%;  20 - 49    29.8%;  >50    0.5%"
        },
        {
          num: "5",
          scholl: "Middlebury College",
          city: "Middlebury, Vermont; Rural",
          xingzhi: "Private ",
          riqi: "17%",
          jzrq: "Jan.1;Nov.1",
          bkrx: "2,603",
          many: "$54,450",
          shisu: "$15,530",
          ssbl: "8:01",
          bjxsbl: "<20    67.2%;  20 - 49    31.4%;  >50    1.3%"
        },
        {
          num: "5",
          scholl: "Pomona College",
          city: "Claremont, California; Suburban",
          xingzhi: "Private ",
          riqi: "8%",
          jzrq: "Jan.1;Nov.1",
          bkrx: "1,703",
          many: "$52,780",
          shisu: "$16,716 ",
          ssbl: "8:01",
          bjxsbl: "<20       71%;  20 - 49    28.4%;  >50    0.5%"
        },
        {
          num: "9",
          scholl: "Claremont McKenna College",
          city: "Claremont, California; Suburban",
          xingzhi: "Private ",
          riqi: "10%",
          jzrq: "Jan.5;Nov.1",
          bkrx: "1,345",
          many: "$54,405",
          shisu: "$16,705",
          ssbl: "8:01",
          bjxsbl: "<20    66.3%;  20 - 49    31.4%;  >50    2.2%"
        },
        {
          num: "10",
          scholl: "Davidson College",
          city: "Davidson, North Carolina;Suburban ",
          xingzhi: "Private ",
          riqi: "20%",
          jzrq: "Jan.2;nov.15",
          bkrx: "1,810",
          many: "$51,447",
          shisu: "$14,372",
          ssbl: "9:01",
          bjxsbl: "<20       71%;  20 - 49    28.4%;  >50    0.5%"
        },
        {
          num: "11",
          scholl: "Grinnell College ",
          city: "Grinnell, Iowa；Rural",
          xingzhi: "Private ",
          riqi: "29%",
          jzrq: "Jan.15;Nov.15",
          bkrx: "1,712",
          many: "$52,392",
          shisu: "$12,810",
          ssbl: "9:01",
          bjxsbl: "<20       63.4%;  20 - 49    36.3%;  >50    0.2%"
        },
        {
          num: "11",
          scholl: "Haverford College",
          city: "Haverford, Pennsylvania; Suburban",
          xingzhi: "Private ",
          riqi: "20%",
          jzrq: "Jan.15;Nov.15",
          bkrx: "1,296",
          many: "$54,592",
          shisu: "$16,402",
          ssbl: "9:01",
          bjxsbl: "<20       75.9%;  20 - 49    23.2%;  >50    0.8%"
        },
        {
          num: "11",
          scholl: "Smith College",
          city: "Northampton, Massachusetts; Suburban",
          xingzhi: "Private ",
          riqi: "32%",
          jzrq: "Jan.15;Nov.15",
          bkrx: "2,918",
          many: "$52,404",
          shisu: "$17,520 ",
          ssbl: "9:01",
          bjxsbl: "<20       67.9%;  20 - 49    28.4%;  >50    3.6%"
        },
        {
          num: "11",
          scholl: "Vassar College",
          city: "Poughkeepsie, N.Y.；Suburban",
          xingzhi: "Private ",
          riqi: "24%",
          jzrq: "Jan.1;Nov.15",
          bkrx: "2,353",
          many: "$56,960",
          shisu: "$13,550",
          ssbl: "8:01",
          bjxsbl: "<20       67.2%;  20 - 49    32.5%;  >50    0.3%"
        },
        {
          num: "11",
          scholl: "Washington and Lee University ",
          city: " Lexington, Va.; Suburban",
          xingzhi: "Private ",
          riqi: "22%",
          jzrq: "Jan.1;Nov.1",
          bkrx: "2,220",
          many: "$52,455",
          shisu: "$13,925 ",
          ssbl: "8:01",
          bjxsbl: "<20       71.6%;  20 - 49    28.4%;  >50    1%"
        },
        {
          num: "16",
          scholl: "Colgate University",
          city: " Hamilton, N.Y.; Rural",
          xingzhi: "Private ",
          riqi: "28%",
          jzrq: "Jan.15;Nov.15",
          bkrx: "2,881",
          many: "$55,870",
          shisu: "$13,995",
          ssbl: "9:01",
          bjxsbl: "<20       73.4%;  20 - 49    25.6%;  >50    1%"
        },
        {
          num: "16",
          scholl: "Hamilton College",
          city: " Clinton, N.Y.; Rural",
          xingzhi: "Private ",
          riqi: "24%",
          jzrq: "Jan.1;Nov.15",
          bkrx: "1,897",
          many: "$54,620",
          shisu: "$13,870 ",
          ssbl: "9:01",
          bjxsbl: "<20       74.6%;  20 - 49    24.9%;  >50    0.4%"
        },
        {
          num: "18",
          scholl: "Colby College ",
          city: " Waterville, Maine; Rural",
          xingzhi: "Private ",
          riqi: "16%",
          jzrq: "Jan.1;Nov.15",
          bkrx: "1,917",
          many: "$55,210 ",
          shisu: "$14,190",
          ssbl: "10:01",
          bjxsbl: "<20       71.4%;  20 - 49    26.9%;  >50    1.7%"
        },
        {
          num: "18",
          scholl: "Harvey Mudd College",
          city: "Claremont, California; Suburban",
          xingzhi: "Private ",
          riqi: "15%",
          jzrq: "Jan.5;Nov.15",
          bkrx: "844",
          many: "$56,876",
          shisu: "$18,127 ",
          ssbl: "8:01",
          bjxsbl: "<20       57.6%;  20 - 49    38.4%;  >50    4%"
        },
        {
          num: "18",
          scholl: "United States Military Academy",
          city: "West Point, N.Y.; Suburban",
          xingzhi: "Public",
          riqi: "10%",
          jzrq: "Feb.28",
          bkrx: "4,491",
          many: "0",
          shisu: "0",
          ssbl: "7:01",
          bjxsbl: "<20       96.9%;  20 - 49    3.1%;  >50    1%"
        },
        {
          num: "18",
          scholl: "Wesleyan University",
          city: "Middletown, Connecticut ; City",
          xingzhi: "Private ",
          riqi: "16%",
          jzrq: "Jan.1;Nov.15",
          bkrx: "3,213",
          many: "$54,614",
          shisu: "$16,090",
          ssbl: "8:01",
          bjxsbl: "<20       74.6%;  20 - 49    24.9%;  >50    0.4%"
        },
        {
          num: "22",
          scholl: "Bates College",
          city: "Lewiston, Maine; City",
          xingzhi: "Private ",
          riqi: "22%",
          jzrq: "Jan.1;Nov.15",
          bkrx: "1,787",
          many: "$53,794",
          shisu: "$15,224",
          ssbl: "10:01",
          bjxsbl: "<20       69.3%;  20 - 49    29.8%;  >50    0.9%"
        },
        {
          num: "22",
          scholl: "Soka University of America",
          city: "Aliso Viejo, California; Suburban",
          xingzhi: "Private ",
          riqi: "37%",
          jzrq: "Jan.15;Nov.1",
          bkrx: "427",
          many: "$33,146 ",
          shisu: "$12,530 ",
          ssbl: "8:01",
          bjxsbl: "<20       94.8%;  20 - 49    5.2%;  >50    1%"
        },
        {
          num: "22",
          scholl: "United States Naval Academy",
          city: "Annapolis, Maryland; City",
          xingzhi: "Public",
          riqi: "8%",
          jzrq: "Jan.31",
          bkrx: "4,495",
          many: "0",
          shisu: "0",
          ssbl: "8:01",
          bjxsbl: "<20       74.4%;  20 - 49    25.6%;  >50    1%"
        },
        {
          num: "25",
          scholl: "Barnard College",
          city: "New York, NY; Urban",
          xingzhi: "Private ",
          riqi: "15%",
          jzrq: "Jan.1;Nov.1",
          bkrx: "2,604",
          many: "$55,032",
          shisu: "$17,225",
          ssbl: "10:01",
          bjxsbl: "<20       73.1%;  20 - 49    19.8%;  >50    7.1%"
        },
        {
          num: "25",
          scholl: "University of Richmond",
          city: " Richmond, Virginia; Suburban",
          xingzhi: "Private ",
          riqi: "33%",
          jzrq: "Jan.15;Nov.1",
          bkrx: "4,023",
          many: "$52,610 ",
          shisu: "$12,250",
          ssbl: "8:01",
          bjxsbl: "<20       71.1%;  20 - 49    28.7%;  >50    0.2%"
        },
        {
          num: "27",
          scholl: "Bryn Mawr College ",
          city: " Bryn Mawr,Pennsylvania; Suburban",
          xingzhi: "Private ",
          riqi: "38%",
          jzrq: "Jan.15;Nov.15",
          bkrx: "1,640",
          many: "$52,360",
          shisu: "$16,500",
          ssbl: "8:01",
          bjxsbl: "<20       70.7%;  20 - 49    26.7%;  >50    2.7%"
        },
        {
          num: "27",
          scholl: "Colorado College",
          city: " Colorado Springs ,Colorado; City",
          xingzhi: "Private ",
          riqi: "15%",
          jzrq: "Jan.15; Nov.10",
          bkrx: "2,118",
          many: "$55,470",
          shisu: "$12,512 ",
          ssbl: "10:01",
          bjxsbl: "<20       71.3%;  20 - 49    28.7%;  >50    1%"
        },
        {
          num: "27",
          scholl: "Macalester College ",
          city: "Saint Paul, Minnesota； Urban",
          xingzhi: "Private ",
          riqi: "41%",
          jzrq: "Jan.15;Nov.15",
          bkrx: "2,136",
          many: "$54,348",
          shisu: "$12,156",
          ssbl: "10:01",
          bjxsbl: "<20       70.3%;  20 - 49    29.3%;  >50    0.5%"
        },
        {
          num: "30",
          scholl: "Kenyon College ",
          city: "Gambier, Ohio; Rural",
          xingzhi: "Private ",
          riqi: "34%",
          jzrq: "Jan.15;Nov.15",
          bkrx: "1,677",
          many: "$55,930",
          shisu: "$12,510",
          ssbl: "9:01",
          bjxsbl: "<20       74.4%;  20 - 49    25.1%;  >50    0.5%"
        },
        {
          num: "30",
          scholl: "Mount Holyoke College",
          city: "South Hadley, Massachusetts",
          xingzhi: "Private ",
          riqi: "51%",
          jzrq: "Jan.15;Nov.15",
          bkrx: "2,334",
          many: "$49,998",
          shisu: "$14,660",
          ssbl: "9:01",
          bjxsbl: "<20       72.8%;  20 - 49    25.8%;  >50    1.4%"
        },
        {
          num: "30",
          scholl: "Oberlin College",
          city: "Oberlin, Ohio; Suburban",
          xingzhi: "Private ",
          riqi: "34%",
          jzrq: "Jan.15;Nov.15",
          bkrx: "2,853",
          many: "$55,052 ",
          shisu: "$16,338 ",
          ssbl: "9:01",
          bjxsbl: "<20       78%;  20 - 49    20.3%;  >50    1.7%"
        },
        {
          num: "30",
          scholl: "Scripps College",
          city: "Claremont, California; Suburban",
          xingzhi: "Private ",
          riqi: "33%",
          jzrq: "Jan.1; Nov.15",
          bkrx: "1,077",
          many: "$55,024",
          shisu: "$16,932",
          ssbl: "10:01",
          bjxsbl: "<20       80%;  20 - 49    20%;  >50    1%"
        },
        {
          num: "30",
          scholl: "United States Air Force Academy",
          city: "Colorado; Suburban",
          xingzhi: "Public",
          riqi: "12%",
          jzrq: "Dec.31",
          bkrx: "4,276",
          many: "0",
          shisu: "0",
          ssbl: "9:01",
          bjxsbl: "<20       63.8%;  20 - 49    36.1%;  >50    0.1%"
        },
        {
          num: "35",
          scholl: "College of the Holy Cross ",
          city: "Worcester, Massachusetts; Suburban",
          xingzhi: "Private ",
          riqi: "40%",
          jzrq: "Jan.15; Dec.15",
          bkrx: "3,051",
          many: "$52,770",
          shisu: "$14,520 ",
          ssbl: "10:01",
          bjxsbl: "<20       58.4%;  20 - 49    39.9%;  >50    1.7%"
        },
        {
          num: "36",
          scholl: "Bucknell University",
          city: "Lewisburg, Pennsylvania; Rural",
          xingzhi: "Private ",
          riqi: "31%",
          jzrq: "Jan.15; Nov.15",
          bkrx: "3,678",
          many: "$56,092",
          shisu: "$13,662",
          ssbl: "9:01",
          bjxsbl: "<20       52%;  20 - 49    46.5%;  >50    1.5%"
        },
        {
          num: "36",
          scholl: "Franklin and Marshall College",
          city: "Lancaster, Pennsylvania; City",
          xingzhi: "Private ",
          riqi: "34%",
          jzrq: "Jan.15; Nov.15",
          bkrx: "2,283",
          many: "$56,550",
          shisu: "$14,050",
          ssbl: "9:01",
          bjxsbl: "<20       67.7%;  20 - 49    31.8%;  >50    0.5%"
        },
        {
          num: "36",
          scholl: "Lafayette College",
          city: " Easton,Pennsylvania; Suburban",
          xingzhi: "Private ",
          riqi: "31%",
          jzrq: "Jan.15; Nov.15",
          bkrx: "2,594",
          many: "$52,880",
          shisu: "$15,640",
          ssbl: "10:01",
          bjxsbl: "<20       61.2%;  20 - 49    38.2%;  >50    0.5%"
        },
        {
          num: "39",
          scholl: "Occidental College",
          city: " Los Angeles; California; Urban",
          xingzhi: "Private ",
          riqi: "42%",
          jzrq: "Jan.15; Nov.15",
          bkrx: "2,055",
          many: "$54,686",
          shisu: "$15,496",
          ssbl: "9:01",
          bjxsbl: "<20       67.1%;  20 - 49    32.9%;  >50    1%"
        },
        {
          num: "39",
          scholl: "Union College",
          city: "Schenectady, N.Y.; City",
          xingzhi: "Private ",
          riqi: "37%",
          jzrq: "Jan.15; Nov.15",
          bkrx: "2,267",
          many: "$55,290",
          shisu: "$13,563",
          ssbl: "10:01",
          bjxsbl: "<20       66.8%;  20 - 49    32.9%;  >50    0.3%"
        },
        {
          num: "41",
          scholl: "Pitzer College",
          city: "Claremont, California; Suburban",
          xingzhi: "Private ",
          riqi: "16%",
          jzrq: "Jan.1; Nov.15",
          bkrx: "1,112",
          many: "$52,236",
          shisu: "$16,264",
          ssbl: "11:01",
          bjxsbl: "<20       71.3%;  20 - 49    28.7%;  >50    1%"
        },
        {
          num: "41",
          scholl: "Skidmore College",
          city: "Saratoga Springs, N.Y.; Suburban",
          xingzhi: "Private ",
          riqi: "25%",
          jzrq: "Jan.15; Nov.15",
          bkrx: "2,684",
          many: "$54,270 ",
          shisu: "$14,494",
          ssbl: "8:01",
          bjxsbl: "<20       73.1%;  20 - 49    26.5%;  >50    0.4%"
        },
        {
          num: "43",
          scholl: "Denison University",
          city: "Granville, Ohio; Suburban",
          xingzhi: "Private ",
          riqi: "37%",
          jzrq: "Jan.15; Nov.15",
          bkrx: "2,341",
          many: "$51,960",
          shisu: "$12,710",
          ssbl: "9:01",
          bjxsbl: "<20       66.1%;  20 - 49    33.9%;  >50    1%"
        },
        {
          num: "43",
          scholl: "Thomas Aquinas College",
          city: "Santa Paula, California; Rural",
          xingzhi: "Private ",
          riqi: "72%",
          jzrq: "Rolling ",
          bkrx: "370",
          many: "$25,000",
          shisu: "$8,400",
          ssbl: "11:01",
          bjxsbl: "<20       100%;  20 - 49    0%;  >50    0%"
        },
        {
          num: "43",
          scholl: "Whitman College",
          city: "Walla Walla, Washington; Rural",
          xingzhi: "Private ",
          riqi: "52%",
          jzrq: "Jan.15; Nov.15",
          bkrx: "1,510",
          many: "$51,764",
          shisu: "$13,174",
          ssbl: "9:01",
          bjxsbl: "<20       69%;  20 - 49    31%;  >50    1%"
        },
        {
          num: "46",
          scholl: "Centre College",
          city: "Danville, Kentucky; City",
          xingzhi: "Private ",
          riqi: "76%",
          jzrq: "Jan.15;Nov.15",
          bkrx: "1,450",
          many: "$41,700",
          shisu: "$10,480",
          ssbl: "10:01",
          bjxsbl: "<20       60.6%;  20 - 49    39.4%;  >50    1%"
        },
        {
          num: "46",
          scholl: "Connecticut College",
          city: "New London, Connecticut; City",
          xingzhi: "Private ",
          riqi: "38%",
          jzrq: "Jan.1; Nov.15",
          bkrx: "1,817",
          many: "$54,820",
          shisu: "$15,150",
          ssbl: "9:01",
          bjxsbl: "<20       75%;  20 - 49    24.5%;  >50    0.5%"
        },
        {
          num: "46",
          scholl: "Trinity College",
          city: " Hartford, Connecticut; Urban",
          xingzhi: "Private ",
          riqi: "34%",
          jzrq: "Jan.15;Nov.15",
          bkrx: "2,282",
          many: "$56,910",
          shisu: "$14,750",
          ssbl: "9:01",
          bjxsbl: "<20       73.9%;  20 - 49    25.7%;  >50    0.4%"
        },
        {
          num: "49",
          scholl: "Gettysburg College",
          city: "Gettysburg, Pennsylvania; Suburban",
          xingzhi: "Private ",
          riqi: "46%",
          jzrq: "Jan.15;Nov.15",
          bkrx: "2,409",
          many: "$54,480",
          shisu: "$13,010 ",
          ssbl: "9:01",
          bjxsbl: "<20       69.2%;  20 - 49    31.6%;  >50    0.2%"
        },
        {
          num: "49",
          scholl: "Sewanee—University of the South",
          city: " Sewanee, Tennessee; Rural",
          xingzhi: "Private ",
          riqi: "47%",
          jzrq: "Feb.1; Nov.15",
          bkrx: "1,778",
          many: "$45,120 ",
          shisu: "$12,880",
          ssbl: "10:01",
          bjxsbl: "<20       63.3%;  20 - 49    35.6%;  >50    0.8%"
        }
      ]
    };
  }
};
</script>

<style scoped  lang="scss">
.waper {
  width: 1280px;
  margin: 0 auto;
  margin-bottom: 130px;
  .xian {
    border-top: 3px solid #707070;
    width: 100%;
    height: 0;
    margin-bottom: 25px;
  }
  ul {
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
          width: 60px;
        }
        &:nth-child(2) {
          width: 115px;
          padding: 20px 0;
        }
        &:nth-child(3) {
          width: 133px;
          padding: 20px 0;
        }
        &:nth-child(4) {
          width: 70px;
        }
        &:nth-child(5) {
          width: 80px;
        }
        &:nth-child(6) {
          width: 124px;
        }
        &:nth-child(7) {
          width: 90px;
        }
        &:nth-child(8) {
          width: 100px;
        }
        &:nth-child(9) {
          width: 88px;
        }
        &:nth-child(10) {
          width: 88px;
        }
        &:nth-child(11) {
          width: 284px;
          text-align: left;
        }
      }
      &:nth-child(2n) {
        background: #fafafa;
      }
    }
  }
  .dibutu {
    position: relative;
    overflow: hidden;
    height: 400px;
    margin-bottom: 100px;
    margin-top: 130px;
    img {
      position: absolute;
      width: 1920px;
      height: 400px;
      top: 0;
      left: 50%;
      margin-left: -960px;
    }
    i {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
