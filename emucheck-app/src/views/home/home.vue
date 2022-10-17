<template>
  <div class="wall">
    <div class="content">
      <div class="part01">
        <div class="con">
          <div class="homeView-top pos_r">
            <div class="videoClick_img pos_a" @click="videoClickBtn()"></div>
            <div class="homeVide-top-videoBtn pos_a"></div>
            <div class="homeView-top-video pos_a"></div>
            <div class="homeView-top-bom pos_a">
              <div class="homeView-top-bom-item pos_r flex flex-pack-justify">
                <div class="topBomItem-l topBomItem-left pos_r">
                  <div class="box">
                    <div class="box_con">
                      <img src="../../assets/images/baoxiang.png" alt="">
                      <p class="text-l" style="color: #C8C8C8;">Select how many packs to purchase</p>
                      <div class="box_num flex">
                        <!--加减号-->
                        <div>
                          <div class="add_del flex">
                            <div class="btn btn_del" @click="delMoney()">
                              <img src="../../assets/images/btn_del.png" alt="">
                            </div>
                            <div class="input">
                              <input type="text" v-model="money" maxlength="4"
                                     @keyup="money=money.replace(/^(0+)|[^\d]+/g,'')" @blur="moneyNum">
                            </div>
                            <div class="btn btn_add checked"  @click="addMoney()">
                              <img src="../../assets/images/btn_add.png" alt="">
                            </div>
                          </div>
                          <div class="num">{{money*100}}<span style="margin-left:6px;font-size:12px;color:#E6E6E6">USDT</span></div>
                        </div>
                        <div class="btn01">Get now</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="topBomItem-l topBomItem-right pos_r">
                  <div class="topBomItem-right-body clearFix">
                    <img src="../../assets/images/dongwu.png" alt="" class="d-b topBomItemRightImg fr">
                    <p class="fl text-r"
                       style="width: 100%;color: #C8C8C8;
                       font-size: 1.625rem;
                       font-family: Helvetica;
                       line-height: 2rem;margin: 1.5rem 0">Flare token</p>
                    <p class="fl text-r" style="width: 100%;color: #C8C8C8;">100 billion governance tokens Assist the faster development of NFT</p>
                    <div class="btn01 fr" style="margin-top: 2rem">Receive airdrop</div>
                  </div>
                </div>
              </div>
            </div>
<!--            <video id="my-video" src="../../assets/images/video_xingji.mp4" controls = ""-->
<!--                   preload="auto"-->
<!--                   webkit-playsinline="true"-->
<!--                   playsinline="true"-->
<!--                   x-webkit-airplay="allow"-->
<!--                   x5-playsinline-->
<!--                   x5-video-player-type="h5"-->
<!--                   x5-video-player-fullscreen="true"-->
<!--                   x5-video-orientation="portraint"-->
<!--                   x5-video-orientation="portraint"-->
<!--                   style="object-fit:fill">-->
<!--            </video>-->
          </div>
        </div>
      </div>
      <div class="partTwo">
        <div class="part02">
          <div class="rock"></div>
          <div class="fire"></div>
          <div class="title">
            <p>6974 CARD</p>
            <div class="title02">can be refered to negative star pieces</div>
          </div>
          <div class="swiper">
            <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="item in swiperArr" :key="item.id">
              <div class="item_con">
                <div class="shadow"></div>
                <div class="img"><img :src="item.imgUrl" alt=""></div>
                <div class="swiper_itemcon">
                  <div class="con">
                    <div>
                      <p class="text">PRICE</p>
                      <p class="red">1000</p>
                    </div>
                    <div>
                      <div class="imgicon"><img src="../../assets/images/swiper_icon02.png" alt=""></div>
                      <p class="green">+1000</p>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button swiper-button-prev"
            slot="swiper-button-prev"
            @click="prev"></div>
          <div class="swiper-button swiper-button-next"
            slot="swiper-button-next"
            @click="next"></div>
          </div>
        </div>
        <div class="part03">
          <div class="title">
            <p>Use the negative star </p>
            <p>pieces to synthesize your card level</p>
          </div>
          <div class="img3">
            <img src="../../assets/images/section3_3.png" alt="">
          </div>
        </div>

        <img src="../../assets/images/zhedie.png" alt="" class="d-b" v-show="imgShow"
             style="width: 60.125rem;height: 31.625rem;margin: 3rem auto;cursor: pointer"
        @click="imgShowClick()">
        <img src="../../assets/images/zhankai.png" alt="" class="d-b" v-show="!imgShow"
             @click="imgShowBomClick()"
             style="width: 66.125rem;height: 66.75rem;margin: 3rem auto;cursor: pointer">

        <div class="part05">
          <div class="con">
            <div class="title05" style=" margin-top: 2rem;">Metawar assets</div>
            <p class="money" v-text="moneyValue"></p>
          </div>
        </div>
        <div class="part06">
          <div class="con">
            <div class="part04">
              <div class="con">
                <div class="title">Powered by blockchain technology</div>
                <div class="text_con">Blockchain technology powers the future of gaming by allowing players to trade, sell and rent their card assets.
                  Combine cards from your collection with third-party marketplaces (e.g., High Seas, Peak Rat, Monster Market)
                  and other local players.</div>
                <div class="select">
                  <div class="select_item">To obtain levels</div>
                  <div class="select_item">Converting cards to encryption</div>
                  <div class="select_item">Trade with anyone</div>
                </div>
                <div class="select">
                  <div class="select_item">Sell on multiple platforms</div>
                  <div class="select_item">Rent cards to other players</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="part07">
          <div class="rock"></div>
          <div class="card">
            <div class="title">PLAY TO EARN</div>
            <div class="text_con">
              <p>Have you ever wanted to be a professional Gamer?</p>
              <p>Now you can.</p>
              <p>Splinterlands makes it easy to earn on a daily basis. Players can win rewards from Tournaments,
              Ranked play,and Quests! No matter what your skill level or collection size, there is always an
              opportunity to earn!</p>
              <p>Among the many prizes you may win are collectible cards of varying rarity, card packs, magic potions,
              and Dark Energy Crystals (a tradable, digital currency used to buy items in the shop).</p>
            </div>
            <div class="title" style="padding-top:80px;">GOT CRYPTO?</div>
            <div class="text_con">
            <p>Splinterlands makes it easy to get involved with cryptocurrency.</p>
            <p>In fact, a STEEM cryptocurrency wallet is automatically generated for you upon registering on this website.</p>
            <p>For veteran crypto users, you’ll be glad to know that Splinterlands has cross-compatibility with other
            blockchains such as Ethereum, Tron, and WAX.</p>
            <p>Buy in-game credits with a variety of cryptocurrencies, earn crypto and other digital assets,
            and even earn HIVE cryptocurrenty tokens by simply participating in our SplinterTalk social media
            community!</p>
            <p>Building your portfolio has never been so much fun!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './index.css'

export default {
  data(){
    return{
      imgShow: true,
      money:1,
      btnindex:0,
      swiperOptions: {
        loop: true,
        // autoplay: {
        //   delay: 1500,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: false
        // },
        // speed: 800,
        slidesPerView: 4,//显示个数
        direction: 'horizontal',
        slideToClickedSlide:true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
      },
      swiperArr:[
        {id:1,imgUrl:require('../../assets/images/UTR.png')},
        {id:2,imgUrl:require('../../assets/images/UR.png')},
        {id:3,imgUrl:require('../../assets/images/SSR.png')},
        {id:4,imgUrl:require('../../assets/images/SR.png')},
        {id:5,imgUrl:require('../../assets/images/R.png')},
        {id:6,imgUrl:require('../../assets/images/N.png')},
      ],
      sortMenu:'',
      slideEffect:0,
      // scrollLeft:0,
      moneyValue: '$567,890',
      moneyValueNumber: 567890,
    }
  },
  computed: {
    swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
  mounted () {
      window.addEventListener('scroll', this.handleScroll);
      // setInterval("this.showLogin(1)","1000");
      let _this = this;
      setInterval(function (){
        _this.showLogin(_this.moneyValueNumber)
      },1000*60*60*24)
    },
  methods:{
    // 点击展开视频播放
    videoClickBtn() {

    },
    imgShowClick() {
      this.imgShow = false
    },
    imgShowBomClick() {
      this.imgShow = true
    },
    showLogin(val) {
      this.moneyValueNumber = val + 600;
     let tempNum = this.toThousands(this.moneyValueNumber);
     this.moneyValue = '$' + tempNum;
    },
    moneyNum(){},

    delMoney(){
      if(this.money>1){
        this.money=this.money-=1
      }
    },
    addMoney(){
      if(this.money<6974){
        this.money=this.money+=1
      }
    },
    handleScroll () {
     // this.sortMenu = this.$refs.mySwiper.scrollLeft;
	  },
    prev(){
      this.$refs.mySwiper.swiper.slidePrev();
    },
    next(){
      this.$refs.mySwiper.swiper.slideNext();
    },
    // 格式化数字，科学计数法
    toThousands(num) {
      var result = [], counter = 0;
      num = (num || 0).toString().split('');
      for (var i = num.length - 1; i >= 0; i--) {
        counter++;
        result.unshift(num[i]);
        if (!(counter % 3) && i != 0) {
          result.unshift(',');
        }
      }
      return result.join('');
    },
  }
}
</script>
<style>
  .swiper-container {
    margin: 0 auto;
    width: 68.75rem;
  }

</style>
<style lang="scss" scope>
  .wall{
    .part01{
      .con{
        .homeTitle01{
          font-size: 2.75rem;
          font-weight: bold;
          color: #FFFFFF;
          padding-top:6.4375rem;
          font-family: 'Alegreya-SC';

        }
        .homeTitle02{
          font-size: 1.125rem;
          font-weight: bold;
          color: #FFFFFF;
          padding-top:1rem;
        }
        .box{
          .box_con{
            padding:2.25rem 1.875rem;
            img{
              display: block;
              width: 17.1875rem;
              height: 17rem;
            }
            .box_num{
              color: #C8C8C8;
              .add_del{
                width: 11.6875rem;
                border-radius: 0.625rem;
                margin:1.625rem auto 0 auto;
                background-color: rgba(255,255,255,0.2);
                .btn{
                  font-size: 0;
                  border-radius: 0.625rem;
                  border:0.0625rem solid #eee;
                  margin: 0;
                  line-height: 0;
                  cursor: pointer;
                  user-select: none;
                  img{
                    width:100%;
                    height: 100%;
                  }
                  &:active {
                    transform: scale(0.9);
                  }
                }
                .btn_del{
                  padding:1.5625rem 0.9375rem;
                  width:1.375rem;height: 0.1875rem;
                }
                .btn_add{
                  padding:1rem 0.9375rem;
                  width: 1.375rem;
                  height: 1.375rem;
                }
                .checked{
                  // #644DEC #3512AE
                  background:linear-gradient( #644DEC, #3512AE);

                }
                .input{
                  flex: 1;
                  padding:0 0.625rem;
                  // background-color: rgba(255,255,255,0.2);
                  input{
                    width: 100%;
                    border:none;
                    height: 100%;
                    text-align: center;
                    font-size: 1.375rem;
                    color: #fff;
                    background-color: rgba(255,255,255,0);
                  }
                  input[type=text]:focus{ outline: none;}
                }

              }
              .num{
                font-size: 1.375rem;color:#fff;
                margin:1.625rem auto;
              }
            }
          }

        }
      }
    }
    .btn01{
      margin: 1.5rem 0 0 4.5rem;
      width: 13.0625rem;
      height: 3.5rem;
      color: #fff;
      font-size: 1rem;
      line-height: 3.5rem;
      background-image: url('../../assets/images/btn01.png');
      background-size: cover;
      cursor: pointer;
      user-select: none;
      &:active{
        transform: scale(0.95);
      }
    }

    .partTwo{
      background-image: url('../../assets/images/section_two.png');
      background-size:100% auto;
      .part02{
        // background-image: url('../assets/images/section_02.png');
        // background-size:cover;
        width: 100%;
        min-height: 37.5rem;
        padding-top:3.125rem;
        overflow: hidden;
        position: relative;
        .rock{
          position: absolute;
          width: 25.4375rem;height: 27.5rem;
          background-image: url('../../assets/images/rock.png');
          background-size: cover;
        }
        .fire{
          position: absolute;
          right: 0;
          width: 36.6875rem;height: 46.375rem;
          background-image: url('../../assets/images/fire.png');
          background-size: cover;
        }
        .title{
          font-family: 'Alegreya-SC';
          font-weight: 600;
          position: relative;
          p{
            margin:0;
            font-size: 2rem;color:#CDCDCD;
          }
          .title02{
            font-size: 1rem;color:#A2A2A2;
            letter-spacing: 1px;
          }
        }
        .swiper{
          position: relative;
          margin: 0 auto;
          width: 75rem;
          .swiper-button{
            position: absolute;
            width: 3.25rem;
            height: 19.5rem;
            top:50%;
            transform: translate(0,-50%);
            margin-top:0;
            &::after{
              content:'';
              width: 1.875rem;height: 3.25rem;
              background-size: cover;
            }
            &:hover{
              background: rgba(255, 255, 255, 0.13);
            }
          }
          .swiper-wrapper{
            align-items: center;

            .swiper-slide {
              display: inline-block;
              vertical-align: middle;
              width: 20.625rem;
              overflow: hidden;
              .item_con{
                display: inline-block;
                position: relative;
                width: 13.875rem;
                height: 25rem;
                .img{
                  width: 13.25rem;height: 19.75rem;
                  border-radius: 0.625rem;
                  position: absolute;
                  top: 50%;left: 50%;
                  transform: translate(-50%,-50%);
                  img{width: 100%;height: 100%;}
                  // &:hover {
                  //   .swiper_itemcon{
                  //     display:block;
                  //     cursor: pointer;
                  //   }
                  // }
                }
                .shadow{
                  display: none;
                  position: absolute;
                  top: 50%;left: 50%;
                  transform: translate(-50%,-50%);
                  width: 13.875rem;
                  height: 20.375rem;
                  background: rgba(238, 224, 250, 0.43);
                  filter: blur(0.875rem);
                }
                .swiper_itemcon{
                  display:none;
                  position: absolute;
                  bottom: 1.25rem;left: 50%;
                  transform: translate(-50%,-50%);
                  .con{
                    width: 13.25rem;height: 6.25rem;
                    background: rgba(0, 0, 0, 0.73);
                    white-space: nowrap;
                    border-bottom-left-radius: 0.625rem;
                    border-bottom-right-radius: 0.625rem;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    p{
                      display: inline-block;
                      vertical-align: middle;
                    }
                    .text{
                      font-size: 0.875rem;
                      color: #E5E5E5;
                    }
                    .red{
                      font-size: 0.875rem;
                      color:#E75050;
                      margin-left:0.6875rem;
                    }
                    .imgicon{
                      width: 0.9375rem;height: 1.125rem;
                      display: inline-block;
                      vertical-align: middle;
                      img{
                        width: 100%;height: 100%;
                        position: inherit;
                        top:0;left: 0;
                        transform: translate(0,0);
                      }
                    }
                    .green{
                      font-size: 0.875rem;
                      color:#47D791;
                      margin-left:0.25rem;
                    }
                  }

                  /* for Chrome */
                  &::-webkit-scrollbar {
                    display: none;
                  }
                }
              }

              .item_con:hover{
                transform: scale(1.05, 1.05);
                .shadow{
                  display: block;
                }
                .swiper_itemcon{
                  display: block;
                }
              }
            }
          }
          /*Swiper原样式 */
          .swiper-button-prev{
             &::after{
              content:'';
              left: 1.25rem;
              background-image:url("../../assets/images/swiper_prev.png");
            }
          }
          /*改变了颜色和加粗的样式*/
          .swiper-button-next{
            &::after{
              content:'';
              right: 1.25rem;
              background-image:url("../../assets/images/swiper_next.png");
            }
          }
        }
      }
      .part03{
        background-image: url('../../assets/images/section_02.png');
        background-size:cover;
        width: 100%;
        min-height: 41.875rem;
        padding-top:3.125rem;
        .title{
          font-family: 'Alegreya-SC';
          font-weight: 600;
          p{
            margin:0;
            font-size: 2rem;color:#CDCDCD;
          }
        }
        .img3{
          width:75%;margin:0 auto;
          padding:2.5rem;
          img{width:100%}
        }

      }

      .part05{
        width: 100%;
        min-height: 16.75rem;
        background-image: url('../../assets/images/section_05.png');
        background-size: cover;
        .con{
          position: relative;
          .title05{
            width:23.8125rem;height: 6.25rem;
            line-height: 6.25rem;
            font-size: 2rem;color: #fff;
            position: absolute;
            background-image: url('../../assets/images/title05.png');
            background-size: contain;
            top:0;
            left: 50%;
            font-family: 'Alegreya-SC';
            transform: translate(-50%,-50%);
          }
          .money{
            font-size: 3.75rem;color:#fff;
            padding: 6.25rem 0 3.6875rem 0;
            font-weight: 800;
            font-family: "Barlow-Extra Bold";
            letter-spacing: 0.1875rem;
            // img{
            //   width: 325px;
            // }
          }
        }
      }
      .part06{
        width: 100%;
        min-height: 41.875rem;
        background-image: url('../../assets/images/section_06.png');
        background-size: cover;
        position: relative;
        .fire{
          position: absolute;
          right: 0;top:50%;
          width: 100%;height: 43.75rem;
          background-image: url('../../assets/images/fire01.png');
          background-size: contain;
        }
        .con{
          //display: flex;
          //justify-content: center;
          //align-items: center;
          //position: absolute;
          //right: 0;top:50%;
          //transform: translate(0,-50%);
          .part06_left{
            width: 50%;
            margin-right: 5.8125rem;
            .title06{
              color: #fff;font-size: 2rem;
              text-align: left;
              font-family: 'Alegreya-SC';
            }
            .text_con{
              p{
                color: #D8D8D8;font-size: 1rem;
                line-height: 1.875rem;
                text-align: left;
                font-family: Arial;
              }

            }
          }
          .part06_right{
            width: 25.9375rem;
            height: 27.8125rem;
            background: rgba(0, 0, 0, 0.56);
            border-radius: 2.6875rem;
            border: 0.0625rem solid #979797;
            .gift{
              width: 11.0625rem;height: 11.75rem;
              background-image: url('../../assets/images/gift.png');
              background-size: cover;
              margin:4.6875rem auto 2.5625rem auto;
            }
            .btn06{
              width: 16.4375rem;height: 3.75rem;
              color: #fff;font-size: 1rem;
              line-height: 3.75rem;
              background-image: url('../../assets/images/btn06.png');
              background-size: cover;
              margin: 0 auto;
              cursor: pointer;
              user-select: none;
              &:active{
                transform: scale(0.96);
              }

            }
          }
        }

      }
      .part07{
        padding:6.25rem 0;
        position: relative;
        overflow: hidden;
        .rock{
          position: absolute;
          width: 28.5rem;height: 33.3125rem;
          bottom: -5.0625rem;right: 0;
          background-image: url('../../assets/images/rock01.png');
          background-size: cover;
        }
        .card{
          width: 80%;
          margin: 0 auto;
          padding:6.4375rem 7.0625rem;
          background: rgba(12, 19, 38, 0.74);
          .title{
            font-family: 'Alegreya-SC';
            font-weight: 600;color:#F1F1F1;
            font-size: 1.375rem;
            margin-bottom:0.625rem;}
          .text_con{
            color:#A4A4A4;font-size: 1rem;
            font-family: Arial;
            p{
              line-height: 1.875rem;
            }
          }
        }
      }
    }
  }
  .part04{
    width: 100%;
    min-height: 41.875rem;
    .con{
      width:80%;
      margin:6.125rem auto 0 auto;
      background: rgba(12, 19, 38, 0.74);
      padding:4.375rem 0 4.125rem 0;
      .title{
        color:#D8D8D8;font-size: 2rem;
        font-family: 'Alegreya-SC';
        font-weight: 600;
      }
      .text_con{
        width: 86%;
        color:#A4A4A4;font-size: 1rem;
        margin:2.5rem auto 0 auto;
        line-height: 1.75rem;
        font-family: Arial;
      }
      .select{
        width: 89%;
        margin: 4.4375rem auto 0 auto;
        color:#D8D8D8;font-size: 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .select_item{
          width: 33%;
          text-align: left;
          &::before{
            width:1.375rem;height: 1.375rem;
            content:'';
            display: inline-block;
            margin-right:0.625rem;
            vertical-align: middle;
            background-size: contain;
            background-image: url('../../assets/images/part04_select.png');
          }
        }
      }
    }
  }
</style>
