<template>
  <div class="wapers">
    <p class="xian waper"></p>
    <ul class="waper">
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
        <span>食宿</span>
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
        <span>{{item.many}}</span>
        <span>{{item.xuefei}}</span>
        <span>{{item.shisus}}</span>
        <span>{{item.ssbl}}</span>
        <span>{{item.bjxsbl}}</span>
      </li>
    </ul>
    <div class="dibutu">
      <img src="../../static/img/sjgh07.png" alt>
      <i></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "pm1",
  props: {},
  data() {
    return {
      tableData: [
        {
          num: "1", //排名
          scholl: "Princeton University", //学校
          city: "Princeton - Suburban", //地区
          xingzhi: "Private", //性质
          riqi: "6%", //性质报名
          jzrq: "Jan. 1; N/A", //截止日期
          bkrx: "5,394", //本科入学
          many: "8,273", //总人数
          xuefei: "$47,140", //学费
          shisus: "$15,610 ", //食宿
          ssbl: "5:01", //师生比例
          bjxsbl: "<20    75%;  20 - 49    15%;  >50    11%" //班级比例
        },
        {
          num: "2",
          scholl: "Harvard University",
          city: "Cambridge - Urban",
          xingzhi: "Private",
          riqi: "5%",
          jzrq: "Jan. 1; N/A",
          bkrx: "6,766",
          many: "20,604",
          xuefei: "$50,420",
          shisus: "$17,160",
          ssbl: "6:01",
          bjxsbl: "<20    72%;  20 - 49    17%;  >50    11%"
        },
        {
          num: "3",
          scholl: "Columbia University",
          city: "New York - Urban",
          xingzhi: "Private",
          riqi: "6%",
          jzrq: "Jan. 1; Nov.1",
          bkrx: "6,162",
          many: "25,968",
          xuefei: "$59,430 ",
          shisus: "$14,016",
          ssbl: "6:01",
          bjxsbl: "<20    82%;  20 - 49    10%;  >50    8%"
        },
        {
          num: "3",
          scholl: "Massachusetts Institute of Technology",
          city: "Cambridge - Urban",
          xingzhi: "Private",
          riqi: "7%",
          jzrq: "Jan. 1; N/A",
          bkrx: "4,547",
          many: "11,466",
          xuefei: "$51,832",
          shisus: "$15,510 ",
          ssbl: "3:01",
          bjxsbl: "<20    69%;  20 - 49    20%;  >50    11%"
        },
        {
          num: "3",
          scholl: "University of Chicago",
          city: "Chicago - Urban",
          xingzhi: "Private",
          riqi: "9%",
          jzrq: "Jan. 1; Nov.1",
          bkrx: "6,264",
          many: "13,736",
          xuefei: "$57,006",
          shisus: "$16,350",
          ssbl: "5:01",
          bjxsbl: "<20    80%;  20 - 49    14%;  >50    6%"
        },
        {
          num: "3",
          scholl: "Yale University",
          city: "New Haven - City",
          xingzhi: "Private",
          riqi: "7%",
          jzrq: "Jan. 1; N/A",
          bkrx: "5,746",
          many: "12,974",
          xuefei: "$53,430",
          shisus: "$16,000",
          ssbl: "6:01",
          bjxsbl: "<20    73%;  20 - 49    18%;  >50    9%"
        },
        {
          num: "7",
          scholl: "Stanford University",
          city: "Stanford - Suburban",
          xingzhi: "Private",
          riqi: "5%",
          jzrq: "Jan. 2; N/A",
          bkrx: "7,062",
          many: "17,178",
          xuefei: "$51,354",
          shisus: "$15,763",
          ssbl: "4:01",
          bjxsbl: "<20    69%;  20 - 49    20%;  >50    11%"
        },
        {
          num: "8",
          scholl: "Duke University",
          city: "Durham - Suburban",
          xingzhi: "Private",
          riqi: "10%",
          jzrq: "Jan. 3; Nov.1",
          bkrx: "6,692",
          many: "16,294",
          xuefei: "$55,960",
          shisus: "$15,944",
          ssbl: "6:01",
          bjxsbl: "<20    71%;  20 - 49    23%;  >50    6%"
        },
        {
          num: "8",
          scholl: "University of Pennsylvania",
          city: "Philadelphia - Urban",
          xingzhi: "Private",
          riqi: "9%",
          jzrq: "Jan. 5; Nov.1",
          bkrx: "10,033",
          many: "21,907",
          xuefei: "$55,584",
          shisus: "$15,616",
          ssbl: "6:01",
          bjxsbl: "<20    69%;  20 - 49    21%;  >50    10%"
        },
        {
          num: "10",
          scholl: "Johns Hopkins University",
          city: "Baltimore - Urban",
          xingzhi: "Private",
          riqi: "12%",
          jzrq: "Jan. 2; Nov.1",
          bkrx: "6,109",
          many: "25,151",
          xuefei: "$53,740",
          shisus: "$15,836",
          ssbl: "7:01",
          bjxsbl: "<20    74%;  20 - 49    17%;  >50    9%"
        },
        {
          num: "10",
          scholl: "Northwestern University",
          city: "Evanston, IL - Suburban",
          xingzhi: "Private",
          riqi: "9%",
          jzrq: "Jan. 1; Nov.1",
          bkrx: "8,278",
          many: "21,474",
          xuefei: "$54,567",
          shisus: "$16,626",
          ssbl: "6:01",
          bjxsbl: "<20    79%;  20 - 49    15%;  >50    6%"
        },
        {
          num: "12",
          scholl: "California Institute of Technology",
          city: "Pasadena, CA - Suburban",
          xingzhi: "Private",
          riqi: "8%",
          jzrq: "Jan. 3; N/A",
          bkrx: "961",
          many: "2,238",
          xuefei: "$52,362",
          shisus: "$15,525",
          ssbl: "3:01",
          bjxsbl: "<20    67%;  20 - 49    23%;  >50    10%"
        },
        {
          num: "12",
          scholl: "Dartmouth College",
          city: "Hanover, NH - Rural",
          xingzhi: "Private",
          riqi: "10%",
          jzrq: "Jan. 1; Nov.1",
          bkrx: "4,410",
          many: "6,509",
          xuefei: "$55,035",
          shisus: "$15,756",
          ssbl: "7:01",
          bjxsbl: "<20    64%;  20 - 49    25%;  >50    6%"
        },
        {
          num: "14",
          scholl: "Brown University",
          city: "Providence, RI - City",
          xingzhi: "Private",
          riqi: "9%",
          jzrq: "Jan. 1; Nov.1",
          bkrx: "6,988",
          many: "10,095",
          xuefei: "$55,656",
          shisus: "$14,670",
          ssbl: "7:01",
          bjxsbl: "<20    70%;  20 - 49    20%;  >50    10%"
        },
        {
          num: "14",
          scholl: "Vanderbilt University",
          city: "Nashville, TN - Urban",
          xingzhi: "Private",
          riqi: "11%",
          jzrq: "Jan. 1; Nov.1",
          bkrx: "6,885",
          many: "12,592",
          xuefei: "$49,816",
          shisus: "$16,234",
          ssbl: "7:01",
          bjxsbl: "<20    65%;  20 - 49    27%;  >50    8%"
        },
        {
          num: "16",
          scholl: "Cornell University",
          city: "Ithaca, NY - Rural",
          xingzhi: "Private",
          riqi: "13%",
          jzrq: "Jan. 2; Nov.1",
          bkrx: "14,907",
          many: "23,016",
          xuefei: "$55,188",
          shisus: "$14,816",
          ssbl: "9:01",
          bjxsbl: "<20    57%;  20 - 49    24%;  >50    18%"
        },
        {
          num: "16",
          scholl: "Rice University",
          city: "Houston, TX - Urban",
          xingzhi: "Private",
          riqi: "16%",
          jzrq: "Jan. 1; Nov.1",
          bkrx: "4,001",
          many: "7,022",
          xuefei: "$47,350",
          shisus: "$14,000",
          ssbl: "6:01",
          bjxsbl: "<20    70%;  20 - 49    21%;  >50    9%"
        },
        {
          num: "18",
          scholl: "University of Notre Dame",
          city: "Notre Dame, IN - City",
          xingzhi: "Private",
          riqi: "19%",
          jzrq: "Jan. 1; N/A",
          bkrx: "8,576",
          many: "12,467",
          xuefei: "$53,391",
          shisus: "$15,410",
          ssbl: "10:01",
          bjxsbl: "<20    62%;  20 - 49    29%;  >50    9%"
        },
        {
          num: "19",
          scholl: "University of California - Los Angeles",
          city: "Los Angeles, CA - Urban",
          xingzhi: "Public",
          riqi: "16%",
          jzrq: "Nov. 30; N/A",
          bkrx: "31,002",
          many: "45,428",
          xuefei: "$41,294 ",
          shisus: "$15,991",
          ssbl: "18:01",
          bjxsbl: "<20    56%;  20 - 49    24%;  >50    20%"
        },
        {
          num: "19",
          scholl: "Washington University in St. Louis",
          city: "St. Louis, MO - Suburban",
          xingzhi: "Private",
          riqi: "16%",
          jzrq: "Jan. 2; Nov.1",
          bkrx: "7,675",
          many: "15,303",
          xuefei: "$53,399",
          shisus: "$16,440",
          ssbl: "8:01",
          bjxsbl: "<20    65%;  20 - 49    24%;  >50    11%"
        },
        {
          num: "21",
          scholl: "Emory University",
          city: "Atlanta, GA - City",
          xingzhi: "Private",
          riqi: "22%",
          jzrq: "Jan. 1; Nov.1",
          bkrx: "6,937",
          many: "14,273",
          xuefei: "$51,306",
          shisus: "$14,456",
          ssbl: "9:01",
          bjxsbl: "<20    63%;  20 - 49    25%;  >50    12%"
        },
        {
          num: "22",
          scholl: "Georgetown University",
          city: " Washington, DC - Urban",
          xingzhi: "Private",
          riqi: "16%",
          jzrq: "Jan. 10; N/A",
          bkrx: "7,463",
          many: "19,005",
          xuefei: "$54,104",
          shisus: "$16,418",
          ssbl: "11:01",
          bjxsbl: "<20    62%;  20 - 49    31%;  >50    7%"
        },
        {
          num: "22",
          scholl: "University of California - Berkeley",
          city: "Berkeley, CA - City",
          xingzhi: "Public",
          riqi: "17%",
          jzrq: "Nov. 30; N/A",
          bkrx: "30,574",
          many: "41,910",
          xuefei: "$43,232",
          shisus: "$17,764",
          ssbl: "18:01",
          bjxsbl: "<20    54%;  20 - 49    28%;  >50    8%"
        },
        {
          num: "22",
          scholl: "University of Southern California",
          city: " Los Angeles, CA - Urban",
          xingzhi: "Private",
          riqi: "16%",
          jzrq: "Jan. 15; N/A",
          bkrx: "19,170",
          many: "36,487",
          xuefei: "$56,225 ",
          shisus: "$15,400",
          ssbl: "8:01",
          bjxsbl: "<20    60%;  20 - 49    28%;  >50    12%"
        },
        {
          num: "25",
          scholl: "Carnegie Mellon University",
          city: "Pittsburgh, PA - Urban",
          xingzhi: "Private",
          riqi: "22%",
          jzrq: "Jan. 1; Nov.1",
          bkrx: "6,896",
          many: "14,528",
          xuefei: "$55,465",
          shisus: "$14,418 ",
          ssbl: "13:01",
          bjxsbl: "<20    65%;  20 - 49    22%;  >50    13%"
        },
        {
          num: "25",
          scholl: "University of Virginia",
          city: "Charlottesville, VA - Suburban",
          xingzhi: "Public",
          riqi: "27%",
          jzrq: "Jan. 1; N/A",
          bkrx: "16,655",
          many: "24,360",
          xuefei: "$48,891",
          shisus: "$11,590 ",
          ssbl: "14:01",
          bjxsbl: "<20    53%;  20 - 49    31%;  >50    16%"
        },
        {
          num: "27",
          scholl: "Tufts University",
          city: "Medford, MA - Suburban",
          xingzhi: "Private",
          riqi: "15%",
          jzrq: "Jan. 1; Nov.1",
          bkrx: "5,541",
          many: "11,449",
          xuefei: "$56,382",
          shisus: "$14,560",
          ssbl: "9:01",
          bjxsbl: "<20    70%;  20 - 49    23%;  >50    7%"
        },
        {
          num: "27",
          scholl: "University of Michigan--Ann Arbor",
          city: "Ann Arbor, MI - City",
          xingzhi: "Public",
          riqi: "27%",
          jzrq: "Feb. 1; N/A",
          bkrx: "29,821",
          many: "46,002",
          xuefei: "$49,350",
          shisus: "$11,534",
          ssbl: "15:01",
          bjxsbl: "<20    57%;  20 - 49    25%;  >50    18%"
        },
        {
          num: "27",
          scholl: "Wake Forest University",
          city: "Winston-Salem, NC - Suburban",
          xingzhi: "Private",
          riqi: "28%",
          jzrq: "Jan. 1; Nov.15",
          bkrx: "5,102",
          many: "8,116",
          xuefei: "$53,322",
          shisus: "$16,032",
          ssbl: "11:01",
          bjxsbl: "<20    57%;  20 - 49    42%;  >50    1%"
        },
        {
          num: "30",
          scholl: "New York University",
          city: "New York, NY - Urban",
          xingzhi: "Private",
          riqi: "28%",
          jzrq: "Jan. 1; Nov.1",
          bkrx: "26,417",
          many: "51,123",
          xuefei: "$51,828",
          shisus: "$18,156",
          ssbl: "9:01",
          bjxsbl: "<20    60%;  20 - 49    30%;  >50    10%"
        },
        {
          num: "30",
          scholl: "University of California - Santa Barbara",
          city: "Santa Barbara, CA - Suburban",
          xingzhi: "Public",
          riqi: "33%",
          jzrq: "Nov. 30; N/A",
          bkrx: "22,186",
          many: "25,057",
          xuefei: "$42,486",
          shisus: "$15,673",
          ssbl: "17:01",
          bjxsbl: "<20    50%;  20 - 49    31%;  >50    19%"
        },
        {
          num: "30",
          scholl: "University of North Carolina - Chapel Hill",
          city: "Chapel Hill, NC - Suburban",
          xingzhi: "Public",
          riqi: "24%",
          jzrq: "Jan. 15; N/A",
          bkrx: "18,862",
          many: "29,911",
          xuefei: "$35,169",
          shisus: "$11,190",
          ssbl: "13:01",
          bjxsbl: "<20    38%;  20 - 49    45%;  >50    12%"
        },
        {
          num: "33",
          scholl: "University of California--Irvine",
          city: "Irvine, CA - Suburban",
          xingzhi: "Public",
          riqi: "37%",
          jzrq: "Nov. 30; N/A",
          bkrx: "29,307",
          many: "35,242",
          xuefei: "$43,530",
          shisus: "$14,829",
          ssbl: "18:01",
          bjxsbl: "<20    55%;  20 - 49    22%;  >50    23%"
        },
        {
          num: "33",
          scholl: "University of Rochester",
          city: "Rochester, NY - Suburban",
          xingzhi: "Private",
          riqi: "34%",
          jzrq: "Jan. 5; Nov.1",
          bkrx: "6,546",
          many: "11,648",
          xuefei: "$53,926",
          shisus: "$15,938",
          ssbl: "10:01",
          bjxsbl: "<20    70%;  20 - 49    19%;  >50    11%"
        },
        {
          num: "35",
          scholl: "Brandeis University",
          city: "Waltham, MA - Suburban",
          xingzhi: "Private",
          riqi: "34%",
          jzrq: "Jan. 1; Nov.1",
          bkrx: "3,635",
          many: "5,722",
          xuefei: "$55,395",
          shisus: "$15,440",
          ssbl: "10:01",
          bjxsbl: "<20    60%;  20 - 49    30%;  >50    10%"
        },
        {
          num: "35",
          scholl: "Georgia Institute of Technology",
          city: "Atlanta, GA - Urban",
          xingzhi: "Public",
          riqi: "23%",
          jzrq: "Jan. 1; N/A",
          bkrx: "15,573",
          many: "29,376",
          xuefei: "$33,020",
          shisus: "$14,596 ",
          ssbl: "22:01",
          bjxsbl: "<20    39%;  20 - 49    35%;  >50    26%"
        },
        {
          num: "35",
          scholl: "University of Florida",
          city: "Gainesville, FL - Suburban",
          xingzhi: "Public",
          riqi: "42%",
          jzrq: "Mar. 1; N/A",
          bkrx: "35,247",
          many: "52,669",
          xuefei: "$28,658",
          shisus: "$10,120",
          ssbl: "19:01",
          bjxsbl: "<20    48%;  20 - 49    36%;  >50    16%"
        },
        {
          num: "38",
          scholl: "Boston College",
          city: "Chestnut Hill, MA - Suburban",
          xingzhi: "Private",
          riqi: "32%",
          jzrq: "Jan. 1; N/A",
          bkrx: "9,358",
          many: "13,996",
          xuefei: "$55,464",
          shisus: "$14,478",
          ssbl: "12:01",
          bjxsbl: "<20    48%;  20 - 49    45%;  >50    7%"
        },
        {
          num: "38",
          scholl: "College of William and Mary",
          city: "Williamsburg, VA",
          xingzhi: "Public",
          riqi: "36%",
          jzrq: "Jan. 1; Nov.1",
          bkrx: "6,285",
          many: "8,740",
          xuefei: "$44,701",
          shisus: "$12,236 ",
          ssbl: "11:01",
          bjxsbl: "<20    49%;  20 - 49    44%;  >50    7%"
        },
        {
          num: "38",
          scholl: "University of California - Davis",
          city: "Davis, CA - City",
          xingzhi: "Public",
          riqi: "44%",
          jzrq: "Nov. 30; N/A",
          bkrx: "30,145",
          many: "37,278",
          xuefei: "$43,458",
          shisus: "$15,765",
          ssbl: "20:01",
          bjxsbl: "<20    37%;  20 - 49    34%;  >50    28%"
        },
        {
          num: "41",
          scholl: "University of California - San Diego",
          city: "La Jolla, CA - Urban",
          xingzhi: "Public",
          riqi: "34%",
          jzrq: "Nov. 30; N/A",
          bkrx: "28,587",
          many: "35,772",
          xuefei: "$42,074",
          shisus: "$13,733",
          ssbl: "19:01",
          bjxsbl: "<20    38%;  20 - 49    26%;  >50    34%"
        },
        {
          num: "42",
          scholl: "Boston University",
          city: "Boston, MA - Urban",
          xingzhi: "Private",
          riqi: "25%",
          jzrq: "Jan. 2; Nov.1",
          bkrx: "18,080",
          many: "33,355",
          xuefei: "$53,948",
          shisus: "$15,720",
          ssbl: "10:01",
          bjxsbl: "<20    60%;  20 - 49    26%;  >50    14%"
        },
        {
          num: "42",
          scholl: "Case Western Reserve University",
          city: "Cleveland, OH - Urban",
          xingzhi: "Private",
          riqi: "33%",
          jzrq: "Jan. 15; Nov.1",
          bkrx: "5,150",
          many: "11,824",
          xuefei: "$49,042",
          shisus: "$15,190",
          ssbl: "11:01",
          bjxsbl: "<20    60%;  20 - 49    26%;  >50    14%"
        },
        {
          num: "44",
          scholl: "Northeastern University",
          city: "Boston, MA - Urban",
          xingzhi: "Private",
          riqi: "27%",
          jzrq: "Jan. 1; Nov.1",
          bkrx: "13,825",
          many: "21,489",
          xuefei: "$51,387",
          shisus: "$16,880",
          ssbl: "14:01",
          bjxsbl: "<20    60%;  20 - 49    26%;  >50    14%"
        },
        {
          num: "44",
          scholl: "Tulane University",
          city: "New Orleans, LA - Urban",
          xingzhi: "Private",
          riqi: "21%",
          jzrq: "Nov. 15; Nov. 1",
          bkrx: "6,571",
          many: "11,248",
          xuefei: "$54,820",
          shisus: "$15,190",
          ssbl: "8:01",
          bjxsbl: "<20    61%;  20 - 49    33%;  >50    6%"
        },
        {
          num: "46",
          scholl: "Pepperdine University",
          city: "Malibu, CA - Suburban",
          xingzhi: "Private",
          riqi: "40%",
          jzrq: "Jan. 5; N/A",
          bkrx: "3,604",
          many: "7,710",
          xuefei: "$53,932",
          shisus: "$15,320",
          ssbl: "13:01",
          bjxsbl: "<20    70%;  20 - 49    27%;  >50    3%"
        },
        {
          num: "46",
          scholl: "University of Georgia",
          city: "Athens, GA - City",
          xingzhi: "Public",
          riqi: "54%",
          jzrq: "Jan. 1; N/A",
          bkrx: "28,848",
          many: "37,606",
          xuefei: "$30,404",
          shisus: "$10,038",
          ssbl: "17:01",
          bjxsbl: "<20    45%;  20 - 49    44%;  >50    11%"
        },
        {
          num: "46",
          scholl: "University of Illinois - Urbana Champaign",
          city: "Champaign, IL - City",
          xingzhi: "Public",
          riqi: "62%",
          jzrq: "Dec. 1; N/A",
          bkrx: "33,955",
          many: "48,216",
          xuefei: "$32,568",
          shisus: "$11,308",
          ssbl: "20:01",
          bjxsbl: "<20    41%;  20 - 49    40%;  >50    19%"
        },
        {
          num: "49",
          scholl: "Rensselaer Polytechnic Institute",
          city: "Troy, NY - Suburban",
          xingzhi: "Private",
          riqi: "43%",
          jzrq: "Feb. 1; Nov. 1",
          bkrx: "6,366",
          many: "7,633",
          xuefei: "$53,880",
          shisus: "$15,260",
          ssbl: "13:01",
          bjxsbl: "<20    52%;  20 - 49    36%;  >50    11%"
        },
        {
          num: "49",
          scholl: "University of Texas - Austin",
          city: "Austin, TX - Urban",
          xingzhi: "Public",
          riqi: "36%",
          jzrq: "Dec. 1; N/A",
          bkrx: "40,492",
          many: "51,525",
          xuefei: "$37,480",
          shisus: "$10,804",
          ssbl: "18:01",
          bjxsbl: "<20    35%;  20 - 49    39%;  >50    26%"
        },
        {
          num: "49",
          scholl: "University of Wisconsin - Madison",
          city: "Madison, WI - City",
          xingzhi: "Public",
          riqi: "54%",
          jzrq: "Feb. 1; N/A",
          bkrx: "32,196",
          many: "43,820",
          xuefei: "$36,805",
          shisus: "$11,114",
          ssbl: "18:01",
          bjxsbl: "<20    43%;  20 - 49    35%;  >50    22%"
        },
        {
          num: "49",
          scholl: "Villanova University",
          city: "Villanova, PA - Suburban",
          xingzhi: "Private",
          riqi: "36%",
          jzrq: "Jan. 15; N/A",
          bkrx: "6,966",
          many: "10,983",
          xuefei: "$53,458",
          shisus: "$14,020",
          ssbl: "11:01",
          bjxsbl: "<20    42%;  20 - 49    55%;  >50    3%"
        }
      ]
    };
  }
};
</script>

<style scoped  lang="scss">

.xian {
    border-top: 3px solid #707070;
    width: 100%;
    height: 0;
    margin-bottom: 25px;
  }
.wapers {
  margin-bottom: 130px;
  width: 1280px;
  margin: 0 auto;
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
          width: 50px;
        }
        &:nth-child(2) {
          width: 100px;
        }
        &:nth-child(3) {
          width: 120px;
        }
        &:nth-child(4) {
          width: 70px;
        }
        &:nth-child(5) {
          width: 69px;
        }
        &:nth-child(6) {
          width: 124px;
        }
        &:nth-child(7) {
          width: 85px;
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
          width: 80px;
        }
        &:nth-child(12) {
          width: 253px;
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
