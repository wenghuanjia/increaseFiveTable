import axios from './axios.js'

// 登录
export const login = (data) => axios('/user/public/login', data, 'POST');

// 获取新建项目列表
export const pmtype = () => axios('/Home/Index/project_type');

// 新建项目
export const addProject = (data) => axios('/user/Merchandiser/addProject', data); 


// 新增项目输入名称
export const addProjectName = (data) => axios('/resource/tables/addProject', data); 


// 添加表数据t0-t43
export const create = (data) => axios('/resource/tables/create', data, 'POST'); // change get

// 查询表数据
export const read = (data) => axios('/resource/tables/read', data, 'POST'); // change get

// 删除表数据
export const del = (data) => axios('/resource/tables/del', data); 

// 修改表数据
export const update = (data) => axios('/resource/tables/edit', data, 'POST'); // change get

// 添加备注
export const edit = (data) => axios('/resource/tables/update', data); 

// 上传附件
export const upload = (data) => axios("/user/Upload/two", data, "POST", true);

// 查询项目列表
export const pmList = (data) => axios('/user/Project/index', data);

// 人员管理单条信息
export const getProject = (data) => axios('/user/Project/getProject', data);

// 人员管理查询技术员和审核员下拉框
export const getRoleUserList = (data) => axios('/user/Project/getRoleUserList', data);

// 人员管理添加负责人
export const saveManage = (data) => axios('/user/Project/saveManage', data, "POST");

// 首页代办事项
export const agentEvent = () => axios('/User/Project/agentEvent'); 

// 业务员提交
export const ywsubmit = (data) => axios('/User/Project/submit', data, 'POST');

// 审核员审核
export const check = (data) => axios('/User/Project/check', data, 'POST');

// 导出word
export const index = (data) => axios('/home/Word/index', data);

// 1-6表名
export const getVariable = (data) => axios('/home/index/getVariable', data);


