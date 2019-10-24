<template>
  <div class="mainabout">
    <!-- 顶部标题 -->
    <div class="dingtiiti">
      <div class="fanhuian" @click="gobackkk">
        <van-icon size="20px" name="arrow-left" />
      </div>
      <div class="yiuiui">关于霸王到</div>
    </div>
    <div class="neizhong">
      <h2>关于霸王到</h2>
      <div style="margin-top:20px">hcfdjkhdjbhf</div>
      <h3>使用规则</h3>
      <div style="margin-top:20px">hcfdjkhdjbhf</div>
      <h3>个人隐私</h3>
      <div style="margin-top:20px">hcfdjkhdjbhf</div>
      <h3>处理原则</h3>
      <div style="margin-top:20px">hcfdjkhdjbhf</div>
      <h3>受理范围</h3>
      <div style="margin-top:20px">hcfdjkhdjbhf</div>
      <h3>免责声明</h3>
      <div style="margin-top:20px">hcfdjkhdjbhf</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {
    gobackkk() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='less' scoped>
.mainabout {
  width: 100%;
  height: 100%;
  // 标题
  .dingtiiti {
    position: fixed;
    z-index: 120;
    background-color: #ff7900;
    width: 100%;
    height: 80px;
    top: 0;
    .fanhuian {
      position: absolute;
      top: 50%;
      color: #fff;
      left: 10px;
    }
    .yiuiui {
      position: absolute;
      font-size: 20px;
      color: #fff;
      left: 50%;
      top: 45%;
      transform: translate(-50%);
    }
  }
  .neizhong {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin-top: 100px;
    padding: 0 20px;
    h3,
    h2 {
      margin-top: 30px;
    }
  }
}
</style>
