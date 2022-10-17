<template>
  <div class="collection_wrapper pos_r">
    <div class="collection_content pos_r">
      <div class="collection_top pos_r">
        <div class="collection_top_body pos_r clearFix">
          <p class="collection_top_l_text fl">ARUITY<b style="font-weight: 400;margin-left: .4rem">:</b></p>
          <div class="collection_top_r fl">
            <ul class="collection_top_ul d-b flex flex-around-justify">
              <li class="d-b pos_r collection_top_item border-radius flex flex-pack-center flex-align-center"
                  :class="{'collectionTopItemActive':isActive==index}"
                  v-for="(item,index) in collectionList" @click="collectionItemBtn(item,index)"
                  @mouseover="mouseOver(item,index)"
                  @mouseleave="mouseLeave(item,index)">
                <span class="collection_top_item_span d-b border-radius" :style="{background: item.bgColor}"></span>
                <span class="pos_a collectionTextVal" v-show="item.textValShow" v-text="item.textValue"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="collection_middle pos_r">
        <div class="collection_middle_content pos_r">
          <p class="loadingText pos_a" v-show="!middleImgShow">Noting...</p>
          <ul class="collection_middle_ul flex flex-wrap flex-pack-justify">
            <li class="d-b collection_middle_li" v-for="(item,index) in collectionMiddleList" :key="index"
                @click="collectionMiddleBtn()">
              <img :src="collectionMiddleUrl" class="d-b collection_middle_img" alt="" v-show="middleImgShow">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './index.css'
import cookie from "js-cookie";
import UTR from '../../assets/images/UTR.png'
import UR from '../../assets/images/UR.png'
import SSR from '../../assets/images/SSR.png'
import SR from '../../assets/images/SR.png'
import R from '../../assets/images/R.png'
import N from '../../assets/images/N.png'

export default {
  name: "index",
  data() {
    return {
      collectionList: [
        {
          bgColor: '#E8E8E8',
          textValShow: true,
          textValue: 'ALL'
        },
        {
          bgColor: '#A52A2A',
          textValShow: false,
          textValue: 'UTR'
        },
        {
          bgColor: '#CA5024',
          textValShow: false,
          textValue: 'UR'
        },
        {
          bgColor: '#5D2185',
          textValShow: false,
          textValue: 'SSR'
        },
        {
          bgColor: '#D48B0D',
          textValShow: false,
          textValue: 'SR'
        },
        {
          bgColor: '#D2D2D2',
          textValShow: false,
          textValue: 'R'
        },
        {
          bgColor: '#B08E52',
          textValShow: false,
          textValue: 'N'
        }
      ],
      isActive: 0,
      collectionMiddleList: [
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
      ],
      collectionMiddleUrl: '',
      middleImgShow: false,
      queryImgName: '',
    }
  },
  created() {
  },
  mounted() {
    if (cookie.get('queryImgName')) {
      if (cookie.get('queryImgName') == 'UTR') {
        this.collectionMiddleUrl = UTR;
        this.isActive = 1;
        this.middleImgShow = true;
      } else if (cookie.get('queryImgName') == 'UR') {
        this.collectionMiddleUrl = UR;
        this.isActive = 2;
        this.middleImgShow = true;
      } else if (cookie.get('queryImgName') == 'SSR') {
        this.collectionMiddleUrl = SSR;
        this.isActive = 3;
        this.middleImgShow = true;
      } else if (cookie.get('queryImgName') == 'SR') {
        this.collectionMiddleUrl = SR;
        this.isActive = 4;
        this.middleImgShow = true;
      } else if (cookie.get('queryImgName') == 'R') {
        this.collectionMiddleUrl = R;
        this.isActive = 5;
        this.middleImgShow = true;
      } else if (cookie.get('queryImgName') == 'N') {
        this.collectionMiddleUrl = N;
        this.isActive = 6;
        this.middleImgShow = true;
      } else if (cookie.get('queryImgName') == 'ALL') {
        this.collectionMiddleUrl = '';
        this.isActive = 0;
        this.middleImgShow = false;
      }
    }
  },
  methods: {
    // 点击切换卡片
    collectionItemBtn(item, index) {
      // console.log(item);
      this.isActive = index;
      cookie.set('clickShow',true)
      this.queryImgName = item.textValue;
      if (item.textValue == 'UTR') {
        this.collectionMiddleUrl = UTR;
        this.middleImgShow = true;
      } else if (item.textValue == 'UR') {
        this.collectionMiddleUrl = UR;
        this.middleImgShow = true;
      } else if (item.textValue == 'SSR') {
        this.collectionMiddleUrl = SSR;
        this.middleImgShow = true;
      } else if (item.textValue == 'SR') {
        this.collectionMiddleUrl = SR;
        this.middleImgShow = true;
      } else if (item.textValue == 'R') {
        this.collectionMiddleUrl = R;
        this.middleImgShow = true;
      } else if (item.textValue == 'N') {
        this.collectionMiddleUrl = N;
        this.middleImgShow = true;
      } else if (item.textValue == 'ALL') {
        this.collectionMiddleUrl = '';
        this.middleImgShow = false;
      }
    },
    // 点击卡片，跳转到卡片详情
    collectionMiddleBtn() {
      cookie.set('queryImgName',this.queryImgName);
      this.$router.push({
        path: '/collectionDetails',
        query: {
          carName: this.queryImgName
        }
      })
    },
    mouseOver(item, index) {
      item.textValShow = true;
    },
    mouseLeave(item, index) {
      if (item.textValue == 'ALL') {
        item.textValShow = true;
      } else {
        item.textValShow = false;
      }
    }
  }
}
</script>

<style scoped>
.collectionTopItemActive {
  border: 0.125rem solid rgba(255, 255, 255, .8);
}
</style>
