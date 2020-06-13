<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, i) in menuList" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a :href="sub ? '/#/product/' + sub.id : '' ">
                      <img :src="sub ? sub.img : '/imgs/item-box-1.png'" alt="">
                      {{ sub ? sub.name : '小米'  }}
                    </a>

                  </li> 
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">只能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">耳机 音响</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(item, index) in  slideList" :key="index">
            <a :href="'/#/product/' + item.id">
              <img :src="item.img">
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/product/' + item.id" v-for="(item, i) in adsList" :key="i">
          <img :src="item.img" alt="">
        </a>
      </div> 
      <div class="banner">
        <a href="/#/product/30" >
          <img src="/imgs/banner-1.png" alt="">
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img src="/imgs/mix-alpha.jpg" alt="">
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, i) in phoneList" :key='i'>
              <div class="item" v-for="(item, j) in arr" :key="j">
                <span>新品</span>
                <div class="item-img">
                  <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt="">
                </div>
                <div class="item-info">
                  <h3>小米9</h3>
                  <p>骁龙855，索尼4800万超广角微距</p>
                  <p class="price">2999元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from '../components//ServiceBar'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
import 'swiper/css/swiper.css'

export default {
  name: "index",
  data() {
    return {
      swiperOptions: {
        autoplay: true,  
        loop: true, 
        effect: 'cube',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
      },
      slideList: [
        {id: '42', img: '/imgs/slider/slide-1.jpg'},
        {id: '45', img: '/imgs/slider/slide-2.jpg'},
        {id: '46', img: '/imgs/slider/slide-3.jpg'},
        {id: '', img: '/imgs/slider/slide-4.jpg'},
        {id: '', img: '/imgs/slider/slide-5.jpg'},
      ],
      menuList: [
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9'
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版'
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro'
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区'
          },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      adsList: [
        {id: 33, img:'/imgs/ads/ads-1.png'},
        {id: 48, img:'/imgs/ads/ads-2.jpg'},
        {id: 45, img:'/imgs/ads/ads-3.png'},
        {id: 47, img:'/imgs/ads/ads-4.jpg'},
      ],
      phoneList: [
        [1,1,1,1],
        [1,1,1,1],
      ]
    }
  },
  components: {
    ServiceBar, 
    Swiper,
    SwiperSlide
  }
}
</script>


<style lang="scss">
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
.index{
  .swiper-box{
    .swiper-container {
      height: 451px;
      .swiper-button-prev{
        left: 274px;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }  
    .nav-menu{
      position: absolute;
      width: 264px;
      height: 450px;
      padding: 26px 0;
      z-index: 10;
      box-sizing: border-box;
      background-color: #55585A7a;
      .menu-wrap{
        .menu-item{
          line-height: 50px;
          height: 50px;
          a{
            display: block;
            position: relative;
            padding-left: 30px;
            font-size: 16px;
            color: #fff;
            &::after{
              position: absolute;
              content: '';
              @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
              right: 30px;
              top: 17.5px;
            }
          }
          &:hover{
            background: $colorA;
            .children {
              display: block; 
            }
          }
          .children{
            display: none;
            position: absolute;
            top: 0;
            right: -962px;
            width: 962px;
            height: 451px;
            background-color: #fff;
            border: 1px solid $colorH ;
            box-sizing: border-box;
            ul{
              display: flex;
              justify-content: space-between;
              height: 75px;
              li{
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
                a{
                  color: $colorB;
                  font-size: 14px;
                }
              }
              img{
                width: 42px;
                height: 35px;
                vertical-align: -12.5px;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
  }
  .ads-box{
    display: flex;
    justify-content: space-between;
    margin-top: 14px;
    margin-bottom: 31px;
    a{
      width: 296px;
      height: 167px;
      img{
        height: 100%;
        width: 100%;
      }
    }
  }
  .banner{
    margin-bottom: 50px;
    a{
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .product-box{
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2{
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper{
      display: flex;  
      .banner-left{
        width: 224px;
        height: 619px;
        margin-right: 16px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .list-box{
        .list{
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child{
            margin-bottom: 0;
          }
          .item{
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
          }
          span{
            display: inline-block;
            width: 67px;
            height: 24px;
            background-color: #7ECF68;
            font-weight:bold;
            line-height: 24px;
            color: #fff;
          }
          .item-img{
            img{
              height: 194px;
              width: 190px;
            }
          }
          .item-info{
            h3{
              font-size: $fontJ;
              color: $colorB;
              line-height: $fontJ;
              font-weight: bold;
            }
            p{
              color: $colorD;
              line-height: 13px;
              margin: 6px auto 13px;
            }
            .price{
              color: red;
              font-size: $fontJ;
              font-weight: bold;
              cursor: pointer; 
              &:after{
                @include bgImg(22px, 22px,'/imgs/icon-cart-hover.png');
                content: '';
                margin-left: 5px;
                vertical-align: -4px;
              }
            }
          }
        }
      }
    }
  }
}
</style>