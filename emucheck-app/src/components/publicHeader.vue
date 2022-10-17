<template>
  <div class="publicHeader-wrapper pos_r">
    <div class="publicHeader-content pos_r">
      <div class="publicHeaderNav flex flex-pack-justify flex-align-center margin-auto">
        <div class="navLeft flex flex-around-justify flex-align-center">
          <div class="logo">
            <img src="../assets/images/logo.png" alt="">
          </div>
          <div class="publicHeader_nav_item" :class="navIndex==item.id?'checked':''"
               v-for="(item,index) in navArrL" :key="index" @click="changeNav(item)">
            {{ item.value }}
          </div>
        </div>
        <div class="navright flex flex-around-justify flex-align-center">
          <div class="publicHeader_nav_item" :class="navIndexR==item.id?'checkedR':''"
               v-for="(item,index) in navArrR" :key="index" @click="changeNavR(item)">
            {{ item.value }}
          </div>
        </div>
      </div>
    </div>
    <!--    登录-->
    <div class="login_wrapper pos_f" :style="{height: scrollerHeight}" v-show="closeViewShow">
      <div class="login_content pos_r h100">
        <div class="login_content_body pos_a flex flex-pack-center flex-align-center">
          <div class="login_content_close pos_a">
            <i class="iconfont iconclose closeIcon pos_a"
               :class="{'closeColor': closeColorShow}"
               @click="closeBtn()"
               @mouseover="mouseOverClose()"
               @mouseleave="mouseLeaveClose()"></i>
          </div>
          <img class="d-b codeImgClass" src="../assets/images/codeImg.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './publicHeader.css'
import cookie from "js-cookie";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import NodeWalletConnect from "@walletconnect/node";
import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";

export default {
  name: 'publicHeader',
  watch: {
    $route(to, from) {
      // console.log(to.path);
    }
  },
  data() {
    return {
      navArrL: [
        {id: 1, value: 'Games'},
        {id: 2, value: 'Synthesis'},
        {id: 3, value: 'Combat'},
        {id: 4, value: 'Ranking'},
        {id: 5, value: 'Collection'},
      ],
      navArrR: [
        {id: 1, value: 'Wallet login'},
        {id: 2, value: 'Language'},
      ],
      navIndex: 1,
      navIndexR: 0,
      closeViewShow: false,
      closeColorShow: false
    }
  },
  computed: {
    // 滚动区高度
    // (业务需求：手机屏幕高度减去头部标题和底部tabbar的高度，当然这2个高度也是可以动态获取的)
    scrollerHeight: function () {
      return (window.innerHeight) + 'px';
    }
  },

  created() {
  },
  mounted() {
  },
  methods: {
    changeNav(item) {
      this.navIndex = item.id
      cookie.set('clickShow', false);
      cookie.remove('queryImgName');
      if (item.id == 1) {
        this.$router.push('/homeView')
      } else if (item.id == 2) {
        this.$router.push({
          path: '/synthesisView',
          query: {id: item.id}
        })
      } else if (item.id == 3) {
        this.$router.push({
          path: '/combatView',
          query: {id: item.id}
        })
      } else if (item.id == 4) {
        this.$router.push({
          path: '/rankingView',
          query: {id: item.id}
        })
      } else if (item.id == 5) {
        this.$router.push({
          path: '/collectionView',
          query: {id: item.id}
        })
      }
    },
    changeNavR(item) {
      cookie.set('clickShow', false);
      cookie.remove('queryImgName');
      this.navIndexR = item.id;
      if (item.value == 'Wallet login') {
        // this.closeViewShow = true;
        // Create connector
        const walletConnector = new NodeWalletConnect({
              bridge: "https://bridge.walletconnect.org", // Required
            },
            {
              clientMeta: {
                description: "WalletConnect NodeJS Client",
                url: "https://nodejs.org/en/",
                icons: ["https://nodejs.org/static/images/logo.svg"],
                name: "WalletConnect",
              },
            });
        // Check if connection is already established
        if (!walletConnector.connected) {
          // create new session
          walletConnector.createSession().then(() => {
            // get uri for QR Code modal
            const uri = walletConnector.uri;
            // display QR Code modal
            WalletConnectQRCodeModal.open(uri, () => {
                  console.log("QR Code Modal closed");
                  this.navIndexR = 0;
                },
                true // isNode = true
            );
          });
        }
        // Subscribe to connection events
        walletConnector.on("connect", (error, payload) => {
          console.log(payload);
          if (error) {
            throw error;
          }

          // Close QR Code Modal
          WalletConnectQRCodeModal.close(
              console.log('333333'),
              // true // isNode = true
          );

          // Get provided accounts and chainId
          const { accounts, chainId } = payload.params[0];
        });
      }
    },
    // 点击关闭弹框按钮
    closeBtn() {
      this.closeViewShow = false;
      this.navIndexR = 0;
    },
    // 鼠标移入
    mouseOverClose() {
      this.closeColorShow = true;
    },
    // 鼠标移出
    mouseLeaveClose() {
      this.closeColorShow = false;
    }
  }
}
</script>

<style scoped>
.login_wrapper {
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, .79);
  z-index: 99;
}

.login_content {
}

.login_content_body {
  width: 36.625rem;
  height: 36.41rem;
  border-radius: 2rem;
  top: 50%;
  left: 50%;
  margin-left: -22.125rem;
  margin-top: -24.33rem;
  z-index: 1;
  background-color: rgba(255, 255, 255, 1);
  padding: 8.625rem 3.625rem 3.625rem 4rem;
}

.login_content_close {
  width: 11.33rem;
  height: 11.58rem;
  top: 0;
  right: 0;
  z-index: 1;
  /*background-color: #dddddd;*/
  /*border-top-right-radius: 2rem;*/
  /*background-image: radial-gradient(circle 12rem at 0 100%, transparent 50rem, #dddddd 50%);*/
  /*-moz-background-image: -moz-radial-gradient(circle 12rem at 0 100%, transparent 50rem, #dddddd 50%);*/
  background: url("../assets/images/close_gradient01.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.closeIcon {
  font-size: 2rem;
  font-weight: 700;
  color: rgba(0, 0, 0, .3);
  cursor: pointer;
  top: 0.625rem;
  right: 1.25rem;
}

.closeColor {
  color: rgba(0, 0, 0, 1) !important;
}

.codeImgClass {
  width: 36.5625rem;
  height: 36.3125rem;
}
</style>
