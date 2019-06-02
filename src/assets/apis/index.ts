export default {
  //会员注册
  'member-register': {
    url: '/api/member/register',
    method: 'get'
  },
  //会员登陆
  'member-login': {
    url: '/api/member/login',
    method: 'post'
  },

  //会员信息
  'member-info': {
    url: '/api/member/info',
    method: 'post'
  },
  //获取图片上传token
  'upload-token': {
    url: '/api/uptoken',
    method: 'get'
  },
  //获取所有会员
  'member-findAll': {
    url: '/api/member/findAll',
    method: 'get'
  },
  ////////////课程系类////////////////
  //新建课程系列
  'create-course-series': {
    url: '/api/course-series/creat',
    method: 'post'
  },

  //获取所有课程系列
  'find-all-course-series': {
    url: '/api/course-series/findAll',
    method: 'get'
  },

  ////////////上传课程///////////////

  //上传课程
  'create-course': {
    url: '/api/course/create',
    method: 'post'
  },

  //获取所有课程系列
  'find-course': {
    url: '/api/course/find',
    method: 'get'
  },

  //获取所有课程系列
  'find-course-seriesid': {
    url: '/api/course/findBySeries',
    method: 'get'
  },

  ////////////课程管理///////////////
  //获取所有课程系列
  'find-all-course': {
    url: '/api/course/findAll',
    method: 'get'
  },

  ////////////订单管理///////////////
  //新建订单
  'create-order': {
    url: '/api/order/create',
    method: 'post'
  },
  //新建订单
  'find-all-order': {
    url: '/api/order/findAll',
    method: 'get'
  },
  'post-my-course': {
    url: '/api/order/find/course',
    method: 'post'
  },
  ////////////任务管理///////////////
  //创建任务
  'create-task': {
    url: '/api/task/create',
    method: 'post'
  },
  //所有任务
  'find-all-task': {
    url: '/api/task/findAll',
    method: 'get'
  },
  'find-task-ByCourse': {
    url: '/api/task/findByCourse',
    method: 'get'
  },

  //////////作业//////////////////////
  //获取学员已提交的该课程的作业
  'get-paper-ByTask': {
    url: '/api/paper/getPaperByTask',
    method: 'get'
  },
  //提交作业
  'post-paper': {
    url: '/api/paper/save',
    method: 'post'
  },
  //获取作业
  'get-paper': {
    url: '/api/paper/getPaper',
    method: 'get'
  },
  //批改作业
  'correct-paper': {
    url: 'api/paper/correct',
    method: 'post'
  },
  //我的作业
  'get-my-papers': {
    url: 'api/paper/getMyPaper',
    method: 'get'
  }
}
