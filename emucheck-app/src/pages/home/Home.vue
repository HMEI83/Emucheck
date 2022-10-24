<template>
  <n-grid x-gap="5" :cols="2">
    <n-gi class="light-green">
      <div style="text-align: center">
        <span
          >Best Practices for Monitoring E-Commerce and Website Performance
        </span>
      </div>
      <n-button type="tertiary" class="vertical-center"> Tertiary </n-button>
    </n-gi>
    <n-gi>
      <div class="green">put image</div>
    </n-gi>
  </n-grid>
  <n-grid :cols="1">
    <n-gi>
      <div style="text-align: center">ALL-IN-ONE ECOMMERCE PERFORMANCE TOOLSET</div>
      <div style="text-align: center">
        Emucheck is a e-commerce and all websites performance monitoring
        platform. It is designed to provide visibility through all the different
        parts of the technology stack to help you quickly troubleshoot any
        issues that may be degrading the ecommerce shopping experience or user
        experience for your customers.
      </div>
      <n-grid x-gap="12" :cols="8">
    <n-gi>
      <div class="light-green" />
    </n-gi>
    <n-gi>
      <div class="green" />
    </n-gi>
    <n-gi>
      <div class="light-green" />
    </n-gi>
    <n-gi>
      <div class="green" />
    </n-gi>
  </n-grid>
    </n-gi>
  </n-grid>
  <n-grid x-gap="5" :cols="2">
    <n-gi class="light-green">
      <div style="text-align: center">
        <span>
            <h1>
                Why us?
            </h1>
            <p>At emucheck, you don’t have to be an SEO pro to rank higher and get more traffic</p>
        </span>
      </div>
    </n-gi>
    <n-gi>
        <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;" class="light-green ">
          image
        </n-layout-sider>
        <n-layout-content content-style="padding: 24px;" class="green">
            We provide you with visitor data so you can identify what they are doing on your website
        </n-layout-content>
      </n-layout>
      <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;" class="light-green ">
          image
        </n-layout-sider>
        <n-layout-content content-style="padding: 24px;" class="green">
            We provide you with visitor data so you can identify what they are doing on your website
        </n-layout-content>
      </n-layout>
      <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;" class="light-green ">
          image
        </n-layout-sider>
        <n-layout-content content-style="padding: 24px;" class="green">
            We provide you with visitor data so you can identify what they are doing on your website
        </n-layout-content>
      </n-layout>
    </n-gi>
  </n-grid>
</template>

<style scoped>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}

.vertical-center {
  margin: 0;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>