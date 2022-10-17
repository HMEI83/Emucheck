<template>
  <div class="collectionDetails-wrapper pos_r">
    <div class="collectionDetails-content pos_r">
      <div class="collectionDetails-top pos_r">
        <div class="collectionDetails-top-body clearFix" @click="collectionBackBtn()">
          <img src="../../../assets/images/backImg.png" alt="" class="d-b fl" style="width: 2.1625rem;height: 1.6625rem">
          <p class="collectionDetails-text fl">Collection</p>
        </div>
      </div>
      <div class="collectionDetails-body pos_r">
        <div class="collectionDetails-body-content pos_r clearFix">
          <img :src="carImgUrl" alt="" class="d-b collectionDetails-body-content-img fl">
          <div class="collectionDetails-body-content-table fr">
            <div class="bodyContentTable-body pos_r">
              <ul class="table_header d-b flex flex-around-justify">
                <li class="table_body d-b" v-for="(item,index) in tableHeaderList" :key="index">{{ item }}</li>
              </ul>
              <ul class="d-b table_bom_ul">
                <li class="d-b table_bom_li flex flex-around-justify" v-for="(item,index) in tableBomList" :key="index">
                  <span class="d-b table_bom_span">{{ item.tableBomText }}</span>
                  <span class="d-b table_bom_span">{{ item.tableBomText01 }}</span>
                  <span class="d-b table_bom_span">{{ item.tableBomText02 }}</span>
                  <span class="d-b table_bom_span" style="color: #7AC6FF">{{ item.tableBomText03 }}</span>
                  <span class="d-b table_bom_span" style="color: #7AC6FF">{{ item.tableBomText04 }}</span>
                  <span class="d-b table_bom_span">{{ item.tableBomText05 }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UTR from '../../../assets/images/UTR.png'
import UR from '../../../assets/images/UR.png'
import SSR from '../../../assets/images/SSR.png'
import SR from '../../../assets/images/SR.png'
import R from '../../../assets/images/R.png'
import N from '../../../assets/images/N.png'

export default {
  name: "index",
  data() {
    return {
      carImgUrl: '',
      tableHeaderList: ['Event', 'Unit Price', 'Quantity', 'From', 'To', 'Date'],
      tableBomList: [
        {
          tableBomText: 'Sale',
          tableBomText01: '1.5',
          tableBomText02: '1',
          tableBomText03: '0x7f…ED8e',
          tableBomText04: '0x7f…ED8e',
          tableBomText05: 'a day ago'
        },
        {
          tableBomText: 'Sale',
          tableBomText01: '1.5',
          tableBomText02: '1',
          tableBomText03: '0x7f…ED8e',
          tableBomText04: '0x7f…ED8e',
          tableBomText05: 'a day ago'
        },
        {
          tableBomText: 'Sale',
          tableBomText01: '1.5',
          tableBomText02: '1',
          tableBomText03: '0x7f…ED8e',
          tableBomText04: '0x7f…ED8e',
          tableBomText05: 'a day ago'
        },
        {
          tableBomText: 'Sale',
          tableBomText01: '1.5',
          tableBomText02: '1',
          tableBomText03: '0x7f…ED8e',
          tableBomText04: '0x7f…ED8e',
          tableBomText05: '3 month ago'
        },
        {
          tableBomText: 'Sale',
          tableBomText01: '0.299',
          tableBomText02: '1',
          tableBomText03: '0x7f…ED8e',
          tableBomText04: '0x7f…ED8e',
          tableBomText05: '3 month ago'
        },
        {
          tableBomText: 'Sale',
          tableBomText01: '0.299',
          tableBomText02: '1',
          tableBomText03: '0x7f…ED8e',
          tableBomText04: '0x7f…ED8e',
          tableBomText05: '3 month ago'
        },

      ],
    }
  },
  created() {
  },
  mounted() {
    if (this.$route.query.carName == 'UTR') {
      this.carImgUrl = UTR;
    } else if (this.$route.query.carName == 'UR') {
      this.carImgUrl = UR;
    } else if (this.$route.query.carName == 'SSR') {
      this.carImgUrl = SSR;
    } else if (this.$route.query.carName == 'SR') {
      this.carImgUrl = SR;
    } else if (this.$route.query.carName == 'R') {
      this.carImgUrl = R;
    } else if (this.$route.query.carName == 'N') {
      this.carImgUrl = N;
    }
  },
  methods: {
    collectionBackBtn() {
      this.$router.push({
        path: '/collectionView',
        query: {}
      })
    }
  }
}
</script>

<style scoped>
.collectionDetails-top {
  padding: 1.375rem 5rem;
}

.collectionDetails-top-body {
  width: 8.125rem;
  height: 1.75rem;
  background: rgba(0, 0, 0, 0.51);
  border-radius: 1.1875rem;
  padding: 0.5rem 1.1875rem 0.5625rem;
  cursor: pointer;
}

.collectionDetails-text {
  font-size: 1rem;
  font-family: ArialMT;
  color: rgba(255, 255, 255, .8);
  line-height: 1.75rem;
  margin-left: 0.625rem;
}

.collectionDetails-body {
  min-height: 48.4375rem;
  background: rgba(0, 0, 0, .35);
}

.collectionDetails-body-content {
  padding-top: 1.875rem;
  padding-left: 5rem;
  padding-right: 5rem;
}

.collectionDetails-body-content-img {
  width: 18rem;
  height: 26.8125rem;
}

.collectionDetails-body-content-table {
  width: 81.25rem;
  height: 31.25rem;
  opacity: .5;
}

.table_header {
  border-bottom: 0.125rem solid #979797;
  padding-bottom: 1.1875rem;
}

.table_body {
  width: 16%;
  font-size: 1.125rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 1.5625rem;
}

.table_bom_li {
  border-bottom: 0.0625rem solid #5C5C5C;
}

.table_bom_li:last-child {
  border-bottom: none;
}

.table_bom_span {
  width: 16%;
  font-size: 0.875rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #D0D0D0;
  line-height: 1.25rem;
  padding: 1.25rem 0;
}
</style>
