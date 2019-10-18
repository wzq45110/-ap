<template>
  <div class="mainbltter">
    <!-- 顶部标题 -->
    <div class="dingtiiti">
      <div class="fanhuian" @click="goback">
        <van-icon size="20px" name="arrow-left" />
      </div>
      <div class="yiuiui">内容页面</div>
      <div class="dkfhhfug">
        <van-icon color="white" size="20px" name="share" />
      </div>
    </div>
    <div class="baomiannsh">
      <!-- 标题 -->
      <div class="titlebete">
        巨无霸双人堡套餐
        <van-icon name="cross" />30
      </div>
      <div class="yuanchaun">原创: 你兽爷 兽楼处 今天</div>
      <!-- 文章内容区域 -->

      <div
        class="bookmain"
      >说美食，界定有歧义。南美亚马逊流域有一种虫子，面目狰狞，浑身粘液，外人视为恶物，当地人却奉为美食。再如幼鼠，多数人心存敌意，但广东沿海一带却有人嗜好“三吱溜”，即把浑身通红无毛的幼鼠用筷子夹起，幼鼠“吱吱”乱叫，是谓“一吱溜”；再把幼鼠放入盛有由葱、姜、蒜、醋、糖、油等配制的调料盅内一涮，幼鼠再叫，谓之“二吱溜”；最后食客将幼鼠送入口中一咬，幼鼠狂叫，这就是闻名于南方食客中的“三吱溜”！相信这样的场面，在多数人看来不止是恶心，更是恐怖！但对于喜好此菜的人来讲，却是美味。因而这“美食”之意，也就因人而异，因地而异。家母在世时，曾对我说过这样的俗语：“饿时糠也甜，饱时肉也粘黏。”</div>

      <!--发布时间 -->
      <div class="bushijian">本文发布于2019-09-09</div>
      <div class="dibulan">
        <div>阅读 10万+</div>
        <div>
          <van-icon color="#FF7900" name="browsing-history" />在看 558
        </div>
      </div>
      <!--评论区域 -->
      <div class="zuipin">
        <div class="huawrite">
          <!-- 顶 -->
          <div class="caipin">
            <div class="xiaolun">精彩评论</div>
            <div class="pinlun">
              写留言
              <van-icon name="arrow" />
            </div>
          </div>
          <!-- 内容 -->
          <div class="writeneijing" v-for="(item,index) in 4" :key="index">
            <div class="shangbanjie">
              <div class="renxiang">
                <img src="../../assets/images/people.png" alt />
              </div>
              <div class="youxiangxi">
                <div style="color:#B0B0B0; font-size:15px;">团队详情及文字说明部分</div>
                <div style="color:#FD7900; font-size:13px;">
                  <van-icon color="#FD7900" name="good-job-o" />
                  <span>228</span>
                </div>
              </div>
            </div>
            <!-- 具体内容 -->
            <div
              style="font-size:12px; margin-left:50px;"
            >使用规则~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~讲故事的空间打开洒过的口号是v的</div>
          </div>
        </div>
      </div>
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
    goback() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='less' scoped>
.mainbltter {
  width: 100%;
  height: 100%;
  position: relative;
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
    .dkfhhfug {
      position: absolute;
      top: 50%;
      right: 10px;
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
  .baomiannsh {
    position: absolute;
    width: 100%;
    top: 80px;
    .titlebete {
      position: absolute;
      left: 10px;
      top: 15px;
      width: 80%;
      height: 25px;
      font-size: 25px;
      font-weight: 900;
    }
    .yuanchaun {
      width: 100%;
      left: 10px;
      top: 54px;
    }
    .yuanchaun,
    .bushijian {
      position: absolute;
      color: #999999;
      font-size: 15px;
    }
    .bookmain,
    .dibulan {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      width: 94%;
      color: #999999;
      font-size: 15px;
    }

    .bookmain {
      height: 300px;
      top: 90px;
    }
    .bushijian {
      width: 80%;
      left: 10px;
      top: 394px;
    }
    .dibulan {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
      height: 50px;
      top: 410px;
    }
    .zuipin {
      position: absolute;
      width: 98%;
      top: 450px;
      .huawrite {
        width: 100%;
        background-color: #fff;
        .caipin {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 50px;
          .xiaolun {
            margin-left: 10px;
          }
          .pinlun {
            margin-right: 10px;
            color: #ff7900;
            font-size: 14px;
          }
        }
      }
      .writeneijing {
        width: 100%;
        background-color: #fff;
        .shangbanjie {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 25px;
          .renxiang {
            margin-left: 10px;
            width: 30px;
            height: 30px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .youxiangxi {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 300px;
            height: 30px;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
