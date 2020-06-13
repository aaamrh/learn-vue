<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
// import axios from 'axios'
// import jsonp from 'jsonp'
// import storage from './storage'

export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      res:{}
    }
  },
  mounted(){
    this.axios.get('/user/login').then(res=>{
      this.res = res
    })
    // let url = 'https://www.easy-mock.com/mock/5ece699e9bd48a40a0c06bec/example/mock';
    // axios.get(url).then(()=>{

    // })

    // url = '';
    // jsonp(url, (err, res)=>{})

    // storage 测试
    // storage.setItem('a', 1)
    // storage.setItem('user', {'a':1})
    // storage.setItem('c', {a:1}, 'user')
    // storage.clear('a', 'user')
    // console.log(storage.getItem('c', 'user'))
  }
}
</script>

<style>
@import './assets/scss/reset.scss'
</style>
