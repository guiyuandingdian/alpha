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
        <span>{{item.shisu}}</span>
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
          num: "1",
          scholl: "Princeton University",
          city: "Princeton - Suburban",
          xingzhi: "Private",
          riqi: "6%",
          jzrq: "Jan. 1; N/A",
          bkrx: "5,394",
          many: "8,273",
          shisu: "$47,140",
          ssbl: "5:01",
          bjxsbl: "<20    75%;  20 - 49    15%;  >50    11%"
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
          shisu: "$50,420",
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
          shisu: "$59,430 ",
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
          shisu: "$51,832",
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
          shisu: "$57,006",
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
          shisu: "$53,430",
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
          shisu: "$51,354",
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
          shisu: "$55,960",
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
          shisu: "$55,584",
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
          shisu: "$53,740",
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
          shisu: "$54,567",
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
          shisu: "$52,362",
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
          shisu: "$55,035",
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
          shisu: "$55,656",
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
          shisu: "$49,816",
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
          shisu: "$55,188",
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
          shisu: "$47,350",
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
          shisu: "$53,391",
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
          shisu: "$41,294 ",
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
          shisu: "$53,399",
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
          shisu: "$51,306",
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
          shisu: "$54,104",
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
          shisu: "$43,232",
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
          shisu: "$56,225 ",
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
          shisu: "$55,465",
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
          shisu: "$48,891",
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
          shisu: "$56,382",
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
          shisu: "$49,350",
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
          shisu: "$53,322",
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
          shisu: "$51,828",
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
          shisu: "$42,486",
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
          shisu: "$35,169",
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
          shisu: "$43,530",
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
          shisu: "$53,926",
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
          shisu: "$55,395",
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
          shisu: "$33,020",
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
          shisu: "$28,658",
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
          shisu: "$55,464",
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
          shisu: "$44,701",
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
          shisu: "$43,458",
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
          shisu: "$42,074",
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
          shisu: "$53,948",
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
          shisu: "$49,042",
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
          shisu: "$51,387",
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
          shisu: "$54,820",
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
          shisu: "$53,932",
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
          shisu: "$30,404",
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
          shisu: "$32,568",
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
          shisu: "$53,880",
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
          shisu: "$37,480",
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
          shisu: "$36,805",
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
          shisu: "$53,458",
          ssbl: "11:01",
          bjxsbl: "<20    42%;  20 - 49    55%;  >50    3%"
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
}
.wapers {
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
