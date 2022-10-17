<template>
  <div class="wall">
    <div class="content">
      <div class="part01">
        <div class="con">
          <div class="title01">COMING SOON ... ...</div>
          <div class="title02"><img src="../../assets/images/logo.png" alt="" style="width: 352px;height: 289px"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      money:'',
    }
  },
  mounted(){
    this.navIndex = this.$route.query.id
  },
  methods:{
  }
}
</script>

<style lang="scss" scope>
  .wall{
    .part01{
      .con{
        min-height: 48.4375rem;
        .title01{
          font-weight: bold;
          padding-top:6.4375rem;
          font-size: 3rem;
          font-family: Arial-BoldItalicMT, Arial;
          color: #9F94FF;
          line-height: 3.4375rem;
          text-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.72);
          font-style: italic;

        }
        .title02{
          font-size: 1.125rem;
          font-weight: bold;
          color: #FFFFFF;
          padding-top:2rem;
        }
      }
    }
  }
</style>
