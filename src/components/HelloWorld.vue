<template>
  <div class="hello">
    <h1>我来自属性传递 {{ msg }}</h1>
    <el-button @click="send()">子元素传递值给父元素</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {
    send() {
      this.$emit('sendMsg', Math.floor(Math.random() * 10));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
