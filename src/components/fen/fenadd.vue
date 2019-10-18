<template>
  <div class="newmaindre">
    <!-- 顶部标题 -->
    <div class="dingtiiti" @click="gobackkk">
      <div class="fanhuian">
        <van-icon size="20px" name="arrow-left" />
      </div>
      <div class="yiuiui">新增地址</div>
    </div>
    <!-- <van-icon name="manager" slot="left-icon"/> -->
    <div class="kaoshangmian">
      <van-cell-group>
        <van-cell title="尼古拉斯" icon="contact" />
        <van-cell title="13745634890" icon="orders-o" />
        <van-cell title="重庆市渝北区冉家呗" icon="location-o" />
        <van-cell title="请输入详细地址" icon="aim" />
      </van-cell-group>
    </div>
    <!-- 割线区域 -->
    <div class="fengege"></div>
    <!-- 默认地址 -->
    <div class="mozhi">
      <van-radio checked-color="#FF7900">设置默认地址</van-radio>
    </div>
    <!-- 保存按钮区域 -->
    <div class="baoan">保存</div>
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
.newmaindre {
  width: 100%;
  height: 100%;
  //标题
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
      left: 20px;
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
  .kaoshangmian {
    width: 100%;
    margin-top: 80px;
  }
  .fengege {
    width: 100%;
    height: 15px;
    // margin-top: px;
    background-color: #eeeeee;
  }
  .mozhi {
    margin-left: 15px;
    margin-top: 15px;
  }
  .baoan {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    //   top: 400rpx;
    width: 90%;
    height: 40px;
    background-color: #ff7900;
    border-radius: 20px;
    margin-top: 40px;
    color: #ffff;
    line-height: 40px;
    text-align: center;
  }
}
</style>
