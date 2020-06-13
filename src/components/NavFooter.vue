<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="">个人主页</a><span>|</span>
      <a href="">Vue全栈课程</a><span>|</span>
      <a href="">React全家桶课程</a><span>|</span>
      <a href="">微信支付专项课程</a>
    </div>
    <div class="copyright">
      Copyright © 2019 mi.51purse.com All Rights Reserved
    </div>
  </div>
</template>

<script>
  export default {
    name:'nav-footer'
  }
</script>

<style lang="scss">
  .footer{
    height: 234px;
    border-top: 4px solid #ff6600;
    background-color: #333;
    color: #999;
    font-size: 16px;
    text-align: center;

    .footer-logo{
      margin-top: 46px;
      margin-bottom: 31px;
      line-height: 16px;
      img{
        width: 53px;
        margin-bottom: 13px;
      }
    }

    .footer-link{
      a{
        color: #999;
      }
      span{
        margin: 10px;
      }
    }
    .copyright{
      margin-top: 10px;
    }
  }
</style>