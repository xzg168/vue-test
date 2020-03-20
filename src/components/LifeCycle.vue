<!--  -->
<template>
  <div class="">
    <h1>生命周期:打开F12查看控制台</h1>
    <p>{{ message }}</p>
    <el-button @click="toggle()">改变</el-button>
    <br />
    <h1>antd Vue 样式</h1>
    <a-steps :current="1">
      <a-step>
        <!-- <span slot="title">Finished</span> -->
        <template slot="title">
          Finished
        </template>
        <span slot="description">This is a description.</span>
      </a-step>
      <a-step
        title="In Progress"
        subTitle="Left 00:00:08"
        description="This is a description."
      />
      <a-step title="Waiting" description="This is a description." />
    </a-steps>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      message: '123',
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    toggle() {
      this.message = '234';
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log('生命周期created');
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log('生命周期mounted');
  },
  beforeCreate() {
    console.log('生命周期beforeCreate');
  }, //生命周期 - 创建之前
  beforeMount() {
    console.log('生命周期beforeMount');
  }, //生命周期 - 挂载之前
  beforeUpdate() {
    console.log('生命周期beforeUpdate');
  }, //生命周期 - 更新之前
  updated() {
    console.log('生命周期updated');
  }, //生命周期 - 更新之后
  beforeDestroy() {
    console.log('生命周期beforeDestroy');
  }, //生命周期 - 销毁之前
  destroyed() {
    console.log('生命周期destroyed');
  }, //生命周期 - 销毁完成
  activated() {
    console.log('生命周期activated');
  }, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="css" scoped>
/* @import url(); 引入公共css类*/
</style>
