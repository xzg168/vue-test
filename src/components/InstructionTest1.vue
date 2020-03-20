<!--  -->
<template>
  <div class="">
    <p>v-for 指令</p>
    <ul>
      <li :key="item.id" v-for="item in items">{{ item.name }}</li>
    </ul>
    <hr />
    <p>动态切换v-bind:class样式</p>
    <h1 :class="color">看我变颜色</h1>
    <el-button @click="toggle()">切换样式</el-button>
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
      items: [
        { id: 1, name: '红' },
        { id: 2, name: '黑' },
        { id: 3, name: '蓝' },
        { id: 4, name: '绿' },
      ],
      color: 'red',
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    toggle() {
      this.color = 'blue';
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
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
