<!--  -->
<template>
  <div class="">
    <!-- v-html -->
    <div v-if="isShow">
      <p>v-html指令</p>
      <h4 v-html="htmlMessage"></h4>
      <hr />
    </div>
    <!-- v-text -->
    <p>v-text指令</p>
    <h4 v-text="message"></h4>
    <hr />
    <!-- Mustache -->
    <p>Mustache语法(双花括号绑值)</p>
    <h4>{{ message }}</h4>
    <hr />
    <!-- v-model双向数据绑定 -->
    <p>v-model双向数据绑定</p>
    <input v-model.trim="message" />
    <hr />
    <!-- 是否显示v-html指令 -->
    <el-button @click="toggle()">是否显示v-html指令</el-button>
  </div>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {
      message: '初始值',
      htmlMessage: '<h1>h1标签替换h4标签</h1>',
      isShow: true,
    };
  },
  //方法集合
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="css" scoped>
/* @import url(); 引入公共css类*/
</style>
