<template>
  <div class="shoudimain">
    <!-- 顶部标题 -->
    <div class="dingtiiti" @click="gobackkk">
      <div class="fanhuian">
        <van-icon size="20px" name="arrow-left" />
      </div>
      <div class="yiuiui">收获地址</div>
    </div>
    <!-- 具体内容 -->
    <div class="morendre" v-for="(item, index) in list1" :key="index">
      <!-- 隔条 -->
      <div class="tiaoge"></div>
      <div>
        <van-cell title="包小花" value="13756433298" size="large" label="上海市浦东新区张家玮电子1号楼201室" />
        <div class="biande">
          <!-- 左侧 -->
          <div class="leftzuo">
            <div class="kuangtu">
              <van-icon color="white" name="success" />
            </div>
            <div class="fontzi">默认地址</div>
          </div>
          <!-- 右侧 -->
          <div class="biandeadd">
            <div class="tuleft">
              <van-icon name="edit" />编辑
            </div>
            <div class="turight">
              <van-icon name="delete" />删除
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="dianniu" @click="newdrem">新增收货地址</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // color: "orange",
      // borde: "none",
      list1: [1, 2]
    }
  },
  created() {},
  methods: {
    // colorbian() {
    //   this.color = !this.color
    //   this.borde = !this.borde
    // },
    newdrem() {
      this.$router.push({
        path: "/fenadd"
      })
    },
    gobackkk() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='less' scoped>
.shoudimain {
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
  .morendre {
    width: 100%;
    height: 150px;
    // background-color: pink;
    margin-top: 80px;
    .tiaoge {
      width: 100%;
      height: 20px;
      background-color: #f1f1f1;
    }
    .biande {
      width: 100%;
      height: 50px;
      //   background-color: green;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .leftzuo,
      .biandeadd {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        font-size: 12px;
      }
      .leftzuo {
        margin-left: 15px;
        width: 70px;
        .kuangtu {
          width: 15px;
          height: 15px;
          border: 1px solid #ccc;
        }
      }
      .biandeadd {
        width: 110px;
        margin-right: 15px;
      }
    }
  }
  .dianniu {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #ff7900;
    line-height: 50px;
    text-align: center;
    color: #ffffff;
  }
}
</style>
