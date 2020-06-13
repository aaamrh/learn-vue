<template>
  <div class="header">
    <div class="nav-topbar"> 
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">松果出行</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="cart" @click="goToCart"><span class="icon-cart"></span>购物车(0)</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) in phoneList" :key="index">
                  <a v-bind:href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div> 
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>  <!-- GET 过滤器的使用 -->
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
                <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                    </div> 
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                    </div> 
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">3799</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.jpg" alt="">
                    </div> 
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                    </div> 
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                    </div> 
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.jpg" alt="">
                    </div> 
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="kw">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'nav-header',
    data(){ // 局部data
      return {
        username: 'Jack Ma',
        phoneList:  []
      }
    },
    filters:{   // GET 过滤器的定义
      currency(val){
        if(!val){return 0.00}
        return '￥' + val.toFixed(2) + '元';
      }
    },
    mounted(){
      this.getProductList();
    },
    methods: {
      login(){
        this.$router.push('/login')
      },
      getProductList(){
        this.axios.get('/products', {
          params:{
            categoryId: '100012'
          }
        }).then((res)=>{
          if(res.list.length >= 6){
            this.phoneList = res.list.slice(0,6)
          }
        })
      },
      goToCart(){
        this.$router.push('/cart')
      }
    }
  }
</script>

<style lang="scss" >
  @import '../assets/scss/base.scss';
  @import '../assets/scss/mixin.scss';
  @import '../assets/scss/config.scss';

  .header{
    .nav-topbar{
      height: 39px;
      line-height: 39px;
      background-color: #333;
      color: #b0b0b0;
      .container{
        @include flex();

        a{
          display: inline-block;
          color: #b0b0b0;
          margin-right: 17px;
        }
        .cart{
          width: 110px;
          background:#ff6600;
          color: #fff;
          text-align: center;
          margin-right: 0;
          .icon-cart{
            @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png', contain);
            margin-right: 4px;
          }
        }
      }
    }
    .nav-header{
      .container{
        position: relative;
        height: 112px;
        @include flex();
        .header-logo{
          display: inline-block;
          width: 55px;
          height: 55px;
          overflow: hidden;
          background: #FF6600;
          a{
            display: inline-block;
            width: 110px;
            height: 55px;
            transition: .25s ;

            &::before{
              content: '';
              @include bgImg(55px, 55px, '/imgs/mi-logo.png');
            }
            &::after{
              content: '';
              @include bgImg(55px, 55px, '/imgs/mi-home.png');
            }
            &:hover{
              transform: translate(-55px, 0);
            }
          }
        }  
        .header-menu{
          width: 643px;
          display: inline-block;
          padding-left: 210px;
          .item-menu{
            display: inline-block;
            color: #333;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-right: 20px;
            span{
              cursor: pointer;
            }
            &:hover{
              color: $colorA;
              .children{
                transition: all .25s;
                height: 220px;
                opacity: 1;
              }
            }
            .children{
              position: absolute;
              opacity: 0;
              top: 112px;
              left: 0;
              height: 0;
              width: 1226px;
              border-top: 1px solid #E5E5E5;
              box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              overflow: hidden;
              transition: all .25s;
              background-color: #fff;

              .product{
                position: relative;
                float: left;
                font-size: 12px;
                line-height: 12px;
                width: 204px;
                height: 220px;
                text-align: center;
                a{
                  display: inline-block;
                  img{
                    height: 111px;
                    margin-top: 26px;
                  }
                  .pro-name{
                    font-weight: bolder;
                    margin-top: 19px;
                    margin-bottom: 8px;
                    color: $colorB ;
                  }
                  .pro-price{
                    color: $colorA ;
                  }
                }
              }
              .product + .product::before{
                content: '';
                position: absolute;
                top: 28px;
                left: 0;
                width: 1px;
                height: 99px;
                background: #D7D7D7;
              }
            }
          }
        }
        .header-search{
          width: 318px;
          .wrapper{
            display: flex;
            align-items: center;
            height: 50px;
            border: 1px solid #e0e0e0;
            input{
              border: none;
              box-sizing: border-box;
              border-right: 1px  solid #e0e0e0;
              width: 264px;
              height: 50px;
              padding-left: 14px;
            }
            a{
              @include bgImg(18px, 18px, '/imgs/icon-search.png', contain);
              margin: 0 auto;
            }
          }
        }
      }
    }
  }
</style>