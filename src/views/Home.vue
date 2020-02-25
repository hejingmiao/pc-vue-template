<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App for Netease" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
// import { apiLogin } from '@/utils/api' // 导入我们的api接口
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created () {
    this.onLoad()
  },
  methods: {
    onLoad() {
      // apiLogin({username: 'hjm'}).then(res => {
      //   console.log(res)
      // }).catch(err => {
      //   console.log('apiLogin', err)
      // })
    }        
  }
};
</script>
