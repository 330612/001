<template>
  <div class="index">
    <div class="fledh">
      <ul class="ul">
        <li class="li">
          <nuxt-link to="/page2">热门
            <em></em>
          </nuxt-link>
          
        </li>
        <li class="li">
          <nuxt-link to="/newthing">新鲜事
            <em></em>
          </nuxt-link>
          
        </li>
        <li class="li">
          <nuxt-link to="/funny">搞笑
            <em></em>
          </nuxt-link>
          
        </li>
        <li class="li">
          <nuxt-link to="/emotion">情感
            <em></em>
          </nuxt-link>
          
        </li>
        <li class="li">
          <nuxt-link to="/star">明星
            <em></em>
          </nuxt-link>
          
        </li>
        <li class="li">
          <nuxt-link to="/society">社会
            <em></em>
          </nuxt-link>
          
        </li>
      </ul>
    </div>
    <div class="content">
      <nuxt-child />
    </div>
    
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
*{
  padding:0;
  margin:0;
  list-style: none;
}
a{
  text-decoration:none;
  color:black;
}
.fledh{
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #e6e6e6;
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.ul{
  width: 100%;
  height: 100%;
  display: flex;
  
}
.li{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 10px;
}
.li a em{
  display: none;
  width: 14px;
  height: 1px;
  background: #000;
}

.li a{
  color:#a5adb5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.nuxt-link-active{
  padding-top: 10px;
  color:black!important;
}
.nuxt-link-active em{
  display: block!important;
}
.content{
  padding-top: 45px;
  box-sizing: border-box;
}
</style>
