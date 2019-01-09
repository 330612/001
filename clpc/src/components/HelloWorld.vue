<template>
  <div class="box">
    <div :class="this.flag ? 'header posi' : 'header'">
      <div class="h-left">车轮</div>
      <ul class="ul">
        <li class="li">产品</li>
        <li class="li">关于我们</li>
        <li class="li lib">大数据</li>
        <li class="li">新闻</li>
        <li class="li">招聘</li>
        <li class="li">商城</li>
        <li class="li lix">登录/注册</li>
      </ul>
      <div class="yid">更多</div>
    </div>
    <!-- banner -->
    <div class="banner">
      <img src="http://img3.imgtn.bdimg.com/it/u=1951205738,2242308068&fm=214&gp=0.jpg">
    </div>
    <div class="nav">
      <ul class="n-ul">
        <li class="n-li">分析评论</li>
        <li class="n-li n-active">趋势榜单</li>
        <li class="n-li">研究报告</li>
      </ul>
    </div>
    <div class="main">
      <div class="content"></div>
      <div id="myChart" :style="{width: '800px', height: '300px'}"></div>
    </div>
    
  </div>
</template>
<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
  name: 'HellWorld',
  data() {
    return {
      flag: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll ()
    this.drawLine()
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if(scrollTop > 0){
        this.flag = true
      }else if(scrollTop === 0) {
        this.flag = false
      }
    },
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            
              title: {
                  text: '折线图堆叠'
              },
              tooltip: {
                  trigger: 'axis'
              },
              legend: {
                  data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
              },
              grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
              },
              toolbox: {
                  feature: {
                      saveAsImage: {}
                  }
              },
              xAxis: {
                  type: 'category',
                  boundaryGap: false,
                  data: ['周一','周二','周三','周四','周五','周六','周日']
              },
              yAxis: {
                  type: 'value'
              },
              series: [
                  {
                      name:'邮件营销',
                      type:'line',
                      stack: '总量',
                      data:[120, 132, 101, 134, 90, 230, 210]
                  },
                  {
                      name:'联盟广告',
                      type:'line',
                      stack: '总量',
                      data:[220, 182, 191, 234, 290, 330, 310]
                  },
                  {
                      name:'视频广告',
                      type:'line',
                      stack: '总量',
                      data:[150, 232, 201, 154, 190, 330, 410]
                  },
                  {
                      name:'直接访问',
                      type:'line',
                      stack: '总量',
                      data:[320, 332, 301, 334, 390, 330, 320]
                  },
                  {
                      name:'搜索引擎',
                      type:'line',
                      stack: '总量',
                      data:[820, 932, 901, 934, 1290, 1330, 1320]
                  }
              ]
          
        });
    }
  }
}
</script>
<style scoped>
.box{
  width: 100%;
  height: 100%;
  position: relative;
}
.posi{
  background: #fff;
  height: 80px;
}
.main{
  width: 100%;
  height: 500px;
  padding: 0 .3rem;
  box-sizing: border-box;
}
.nav{
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #ccc;
  padding: 0 .4rem;
  box-sizing: border-box;
}
.n-ul{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.n-li{
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 1rem;
}
.n-active{
  border-bottom: 2px solid skyblue;
}
.banner{
  width: 100%;
}
.banner img{
  width: 100%;
  height: 100%;
}
.header{
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.h-left{
  width: 30%;
  display: flex;
  justify-content: center;
  font-size: .3rem
}
.ul{
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.lib{
  border-bottom: 2px solid #ccc;
}
.lix{
  font-size: .1rem;
}
.yid{
  display: none;
}

@media screen and (max-width:1000px) and (min-width:100px) {
  .header{
    width: 100%;
    height: 1rem;
    background: #fff;
  }
  .ul{
    display: none;
  }
  .yid{
    padding-right: .3rem;
    box-sizing: border-box;
    display: block;
  }
  .nav{
    width: 100%;
    height: .8rem;
  }
  .n-ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .n-li{
    width: 33.3%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
