<!-- 父组件 -->
<template>
  <div class="">
    <h1>vm.$emit传值,vm.$on接收值</h1>
    <div>
      父组件<br />
      将msg属性传递给HelloWorld组件
      <p>接收子元素传值:{{ childMsg }}</p>
    </div>
    <HelloWorld msg="你好,我是子元素" v-on:sendMsg="reciveMsg" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import HelloWorld from './HelloWorld.vue';
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { HelloWorld },
  data() {
    //这里存放数据
    return {
      childMsg: '',
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    reciveMsg(msg) {
      this.childMsg = msg;
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
