<template>
  <div class="pos_r">
    <div class="viewsPublicHeader">
      <public-header></public-header>
    </div>
    <router-view class="public-header"></router-view>
    <div class="viewsPublicFooter">
      <public-footer></public-footer>
    </div>
  </div>
</template>

<script>
import publicHeader from '../components/publicHeader'
import publicFooter from "@/components/publicFooter";
export default {
  name: "index",
  components: {
    publicHeader,
    publicFooter
  },
  data() {
    return {}
  },
  created() {
  },
  mounted() {
  },
  methods: {}
}
</script>

<style scoped>

</style>
