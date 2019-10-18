<template>
  <div class="mymain">
    <!-- 顶部标题 -->
    <div class="dingtiiti">
      <div class="yiuiui">我的</div>
    </div>
    <!-- 顶部区域 -->
    <div class="mymaintop">
      <div class="leftpic">
        <div class="picnei">
          <van-icon name="manager" />
        </div>
        <div style="color:white; text-align: center;" class="ziti">用户名</div>
      </div>
      <div class="rightpeo" @click="goinfo">
        <div>个人资料</div>
        <div>
          <van-icon color="wihte" name="arrow" />
        </div>
      </div>
    </div>
    <!-- 卡片栏 -->
    <div class="carlan">
      <div class="zhuwen" v-for="(item, index) in daolist" :key="index">
        <router-link :to="item.url_to">
          <div style="color:orange; font-size:30px; font-weight:bold;">{{item.number_i}}</div>
          <div style="color:#999999;">{{item.test}}</div>
        </router-link>
      </div>
    </div>
    <!-- 单元格栏 -->
    <div class="buttonxia">
      <div>
        <!-- <van-icon class="iconfont" class-prefix='icon' name='zhiwu' /> -->
        <van-cell title="霸气值" is-link value="360" icon="weixin" to="/mebaqi"></van-cell>
        <van-cell title="官方APP/公众号/小程序" is-link icon="graphic"></van-cell>
      </div>
      <div class="tbhe">
        <van-cell title="官方微信(关注不迷路)" is-link icon="chat"></van-cell>
      </div>
      <div>
        <van-cell title="推荐有奖" is-link icon="gold-coin" to="/metuij"></van-cell>
        <van-cell title="更多" is-link icon="more"></van-cell>
      </div>
    </div>
    <!-- 固定霸字首页 -->
    <div class="bazizi" @click="gohomre">霸</div>
    <!-- 底部栏tabar -->
    <div>
      <van-tabbar v-model="active" active-color="#FF7900" route>
        <van-tabbar-item></van-tabbar-item>
        <van-tabbar-item icon="star-o" to="/attation">关注</van-tabbar-item>
        <van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
      daolist: [
        { number_i: 3, test: "我的保中", url_to: "/mebaoz" },
        { number_i: 5, test: "我参与的", url_to: "" },
        { number_i: 2, test: "中奖纪录", url_to: "" }
      ]
    }
  },
  created() {},
  methods: {
    gohomre() {
      this.$router.push({
        path: "/"
      })
    },
    goinfo() {
      this.$router.push({
        path: "/meinfo"
      })
    }
  }
}
</script>

<style lang='less' scoped>
.mymain {
  // background-color: pink;
  width: 100%;
  height: 100%;
  position: relative;
  //标题
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
  // 国定霸字
  .bazizi {
    position: fixed;
    bottom: 8px;
    z-index: 100;
    left: 30px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 40px;
    text-align: center;
    background-color: #ff7900;
    border-radius: 50%;
    color: #fff;
  }
  .mymaintop {
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    height: 150px;
    width: 100%;
    margin-top: 80px;
    background-color: #ff7900;
    background: linear-gradient(to top, #ffa12f, #ffdd96);
    .leftpic {
      display: flex;
      justify-content: space-between;
      margin-left: 10px;
      .picnei {
        background-color: #eeeeee;
        border-radius: 50%;
      }
      .ziti,
      .picnei {
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 15px;
      }
    }
    .rightpeo {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 17px;
      width: 110px;
      height: 40px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 20px 0 0 20px;
      color: #fff;
      font-size: 15px;
    }
  }
  .carlan {
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: 95px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 120px;
    background-color: #fff;
    border-radius: 10px;
    // box-shadow: 5rpx 5rpx 5rpx;
    .zhuwen {
      text-align: center;
    }
  }
  .buttonxia {
    padding-top: 70px;
    background-color: #eeeeee;
    width: 100%;
    height: 340px;
    .tbhe {
      margin: 20px 0;
    }
  }
}
</style>
