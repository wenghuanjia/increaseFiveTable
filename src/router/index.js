import App from '../App'
const login = r => require.ensure([], () => r(require('pages/login')), 'login') // 登录
const index = r => require.ensure([], () => r(require('pages/index')), 'index') // 登录
const company = r => require.ensure([], () => r(require('pages/company')), 'company') // 企业
const pm = r => require.ensure([], () => r(require('pages/pm')), 'pm') // 项目
const staff = r => require.ensure([], () => r(require('pages/staff')), 'staff') // 人员
const t0 = r => require.ensure([], () => r(require('pages/t0')), 't0') // t0表  广东省工程技术研究中心认定申请书
const t1 = r => require.ensure([], () => r(require('pages/t1')), 't1') // t1表  申报单位基本情况
const t2 = r => require.ensure([], () => r(require('pages/t2')), 't2') // t2表  依托单位上一年度经济效益与研究开发经费情况
const t3 = r => require.ensure([], () => r(require('pages/t3')), 't3') // t3表  研究开发人员情况表
const t4 = r => require.ensure([], () => r(require('pages/t4')), 't4') // t4表  基建条件及仪器设备情况
const t5 = r => require.ensure([], () => r(require('pages/t5')), 't5') // t5表  工程技术研究开发能力和水平
const t6 = r => require.ensure([], () => r(require('pages/t6')), 't6') // t6表  附件清单
const t7 = r => require.ensure([], () => r(require('pages/t7')), 't7') // t7表  广东省科技计划项目
const t8 = r => require.ensure([], () => r(require('pages/t8')), 't8') // t8表  项目基本情况表
const t9 = r => require.ensure([], () => r(require('pages/t9')), 't9') // t9表  项目内容
const t10 = r => require.ensure([], () => r(require('pages/t10')), 't10') // t10表  项目实施绩效
const t11 = r => require.ensure([], () => r(require('pages/t11')), 't11') // t11表  项目计划进度
const t12 = r => require.ensure([], () => r(require('pages/t12')), 't12') // t12表  经费情况表
const t13 = r => require.ensure([], () => r(require('pages/t13')), 't13') // t13表  项目承担单位基本情况表（1）
const t14 = r => require.ensure([], () => r(require('pages/t14')), 't14') // t14表  项目承担单位基本情况表（2）
const t15 = r => require.ensure([], () => r(require('pages/t15')), 't15') // t15表  参与单位基本情况表（1）（适用于企业）
const t16 = r => require.ensure([], () => r(require('pages/t16')), 't16') // t16表  参与单位基本情况表（2）（适用于高校、科研院所）
const t17 = r => require.ensure([], () => r(require('pages/t17')), 't17') // t17表  主承担单位及参与单位分工及经费分配情况
const t18 = r => require.ensure([], () => r(require('pages/t18')), 't18') // t18表  项目组人员情况
const t19 = r => require.ensure([], () => r(require('pages/t19')), 't19') // t19表  项目负责人基本信息
const t20 = r => require.ensure([], () => r(require('pages/t20')), 't20') // t20表  本申请项目所附附件清单
const t21 = r => require.ensure([], () => r(require('pages/t21')), 't21') // t21表  广州市科技计划项目 
const t22 = r => require.ensure([], () => r(require('pages/t22')), 't22') // t22表  申报单位基本情况
const t23 = r => require.ensure([], () => r(require('pages/t23')), 't23') // t23表  合作单位基本情况
const t24 = r => require.ensure([], () => r(require('pages/t24')), 't24') // t24表  申报单位近三年主要经济指标及财务状况 
const t25 = r => require.ensure([], () => r(require('pages/t25')), 't25') // t25表  申报单位近年知识产权、科研、人员等状况
const t26 = r => require.ensure([], () => r(require('pages/t26')), 't26') // t26表  纳统企业2017年企业研发活动情况
const t27 = r => require.ensure([], () => r(require('pages/t27')), 't27') // t27表  申报单位年度审计报告信息
const t28 = r => require.ensure([], () => r(require('pages/t28')), 't28') // t28表  企业申报单位财务状况
const t29 = r => require.ensure([], () => r(require('pages/t29')), 't29') // t29表  重复申报自查
const t30 = r => require.ensure([], () => r(require('pages/t30')), 't30') // t30表  项目组成员信息
const t31 = r => require.ensure([], () => r(require('pages/t31')), 't31') // t31表  项目负责人工作经历
const t32 = r => require.ensure([], () => r(require('pages/t32')), 't32') // t32表  项目经费预算
const t33 = r => require.ensure([], () => r(require('pages/t33')), 't33') // t33表  项目基本情况（附可行性报告）
const t34 = r => require.ensure([], () => r(require('pages/t34')), 't34') // t34表  工作进度安排
const t35 = r => require.ensure([], () => r(require('pages/t35')), 't35') // t35表  项目主要验收指标
const t36 = r => require.ensure([], () => r(require('pages/t36')), 't36') // t36表  项目申报单位与合作单位合作内容
const t37 = r => require.ensure([], () => r(require('pages/t37')), 't37') // t37表  附件清单
const t38 = r => require.ensure([], () => r(require('pages/t38')), 't38') // t38表  主要情况
const t39 = r => require.ensure([], () => r(require('pages/t39')), 't39') // t39表  知识产权汇总表
const t40 = r => require.ensure([], () => r(require('pages/t40')), 't40') // t40表  人力资源情况表
const t41 = r => require.ensure([], () => r(require('pages/t41')), 't41') // t41表  企业研究开发活动情况表（近三年执行的活动，按单一活动填报）
const t42 = r => require.ensure([], () => r(require('pages/t42')), 't42') // t42表  企业年度研究开发费用结构明细表(按近三年每年分别填报)
const t43 = r => require.ensure([], () => r(require('pages/t43')), 't43') // t43表  上年度高新技术产品（服务）情况表（按单一产品（服务）填报）
const t44 = r => require.ensure([], () => r(require('pages/t44')), 't44') // t43表  企业创新能力
const t45 = r => require.ensure([], () => r(require('pages/t45')), 't45') // 新表
const t46 = r => require.ensure([], () => r(require('pages/t46')), 't46') // 新表
const t47 = r => require.ensure([], () => r(require('pages/t47')), 't47') // 新表
const t48 = r => require.ensure([], () => r(require('pages/t48')), 't48') // 新表
const t49 = r => require.ensure([], () => r(require('pages/t49')), 't49') // 新表

const addfirm = r => require.ensure([], () => r(require('pages/addfirm')), 'addfirm') // 新增企业
const addpm = r => require.ensure([], () => r(require('pages/addpm')), 'addpm') // 新增项目
const addprincipal = r => require.ensure([], () => r(require('pages/addprincipal')), 'addprincipal') // 添加负责人

const routes = [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/login'
        },
        {
          path: '/login',
          component: login
        },
        {
          path: '/index',
          component: index
        },
        {
          path: '/addpm',
          component: addpm,
          children: [
            {
                path:'',
                redirect:'/addpm/t0',
            },
            {
              path: '/addpm/t0',
              component: t0
            },
            {
              path: '/addpm/t1',
              component: t1
            },
            {
              path: '/addpm/t2',
              component: t2
            },
            {
              path: '/addpm/t3',
              component: t3
            },
            {
              path: '/addpm/t4',
              component: t4
            },
            {
              path: '/addpm/t5',
              component: t5
            },
            {
              path: '/addpm/t6',
              component: t6
            },
            {
              path: '/addpm/t7',
              component: t7
            },
            {
              path: '/addpm/t8',
              component: t8
            },
            {
              path: '/addpm/t9',
              component: t9
            },
            {
              path: '/addpm/t10',
              component: t10
            },
            {
              path: '/addpm/t11',
              component: t11
            },
            {
              path: '/addpm/t12',
              component: t12
            },
            {
              path: '/addpm/t13',
              component: t13
            },
            {
              path: '/addpm/t14',
              component: t14
            },
            {
              path: '/addpm/t15',
              component: t15
            },
            {
              path: '/addpm/t16',
              component: t16
            },
            {
              path: '/addpm/t17',
              component: t17
            },
            {
              path: '/addpm/t18',
              component: t18
            },
            {
              path: '/addpm/t19',
              component: t19
            },
            {
              path: '/addpm/t20',
              component: t20
            },
            {
              path: '/addpm/t21',
              component: t21
            },
            {
              path: '/addpm/t22',
              component: t22
            },
            {
              path: '/addpm/t23',
              component: t23
            },
            {
              path: '/addpm/t24',
              component: t24
            },
            {
              path: '/addpm/t25',
              component: t25
            },
            {
              path: '/addpm/t26',
              component: t26
            },
            {
              path: '/addpm/t27',
              component: t27
            },
            {
              path: '/addpm/t28',
              component: t28
            },
            {
              path: '/addpm/t29',
              component: t29
            },
            {
              path: '/addpm/t30',
              component: t30
            },
            {
              path: '/addpm/t31',
              component: t31
            },
            {
              path: '/addpm/t32',
              component: t32
            },
            {
              path: '/addpm/t33',
              component: t33
            },
            {
              path: '/addpm/t34',
              component: t34
            },
            {
              path: '/addpm/t35',
              component: t35
            },
            {
              path: '/addpm/t36',
              component: t36
            },
            {
              path: '/addpm/t37',
              component: t37
            },
            {
              path: '/addpm/t38',
              component: t38
            },
            {
              path: '/addpm/t39',
              component: t39
            },
            {
              path: '/addpm/t40',
              component: t40
            },
            {
              path: '/addpm/t41',
              component: t41
            },
            {
              path: '/addpm/t42',
              component: t42
            },
            {
              path: '/addpm/t43',
              component: t43
            },
            {
              path: '/addpm/t44',
              component: t44
            },
            {
              path: '/addpm/t45',
              component: t45
            },
            {
              path: '/addpm/t46',
              component: t46
            },
            {
              path: '/addpm/t47',
              component: t47
            },
            {
              path: '/addpm/t48',
              component: t48
            },
            {
              path: '/addpm/t49',
              component: t49
            }
          ]
        },
        {
          path: '/company',
          component: company,
          children: [
            {
              path:'',
              redirect:'/company/t0',
            },
            {
              path: '/company/t0',
              component: t0
            },
            {
              path: '/company/t1',
              component: t1
            },
            {
              path: '/company/t2',
              component: t2
            },
            {
              path: '/company/t3',
              component: t3
            },
            {
              path: '/company/t4',
              component: t4
            },
            {
              path: '/company/t5',
              component: t5
            },
            {
              path: '/company/t6',
              component: t6
            },
            {
              path: '/company/t7',
              component: t7
            },
            {
              path: '/company/t8',
              component: t8
            },
            {
              path: '/company/t9',
              component: t9
            },
            {
              path: '/company/t10',
              component: t10
            },
            {
              path: '/company/t11',
              component: t11
            },
            {
              path: '/company/t12',
              component: t12
            },
            {
              path: '/company/t13',
              component: t13
            },
            {
              path: '/company/t14',
              component: t14
            },
            {
              path: '/company/t15',
              component: t15
            },
            {
              path: '/company/t16',
              component: t16
            },
            {
              path: '/company/t17',
              component: t17
            },
            {
              path: '/company/t18',
              component: t18
            },
            {
              path: '/company/t19',
              component: t19
            },
            {
              path: '/company/t20',
              component: t20
            },
            {
              path: '/company/t21',
              component: t21
            },
            {
              path: '/company/t22',
              component: t22
            },
            {
              path: '/company/t23',
              component: t23
            },
            {
              path: '/company/t24',
              component: t24
            },
            {
              path: '/company/t25',
              component: t25
            },
            {
              path: '/company/t26',
              component: t26
            },
            {
              path: '/company/t27',
              component: t27
            },
            {
              path: '/company/t28',
              component: t28
            },
            {
              path: '/company/t29',
              component: t29
            },
            {
              path: '/company/t30',
              component: t30
            },
            {
              path: '/company/t31',
              component: t31
            },
            {
              path: '/company/t32',
              component: t32
            },
            {
              path: '/company/t33',
              component: t33
            },
            {
              path: '/company/t34',
              component: t34
            },
            {
              path: '/company/t35',
              component: t35
            },
            {
              path: '/company/t36',
              component: t36
            },
            {
              path: '/company/t37',
              component: t37
            },
            {
              path: '/company/t38',
              component: t38
            },
            {
              path: '/company/t39',
              component: t39
            },
            {
              path: '/company/t40',
              component: t40
            },
            {
              path: '/company/t41',
              component: t41
            },
            {
              path: '/company/t42',
              component: t42
            },
            {
              path: '/company/t43',
              component: t43
            },
            {
              path: '/company/t44',
              component: t44
            },
            {
              path: '/company/t45',
              component: t45
            },
            {
              path: '/company/t46',
              component: t46
            },
            {
              path: '/company/t47',
              component: t47
            },
            {
              path: '/company/t48',
              component: t48
            },
            {
              path: '/company/t49',
              component: t49
            }
          ]
        },
        {
          path: '/addfirm',
          component: addfirm
        },
        {
          path: '/pm',
          component: pm,
          children: [
            {
              path:'',
              redirect:'/pm/t0/:pmid',
            },
            ,
            {
              path: '/pm/t0/:pmid',
              component: t0,
              name: 't0'
            },
            {
              path: '/pm/t1/:pmid',
              component: t1,
              name: 't1'
            },
            {
              path: '/pm/t2/:pmid',
              component: t2,
              name: 't2'
            },
            {
              path: '/pm/t3/:pmid',
              component: t3,
              name: 't3'
            },
            {
              path: '/pm/t4/:pmid',
              component: t4,
              name: 't4'
            },
            {
              path: '/pm/t5/:pmid',
              component: t5,
              name: 't5'
            },
            {
              path: '/pm/t6/:pmid',
              component: t6,
              name: 't6'
            },
            {
              path: '/pm/t7/:pmid',
              component: t7,
              name: 't7'
            },
            {
              path: '/pm/t8/:pmid',
              component: t8,
              name: 't8'
            },
            {
              path: '/pm/t9/:pmid',
              component: t9,
              name: 't9'
            },
            {
              path: '/pm/t10/:pmid',
              component: t10,
              name: 't10'
            },
            {
              path: '/pm/t11/:pmid',
              component: t11,
              name: 't11'
            },
            {
              path: '/pm/t12/:pmid',
              component: t12,
              name: 't12'
            },
            {
              path: '/pm/t13/:pmid',
              component: t13,
              name: 't13'
            },
            {
              path: '/pm/t14/:pmid',
              component: t14,
              name: 't14'
            },
            {
              path: '/pm/t15/:pmid',
              component: t15,
              name: 't15'
            },
            {
              path: '/pm/t16/:pmid',
              component: t16,
              name: 't16'
            },
            {
              path: '/pm/t17/:pmid',
              component: t17,
              name: 't17'
            },
            {
              path: '/pm/t18/:pmid',
              component: t18,
              name: 't18'
            },
            {
              path: '/pm/t19/:pmid',
              component: t19,
              name: 't19'
            },
            {
              path: '/pm/t20/:pmid',
              component: t20,
              name: 't20'
            },
            {
              path: '/pm/t21/:pmid',
              component: t21,
              name: 't21'
            },
            {
              path: '/pm/t22/:pmid',
              component: t22,
              name: 't22'
            },
            {
              path: '/pm/t23/:pmid',
              component: t23,
              name: 't23'
            },
            {
              path: '/pm/t24/:pmid',
              component: t24,
              name: 't24'
            },
            {
              path: '/pm/t25/:pmid',
              component: t25,
              name: 't25'
            },
            {
              path: '/pm/t26/:pmid',
              component: t26,
              name: 't26'
            },
            {
              path: '/pm/t27/:pmid',
              component: t27,
              name: 't27'
            },
            {
              path: '/pm/t28/:pmid',
              component: t28,
              name: 't28'
            },
            {
              path: '/pm/t29/:pmid',
              component: t29,
              name: 't29'
            },
            {
              path: '/pm/t30/:pmid',
              component: t30,
              name: 't30'
            },
            {
              path: '/pm/t31/:pmid',
              component: t31,
              name: 't31'
            },
            {
              path: '/pm/t32/:pmid',
              component: t32,
              name: 't32'
            },
            {
              path: '/pm/t33/:pmid',
              component: t33,
              name: 't33'
            },
            {
              path: '/pm/t34/:pmid',
              component: t34,
              name: 't34'
            },
            {
              path: '/pm/t35/:pmid',
              component: t35,
              name: 't35'
            },
            {
              path: '/pm/t36/:pmid',
              component: t36,
              name: 't36'
            },
            {
              path: '/pm/t37/:pmid',
              component: t37,
              name: 't37'
            },
            {
              path: '/pm/t38/:pmid',
              component: t38,
              name: 't38'
            },
            {
              path: '/pm/t39/:pmid',
              component: t39,
              name: 't39'
            },
            {
              path: '/pm/t40/:pmid',
              component: t40,
              name: 't40'
            },
            {
              path: '/pm/t41/:pmid',
              component: t41,
              name: 't41'
            },
            {
              path: '/pm/t42/:pmid',
              component: t42,
              name: 't42'
            },
            {
              path: '/pm/t43/:pmid',
              component: t43,
              name: 't43'
            },
            {
              path: '/pm/t44/:pmid',
              component: t44,
              name: 't44'
            },
            {
              path: '/pm/t45/:pmid',
              component: t45,
              name: 't45'
            },
            {
              path: '/pm/t46/:pmid',
              component: t46,
              name: 't46'
            },
            {
              path: '/pm/t47/:pmid',
              component: t47,
              name: 't47'
            },
            {
              path: '/pm/t48/:pmid',
              component: t48,
              name: 't48'
            },
            {
              path: '/pm/t49/:pmid',
              component: t49,
              name: 't49'
            }
          ]
        },
        {
          path: '/staff',
          component: staff,
          children: [
            {
              path:'',
              redirect:'/staff/t0',
            },
            {
              path: '/staff/t0',
              component: t0
            },
            {
              path: '/staff/t1',
              component: t1
            },
            {
              path: '/staff/t2',
              component: t2
            },
            {
              path: '/staff/t3',
              component: t3
            },
            {
              path: '/staff/t4',
              component: t4
            },
            {
              path: '/staff/t5',
              component: t5
            },
            {
              path: '/staff/t6',
              component: t6
            },
            {
              path: '/staff/t7',
              component: t7
            },
            {
              path: '/staff/t8',
              component: t8
            },
            {
              path: '/staff/t9',
              component: t9
            },
            {
              path: '/staff/t10',
              component: t10
            },
            {
              path: '/staff/t11',
              component: t11
            },
            {
              path: '/staff/t12',
              component: t12
            },
            {
              path: '/staff/t13',
              component: t13
            },
            {
              path: '/staff/t14',
              component: t14
            },
            {
              path: '/staff/t15',
              component: t15
            },
            {
              path: '/staff/t16',
              component: t16
            },
            {
              path: '/staff/t17',
              component: t17
            },
            {
              path: '/staff/t18',
              component: t18
            },
            {
              path: '/staff/t19',
              component: t19
            },
            {
              path: '/staff/t20',
              component: t20
            },
            {
              path: '/staff/t21',
              component: t21
            },
            {
              path: '/staff/t22',
              component: t22
            },
            {
              path: '/staff/t23',
              component: t23
            },
            {
              path: '/staff/t24',
              component: t24
            },
            {
              path: '/staff/t25',
              component: t25
            },
            {
              path: '/staff/t26',
              component: t26
            },
            {
              path: '/staff/t27',
              component: t27
            },
            {
              path: '/staff/t28',
              component: t28
            },
            {
              path: '/staff/t29',
              component: t29
            },
            {
              path: '/staff/t30',
              component: t30
            },
            {
              path: '/staff/t31',
              component: t31
            },
            {
              path: '/staff/t32',
              component: t32
            },
            {
              path: '/staff/t33',
              component: t33
            },
            {
              path: '/staff/t34',
              component: t34
            },
            {
              path: '/staff/t35',
              component: t35
            },
            {
              path: '/staff/t36',
              component: t36
            },
            {
              path: '/staff/t37',
              component: t37
            },
            {
              path: '/staff/t38',
              component: t38
            },
            {
              path: '/staff/t39',
              component: t39
            },
            {
              path: '/staff/t40',
              component: t40
            },
            {
              path: '/staff/t41',
              component: t41
            },
            {
              path: '/staff/t42',
              component: t42
            },
            {
              path: '/staff/t43',
              component: t43
            },
            {
              path: '/staff/t44',
              component: t44
            },
            {
              path: '/staff/t45',
              component: t45
            },
            {
              path: '/staff/t46',
              component: t46
            },
            {
              path: '/staff/t47',
              component: t47
            },
            {
              path: '/staff/t48',
              component: t48
            },
            {
              path: '/staff/t49',
              component: t49
            }
          ]
        },
        {
          path: '/staff/addprincipal',
          component: addprincipal
        }
      ]
    }
  ]


import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  linkActiveClass: 'active' // 设置当前路由类名
})

export default router;