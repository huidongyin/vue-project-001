<template>
  <div class="app">
    <h1>Login</h1>
    <el-button type="primary" @click="submitForm()">Login</el-button>
  </div>
</template>
<script>
import {routerTo} from "@/routerHeplper";

export default {
  name: 'App',
  data(){
    return {}
  },
  methods:{
    submitForm(){
      routerTo(this.$router,'/user')
    }
  }
}
</script>