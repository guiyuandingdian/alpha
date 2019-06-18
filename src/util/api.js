/** 
 * api接口统一管理
 */
import { get, post } from './request'

// 账号密码登录 elogin
export const Elogin = p => post('/elogin', p);

// 手机号登录 login
export const Login = p => post('/login', p);

// 注册 register
export const Register = p => post('/register', p);

// 发送验证码 /phoneCode
// step1（预评估表）
// step2（成绩管理）/stepTwo
// step3（选择学校）
// step4（文书修改）
// step5（提交申请）
// step6（申请结束）
// 预评估表显示
//学生日历看板 /calendarStu
//学业成绩 /gpaStu
//科目添加 /stuAdd
//科目修改 /stuUpdate
//科目删除 /stuDele
//考试信息添加 /einfoAdd
//考试信息修改 /einfoUpdate
//考试信息删除 /einfoDel
//标化成绩展示 /stand
//标化成绩添加 /standAdd
//标化成绩修改 /standUpdate
//标化成绩删除 /standDel
//活动显示 /active
//活动添加 /activeAdd
//活动修改 /activeUpdate
//活动删除  /activeDel
//学校展示  /getSchool
//主文书题目显示 /mainText
//主文书作答展示 /main
//选择作答题目 /mainSel
//主文书提交 /mainAdd
//主文书更新 /mainUpdate
//主文书删除 /mianDel
//补充文书展示 /sup
