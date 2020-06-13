import Mock from 'mockjs'

Mock.mock('/api/user/login', {
  "status": 0,
  "data": {
    "<id></id>": 12,
    "username": "@cname",
    "email": '1295487471@qq.com', 
    "phone|1-9": 0, 
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000,
  }
})