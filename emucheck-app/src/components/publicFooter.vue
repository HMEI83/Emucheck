<template>
  <div class="pos_r">
    <div class="footer pos_r">
      <div class="con pos_a flex flex-align-center flex-pack-center">
        <div class="icon icon01" @click="icon01Btn"><img src="../assets/images/icon_01.png" alt=""></div>
        <div class="icon icon02" @click="icon02Btn"><img src="../assets/images/icon_02.png" alt=""></div>
        <div class="icon icon03" @click="icon03Btn"><img src="../assets/images/icon_03.png" alt=""></div>
      </div>
      <div class="beian pos_a flex flex-align-center">
        <p>@2021 by</p>
        <div class="logo_icon">Metawars</div>
        <img src="../assets/images/logo.png" alt="" style="width: 3rem;height: 2.33rem;margin-left: 0.5rem">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "publicFooter",
  data() {
    return {}
  },
  created() {
  },
  mounted() {
  },
  methods: {
    icon01Btn() {
      window.open('Twitter.com/metawarsorg')
    },
    icon02Btn() {
      window.open('https://discord.com/invite/Kh26hcUwNY')
    },
    icon03Btn() {
      window.open('t.me/metawarsorg')
    },
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background: rgba(61,50,136,.7);
  height: 16.875rem;

  .con {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
    }
  }

  .icon01 {
    width: 2.5rem;
    height: 2rem;
    cursor: pointer;
  }

  .icon02 {
    width: 2.5625rem;
    height: 1.8125rem;
    margin: 0 5.875rem;
    cursor: pointer;
  }

  .icon03 {
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
  }

  .beian {
    width: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: 0.625rem;

    p {
      color: #fff;
      font-size: 18px;
      margin: 0 0.625rem 0 0;
    }

    .logo_icon {
      color: #fff;
      font-size: 1.5rem;
      font-family: 'Alegreya-SC';
    }
  }

}
</style>
