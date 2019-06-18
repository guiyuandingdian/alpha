<template>
  <div class="waper">
    <p class="xian waper"></p>
    <ul>
      <li class="head">
        <span>排名</span>
        <span>学校</span>
        <span>地区</span>
        <span>性质</span>
        <span>报名截止日期</span>
        <span>总入学人数</span>
        
        <span>学费</span>
        <span>食宿</span>
        <span>师生比例</span>
        <span>姓别</span>
        <span>班级规模学生比例</span>
      </li>
      <li v-for="(item, index) in tableData" :key="index">
        <span>{{item.num}}</span>
        <span>{{item.scholl}}</span>
        <span>{{item.city}}</span>
        <span>{{item.xingzhi}}</span>
        <span>{{item.bkrx}}</span>
        <span>{{item.riqi}}</span>
        <span>{{item.shisu}}</span>
        <span>{{item.ssbl}}</span>
        <span>{{item.ssbls}}</span>
        <span>{{item.xb}}</span>
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
          num: "1", //排名
          scholl: "Williams College", //学校
          city: "Williamstown, Massachusetts; Rural", //地区
          xingzhi: "Private ",    //性质
          riqi: "15%",  //录取率
          bkrx: "Jan.1;Nov.15", //报名时间
          riqi: "2,117",  //人数
          shisu: "$55,450 ", //学费
          ssbl: "$14,500",  // 食宿
          ssbls: "7:01",  // 师生比例
          bjxsbl: "<20    76.3%;  20 - 49    21.7%;  >50    2%", //班级学生比例
          xb: "Both" //姓别
        },
        {
          num: "2",
          scholl: "Amherst College",
          city: "Amherst, Massachusetts; Rural",
          xingzhi: "Private ",
          riqi: "13%",
          bkrx: "Jan.1;Nov.15",
          riqi: " 1,836",
          shisu: "$56,426",
          ssbl: "$14,740",
          ssbls: "8:01",
          bjxsbl: "<20    70.5%;  20 - 49    26.7%;  >50    2.8%",
          xb: "Both"
        },
        {
          num: "3",
          scholl: "Swarthmore College ",
          city: "Swarthmore, Pennsylvania; Suburban",
          xingzhi: "Private ",
          riqi: "11%",
          bkrx: "Jan.1;Nov.15",
          riqi: "1,577",
          shisu: "$52,588",
          ssbl: "$15,474 ",
          ssbls: "8:01",
          bjxsbl: "<20    73.5%;  20 - 49    23.8%;  >50    2.7%",
          xb: "Both"
        },
        {
          num: "3",
          scholl: "Wellesley College",
          city: " Wellesley, Massachusetts; Suburban",
          xingzhi: "Private ",
          riqi: "22%",
          bkrx: "Jan.15;Nov.1",
          riqi: "2,508",
          shisu: "$53,732",
          ssbl: "$16,468 ",
          ssbls: "7:01",
          bjxsbl: "<20    70.3%;  20 - 49    29.5%;  >50    0.2%",
          xb: "Female"
        },
        {
          num: "5",
          scholl: "Bowdoin College",
          city: "Brunswick, Maine; Suburban",
          xingzhi: "Private ",
          riqi: "14%",
          bkrx: "Jan.1;Nov.15",
          riqi: "1,816",
          shisu: "$53,922",
          ssbl: "$14,698 ",
          ssbls: "9:01",
          bjxsbl: "<20    66.3%;  20 - 49    31.4%;  >50    2.2%",
          xb: "Both"
        },
        {
          num: "5",
          scholl: "Carleton College",
          city: "Northfield, Minnesota; Rural",
          xingzhi: "Private ",
          riqi: "21%",
          bkrx: "Jan.15;Nov.15",
          riqi: "2,078",
          shisu: "$54,759 ",
          ssbl: "$14,085",
          ssbls: "9:01",
          bjxsbl: "<20    69.6%;  20 - 49    29.8%;  >50    0.5%",
          xb: "Both"
        },
        {
          num: "5",
          scholl: "Middlebury College",
          city: "Middlebury, Vermont; Rural",
          xingzhi: "Private ",
          riqi: "17%",
          bkrx: "Jan.1;Nov.1",
          riqi: "2,603",
          shisu: "$54,450",
          ssbl: "$15,530",
          ssbls: "8:01",
          bjxsbl: "<20    67.2%;  20 - 49    31.4%;  >50    1.3%",
          xb: "Both"
        },
        {
          num: "5",
          scholl: "Pomona College",
          city: "Claremont, California; Suburban",
          xingzhi: "Private ",
          riqi: "8%",
          bkrx: "Jan.1;Nov.1",
          riqi: "1,703",
          shisu: "$52,780",
          ssbl: "$16,716 ",
          ssbls: "8:01",
          bjxsbl: "<20       71%;  20 - 49    28.4%;  >50    0.5%",
          xb: "Both"
        },
        {
          num: "9",
          scholl: "Claremont McKenna College",
          city: "Claremont, California; Suburban",
          xingzhi: "Private ",
          riqi: "10%",
          bkrx: "Jan.5;Nov.1",
          riqi: "1,345",
          shisu: "$54,405",
          ssbl: "$16,705",
          ssbls: "8:01",
          bjxsbl: "<20    66.3%;  20 - 49    31.4%;  >50    2.2%",
          xb: "Both"
        },
        {
          num: "10",
          scholl: "Davidson College",
          city: "Davidson, North Carolina;Suburban ",
          xingzhi: "Private ",
          riqi: "20%",
          bkrx: "Jan.2;nov.15",
          riqi: "1,810",
          shisu: "$51,447",
          ssbl: "$14,372",
          ssbls: "9:01",
          bjxsbl: "<20       71%;  20 - 49    28.4%;  >50    0.5%",
          xb: "Both"
        },
        {
          num: "11",
          scholl: "Grinnell College ",
          city: "Grinnell, Iowa；Rural",
          xingzhi: "Private ",
          riqi: "29%",
          bkrx: "Jan.15;Nov.15",
          riqi: "1,712",
          shisu: "$52,392",
          ssbl: "$12,810",
          ssbls: "9:01",
          bjxsbl: "<20       63.4%;  20 - 49    36.3%;  >50    0.2%",
          xb: "Both"
        },
        {
          num: "11",
          scholl: "Haverford College",
          city: "Haverford, Pennsylvania; Suburban",
          xingzhi: "Private ",
          riqi: "20%",
          bkrx: "Jan.15;Nov.15",
          riqi: "1,296",
          shisu: "$54,592",
          ssbl: "$16,402",
          ssbls: "9:01",
          bjxsbl: "<20       75.9%;  20 - 49    23.2%;  >50    0.8%",
          xb: "Both"
        },
        {
          num: "11",
          scholl: "Smith College",
          city: "Northampton, Massachusetts; Suburban",
          xingzhi: "Private ",
          riqi: "32%",
          bkrx: "Jan.15;Nov.15",
          riqi: "2,918",
          shisu: "$52,404",
          ssbl: "$17,520 ",
          ssbls: "9:01",
          bjxsbl: "<20       67.9%;  20 - 49    28.4%;  >50    3.6%",
          xb: "Female"
        },
        {
          num: "11",
          scholl: "Vassar College",
          city: "Poughkeepsie, N.Y.；Suburban",
          xingzhi: "Private ",
          riqi: "24%",
          bkrx: "Jan.1;Nov.15",
          riqi: "2,353",
          shisu: "$56,960",
          ssbl: "$13,550",
          ssbls: "8:01",
          bjxsbl: "<20       67.2%;  20 - 49    32.5%;  >50    0.3%",
          xb: "Both"
        },
        {
          num: "11",
          scholl: "Washington and Lee University ",
          city: " Lexington, Va.; Suburban",
          xingzhi: "Private ",
          riqi: "22%",
          bkrx: "Jan.1;Nov.1",
          riqi: "2,220",
          shisu: "$52,455",
          ssbl: "$13,925 ",
          ssbls: "8:01",
          bjxsbl: "<20       71.6%;  20 - 49    28.4%;  >50    1%",
          xb: "Both"
        },
        {
          num: "16",
          scholl: "Colgate University",
          city: " Hamilton, N.Y.; Rural",
          xingzhi: "Private ",
          riqi: "28%",
          bkrx: "Jan.15;Nov.15",
          riqi: "2,881",
          shisu: "$55,870",
          ssbl: "$13,995",
          ssbls: "9:01",
          bjxsbl: "<20       73.4%;  20 - 49    25.6%;  >50    1%",
          xb: "Both"
        },
        {
          num: "16",
          scholl: "Hamilton College",
          city: " Clinton, N.Y.; Rural",
          xingzhi: "Private ",
          riqi: "24%",
          bkrx: "Jan.1;Nov.15",
          riqi: "1,897",
          shisu: "$54,620",
          ssbl: "$13,870 ",
          ssbls: "9:01",
          bjxsbl: "<20       74.6%;  20 - 49    24.9%;  >50    0.4%",
          xb: "Both"
        },
        {
          num: "18",
          scholl: "Colby College ",
          city: " Waterville, Maine; Rural",
          xingzhi: "Private ",
          riqi: "16%",
          bkrx: "Jan.1;Nov.15",
          riqi: "1,917",
          shisu: "$55,210 ",
          ssbl: "$14,190",
          ssbls: "10:01",
          bjxsbl: "<20       71.4%;  20 - 49    26.9%;  >50    1.7%",
          xb: "Both"
        },
        {
          num: "18",
          scholl: "Harvey Mudd College",
          city: "Claremont, California; Suburban",
          xingzhi: "Private ",
          riqi: "15%",
          bkrx: "Jan.5;Nov.15",
          riqi: "844",
          shisu: "$56,876",
          ssbl: "$18,127 ",
          ssbls: "8:01",
          bjxsbl: "<20       57.6%;  20 - 49    38.4%;  >50    4%",
          xb: "Both"
        },
        {
          num: "18",
          scholl: "United States Military Academy",
          city: "West Point, N.Y.; Suburban",
          xingzhi: "Public",
          riqi: "10%",
          bkrx: "Feb.28",
          riqi: "4,491",
          shisu: "0",
          ssbl: "0",
          ssbls: "7:01",
          bjxsbl: "<20       96.9%;  20 - 49    3.1%;  >50    1%",
          xb: "Both"
        },
        {
          num: "18",
          scholl: "Wesleyan University",
          city: "Middletown, Connecticut ; City",
          xingzhi: "Private ",
          riqi: "16%",
          bkrx: "Jan.1;Nov.15",
          riqi: "3,213",
          shisu: "$54,614",
          ssbl: "$16,090",
          ssbls: "8:01",
          bjxsbl: "<20       74.6%;  20 - 49    24.9%;  >50    0.4%",
          xb: "Both"
        },
        {
          num: "22",
          scholl: "Bates College",
          city: "Lewiston, Maine; City",
          xingzhi: "Private ",
          riqi: "22%",
          bkrx: "Jan.1;Nov.15",
          riqi: "1,787",
          shisu: "$53,794",
          ssbl: "$15,224",
          ssbls: "10:01",
          bjxsbl: "<20       69.3%;  20 - 49    29.8%;  >50    0.9%",
          xb: "Both"
        },
        {
          num: "22",
          scholl: "Soka University of America",
          city: "Aliso Viejo, California; Suburban",
          xingzhi: "Private ",
          riqi: "37%",
          bkrx: "Jan.15;Nov.1",
          riqi: "427",
          shisu: "$33,146 ",
          ssbl: "$12,530 ",
          ssbls: "8:01",
          bjxsbl: "<20       94.8%;  20 - 49    5.2%;  >50    1%",
          xb: "Both"
        },
        {
          num: "22",
          scholl: "United States Naval Academy",
          city: "Annapolis, Maryland; City",
          xingzhi: "Public",
          riqi: "8%",
          bkrx: "Jan.31",
          riqi: "4,495",
          shisu: "0",
          ssbl: "0",
          ssbls: "8:01",
          bjxsbl: "<20       74.4%;  20 - 49    25.6%;  >50    1%",
          xb: "Both"
        },
        {
          num: "25",
          scholl: "Barnard College",
          city: "New York, NY; Urban",
          xingzhi: "Private ",
          riqi: "15%",
          bkrx: "Jan.1;Nov.1",
          riqi: "2,604",
          shisu: "$55,032",
          ssbl: "$17,225",
          ssbls: "10:01",
          bjxsbl: "<20       73.1%;  20 - 49    19.8%;  >50    7.1%",
          xb: "Female"
        },
        {
          num: "25",
          scholl: "University of Richmond",
          city: " Richmond, Virginia; Suburban",
          xingzhi: "Private ",
          riqi: "33%",
          bkrx: "Jan.15;Nov.1",
          riqi: "4,023",
          shisu: "$52,610 ",
          ssbl: "$12,250",
          ssbls: "8:01",
          bjxsbl: "<20       71.1%;  20 - 49    28.7%;  >50    0.2%",
          xb: "Both"
        },
        {
          num: "27",
          scholl: "Bryn Mawr College ",
          city: " Bryn Mawr,Pennsylvania; Suburban",
          xingzhi: "Private ",
          riqi: "38%",
          bkrx: "Jan.15;Nov.15",
          riqi: "1,640",
          shisu: "$52,360",
          ssbl: "$16,500",
          ssbls: "8:01",
          bjxsbl: "<20       70.7%;  20 - 49    26.7%;  >50    2.7%",
          xb: "Female"
        },
        {
          num: "27",
          scholl: "Colorado College",
          city: " Colorado Springs ,Colorado; City",
          xingzhi: "Private ",
          riqi: "15%",
          bkrx: "Jan.15; Nov.10",
          riqi: "2,118",
          shisu: "$55,470",
          ssbl: "$12,512 ",
          ssbls: "10:01",
          bjxsbl: "<20       71.3%;  20 - 49    28.7%;  >50    1%",
          xb: "Both"
        },
        {
          num: "27",
          scholl: "Macalester College ",
          city: "Saint Paul, Minnesota； Urban",
          xingzhi: "Private ",
          riqi: "41%",
          bkrx: "Jan.15;Nov.15",
          riqi: "2,136",
          shisu: "$54,348",
          ssbl: "$12,156",
          ssbls: "10:01",
          bjxsbl: "<20       70.3%;  20 - 49    29.3%;  >50    0.5%",
          xb: "Both"
        },
        {
          num: "30",
          scholl: "Kenyon College ",
          city: "Gambier, Ohio; Rural",
          xingzhi: "Private ",
          riqi: "34%",
          bkrx: "Jan.15;Nov.15",
          riqi: "1,677",
          shisu: "$55,930",
          ssbl: "$12,510",
          ssbls: "9:01",
          bjxsbl: "<20       74.4%;  20 - 49    25.1%;  >50    0.5%",
          xb: "Both"
        },
        {
          num: "30",
          scholl: "Mount Holyoke College",
          city: "South Hadley, Massachusetts",
          xingzhi: "Private ",
          riqi: "51%",
          bkrx: "Jan.15;Nov.15",
          riqi: "2,334",
          shisu: "$49,998",
          ssbl: "$14,660",
          ssbls: "9:01",
          bjxsbl: "<20       72.8%;  20 - 49    25.8%;  >50    1.4%",
          xb: "Female"
        },
        {
          num: "30",
          scholl: "Oberlin College",
          city: "Oberlin, Ohio; Suburban",
          xingzhi: "Private ",
          riqi: "34%",
          bkrx: "Jan.15;Nov.15",
          riqi: "2,853",
          shisu: "$55,052 ",
          ssbl: "$16,338 ",
          ssbls: "9:01",
          bjxsbl: "<20       78%;  20 - 49    20.3%;  >50    1.7%",
          xb: "Both"
        },
        {
          num: "30",
          scholl: "Scripps College",
          city: "Claremont, California; Suburban",
          xingzhi: "Private ",
          riqi: "33%",
          bkrx: "Jan.1; Nov.15",
          riqi: "1,077",
          shisu: "$55,024",
          ssbl: "$16,932",
          ssbls: "10:01",
          bjxsbl: "<20       80%;  20 - 49    20%;  >50    1%",
          xb: "Female"
        },
        {
          num: "30",
          scholl: "United States Air Force Academy",
          city: "Colorado; Suburban",
          xingzhi: "Public",
          riqi: "12%",
          bkrx: "Dec.31",
          riqi: "4,276",
          shisu: "0",
          ssbl: "0",
          ssbls: "9:01",
          bjxsbl: "<20       63.8%;  20 - 49    36.1%;  >50    0.1%",
          xb: "Both"
        },
        {
          num: "35",
          scholl: "College of the Holy Cross ",
          city: "Worcester, Massachusetts; Suburban",
          xingzhi: "Private ",
          riqi: "40%",
          bkrx: "Jan.15; Dec.15",
          riqi: "3,051",
          shisu: "$52,770",
          ssbl: "$14,520 ",
          ssbls: "10:01",
          bjxsbl: "<20       58.4%;  20 - 49    39.9%;  >50    1.7%",
          xb: "Both"
        },
        {
          num: "36",
          scholl: "Bucknell University",
          city: "Lewisburg, Pennsylvania; Rural",
          xingzhi: "Private ",
          riqi: "31%",
          bkrx: "Jan.15; Nov.15",
          riqi: "3,678",
          shisu: "$56,092",
          ssbl: "$13,662",
          ssbls: "9:01",
          bjxsbl: "<20       52%;  20 - 49    46.5%;  >50    1.5%",
          xb: "Both"
        },
        {
          num: "36",
          scholl: "Franklin and Marshall College",
          city: "Lancaster, Pennsylvania; City",
          xingzhi: "Private ",
          riqi: "34%",
          bkrx: "Jan.15; Nov.15",
          riqi: "2,283",
          shisu: "$56,550",
          ssbl: "$14,050",
          ssbls: "9:01",
          bjxsbl: "<20       67.7%;  20 - 49    31.8%;  >50    0.5%",
          xb: "Both"
        },
        {
          num: "36",
          scholl: "Lafayette College",
          city: " Easton,Pennsylvania; Suburban",
          xingzhi: "Private ",
          riqi: "31%",
          bkrx: "Jan.15; Nov.15",
          riqi: "2,594",
          shisu: "$52,880",
          ssbl: "$15,640",
          ssbls: "10:01",
          bjxsbl: "<20       61.2%;  20 - 49    38.2%;  >50    0.5%",
          xb: "Both"
        },
        {
          num: "39",
          scholl: "Occidental College",
          city: " Los Angeles; California; Urban",
          xingzhi: "Private ",
          riqi: "42%",
          bkrx: "Jan.15; Nov.15",
          riqi: "2,055",
          shisu: "$54,686",
          ssbl: "$15,496",
          ssbls: "9:01",
          bjxsbl: "<20       67.1%;  20 - 49    32.9%;  >50    1%",
          xb: "Both"
        },
        {
          num: "39",
          scholl: "Union College",
          city: "Schenectady, N.Y.; City",
          xingzhi: "Private ",
          riqi: "37%",
          bkrx: "Jan.15; Nov.15",
          riqi: "2,267",
          shisu: "$55,290",
          ssbl: "$13,563",
          ssbls: "10:01",
          bjxsbl: "<20       66.8%;  20 - 49    32.9%;  >50    0.3%",
          xb: "Both"
        },
        {
          num: "41",
          scholl: "Pitzer College",
          city: "Claremont, California; Suburban",
          xingzhi: "Private ",
          riqi: "16%",
          bkrx: "Jan.1; Nov.15",
          riqi: "1,112",
          shisu: "$52,236",
          ssbl: "$16,264",
          ssbls: "11:01",
          bjxsbl: "<20       71.3%;  20 - 49    28.7%;  >50    1%",
          xb: "Both"
        },
        {
          num: "41",
          scholl: "Skidmore College",
          city: "Saratoga Springs, N.Y.; Suburban",
          xingzhi: "Private ",
          riqi: "25%",
          bkrx: "Jan.15; Nov.15",
          riqi: "2,684",
          shisu: "$54,270 ",
          ssbl: "$14,494",
          ssbls: "8:01",
          bjxsbl: "<20       73.1%;  20 - 49    26.5%;  >50    0.4%",
          xb: "Both"
        },
        {
          num: "43",
          scholl: "Denison University",
          city: "Granville, Ohio; Suburban",
          xingzhi: "Private ",
          riqi: "37%",
          bkrx: "Jan.15; Nov.15",
          riqi: "2,341",
          shisu: "$51,960",
          ssbl: "$12,710",
          ssbls: "9:01",
          bjxsbl: "<20       66.1%;  20 - 49    33.9%;  >50    1%",
          xb: "Both"
        },
        {
          num: "43",
          scholl: "Thomas Aquinas College",
          city: "Santa Paula, California; Rural",
          xingzhi: "Private ",
          riqi: "72%",
          bkrx: "Rolling ",
          riqi: "370",
          shisu: "$25,000",
          ssbl: "$8,400",
          ssbls: "11:01",
          bjxsbl: "<20       100%;  20 - 49    0%;  >50    0%",
          xb: "Both"
        },
        {
          num: "43",
          scholl: "Whitman College",
          city: "Walla Walla, Washington; Rural",
          xingzhi: "Private ",
          riqi: "52%",
          bkrx: "Jan.15; Nov.15",
          riqi: "1,510",
          shisu: "$51,764",
          ssbl: "$13,174",
          ssbls: "9:01",
          bjxsbl: "<20       69%;  20 - 49    31%;  >50    1%",
          xb: "Both"
        },
        {
          num: "46",
          scholl: "Centre College",
          city: "Danville, Kentucky; City",
          xingzhi: "Private ",
          riqi: "76%",
          bkrx: "Jan.15;Nov.15",
          riqi: "1,450",
          shisu: "$41,700",
          ssbl: "$10,480",
          ssbls: "10:01",
          bjxsbl: "<20       60.6%;  20 - 49    39.4%;  >50    1%",
          xb: "Both"
        },
        {
          num: "46",
          scholl: "Connecticut College",
          city: "New London, Connecticut; City",
          xingzhi: "Private ",
          riqi: "38%",
          bkrx: "Jan.1; Nov.15",
          riqi: "1,817",
          shisu: "$54,820",
          ssbl: "$15,150",
          ssbls: "9:01",
          bjxsbl: "<20       75%;  20 - 49    24.5%;  >50    0.5%",
          xb: "Both"
        },
        {
          num: "46",
          scholl: "Trinity College",
          city: " Hartford, Connecticut; Urban",
          xingzhi: "Private ",
          riqi: "34%",
          bkrx: "Jan.15;Nov.15",
          riqi: "2,282",
          shisu: "$56,910",
          ssbl: "$14,750",
          ssbls: "9:01",
          bjxsbl: "<20       73.9%;  20 - 49    25.7%;  >50    0.4%",
          xb: "Both"
        },
        {
          num: "49",
          scholl: "Gettysburg College",
          city: "Gettysburg, Pennsylvania; Suburban",
          xingzhi: "Private ",
          riqi: "46%",
          bkrx: "Jan.15;Nov.15",
          riqi: "2,409",
          shisu: "$54,480",
          ssbl: "$13,010 ",
          ssbls: "9:01",
          bjxsbl: "<20       69.2%;  20 - 49    31.6%;  >50    0.2%",
          xb: "Both"
        },
        {
          num: "49",
          scholl: "Sewanee—University of the South",
          city: " Sewanee, Tennessee; Rural",
          xingzhi: "Private ",
          riqi: "47%",
          bkrx: "Feb.1; Nov.15",
          riqi: "1,778",
          shisu: "$45,120 ",
          ssbl: "$12,880",
          ssbls: "10:01",
          bjxsbl: "<20       63.3%;  20 - 49    35.6%;  >50    0.8%",
          xb: "Both"
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
          width: 100px;
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
          width: 100px;
        }
        &:nth-child(6) {
          width: 114px;
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
          width: 279px;
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
