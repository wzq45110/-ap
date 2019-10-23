<template>
  <div class="mianforget">
    <!-- 顶部标题 -->
    <div class="dingtiiti">
      <div class="yiuiui">修改密码</div>
    </div>
    <!-- 内容 -->
    <div class="neirong">
      <van-cell-group :border="false">
        <van-field placeholder="请输入手机号" left-icon="contact" autosize size="large" />

        <van-field placeholder="请输入密码" left-icon="orders-o" autosize size="large" type="password" />
        <van-field placeholder="确认密码" left-icon="orders-o" autosize size="large" type="password" />
        <van-field placeholder="请输入6位验证码" left-icon="column" size="large">
          <van-button slot="button" size="small">获取短信</van-button>
        </van-field>
      </van-cell-group>
    </div>
    <!-- 确认 -->
    <div class="buttontt" @click="godeng">确认</div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {
    godeng() {
      this.$router.push({
        path: "/login"
      })
    }
  }
}
</script>

<style lang='less' scoped>
.mianforget {
  position: relative;
  width: 100%;
  // 标题
  .dingtiiti {
    position: fixed;
    z-index: 120;
    background-color: #ff7900;
    width: 100%;
    height: 80px;
    top: 0;
    .yiuiui {
      position: absolute;
      font-size: 20px;
      color: #fff;
      left: 50%;
      top: 45%;
      transform: translate(-50%);
    }
  }
  // 内容
  .neirong {
    position: absolute;
    width: 80%;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
  }
  // 按钮
  .buttontt {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 380px;
    width: 80%;
    height: 40px;
    border-radius: 20px;
    background-color: #ff7900;
    color: #fff;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
  }
}
</style>
