<template>
  <div id="app">
    <!-- <input type="file" accept="image/jpg,image/png,image/jpeg,image/gif" @change="upload"> -->
    <canvas ref="canvas" id="canvas"></canvas>
  </div>
</template>

<script>
//import {uploadBase64} from './api/api';
import bg from './assets/bg.jpg';

export default {
  name: 'app',
  methods: {
    canvas() {
      return this.$refs.canvas;
    },
    context() {
      return this.canvas().getContext('2d');
    },
    circleImg(ctx, img, x, y, r) {
      ctx.save();
      var d =2 * r;
      var cx = x + r;
      var cy = y + r;
      ctx.arc(cx, cy, r, 0, 2 * Math.PI);
      ctx.clip();
      ctx.drawImage(img, x, y, d, d);
      ctx.restore();
    },
    //画底图
    drawBg() {
      let img = new Image();
      img.src = bg;
      img.onload = () => {
        this.canvas().width = img.width;
        this.canvas().height = img.height;
        this.context().drawImage(img, 0,0, img.width,img.height, 0,0, img.width, img.height);
        // let imgtx = new Image();
        // imgtx.src = 'https://avatars3.githubusercontent.com/u/45254264?s=460&v=4';
        // imgtx.onload = () => {
        //   this.context().drawImage(imgtx, 0,0,img.width,img.height, 101,760,240,400)
        // }
        var imgy = new Image();
        imgy.src = 'https://avatars3.githubusercontent.com/u/45254264?s=460&v=4';
        imgy.onload = () => {
          this.circleImg(this.context(), imgy, 90, 745, 45);
        }
      }
    }
  },
  mounted() {
    this.drawBg()
  }
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // },
  // methods: {
  //   upload(e) {
  //     console.log(e.target.files[0])
  //     let file = e.target.files[0];
  //     //判断img大小
  //     if(file.size > 30*1024) {
  //       //转换base64
  //       let reader = new FileReader();
  //       reader.readAsDataURL(file)
  //       reader.onload = res => {
  //         let img = new Image();
  //         img.src = res.target.result;
  //         img.onload = async ()=>{
  //           // 创建canvas进行压缩
  //           let canvas = document.getElementById('canvas');
  //           let context = canvas.getContext('2d');
  //           canvas.width = img.width;
  //           canvas.height = img.height;
  //           //第一种压缩，压缩画布大小
  //           context.drawImage(img, 0,0, img.width,img.height, 0,0, img.width, img.height);
  //           // let base64 = canvas.toDataURL();
  //           // let res = await uploadBase64(base64);

  //           //第二种，压缩
  //           let base65 = canvas.toDataURL('images/jpeg', 0.1);
  //           let res2 = await uploadBase64(base65);
  //           console.log('res2...', res2)
  //         }
  //       }
  //     }
  //   }
  // }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  padding-top: 15px;
  box-sizing: border-box;
}
#canvas{
  width: 100%;
}
</style>
