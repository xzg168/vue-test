<template>
  <div class="home">
    <el-container>
      <el-aside :width="isCollapsed ? '64px' : '200px'">
        <!-- 侧边栏菜单区域 -->
        <div class="logoContainer">
          <img src="../assets/logo.png" alt="" />
          <h4 v-if="!isCollapsed">Test</h4>
        </div>
        <el-menu
          background-color="#000000"
          text-color="#fff"
          active-text-color="#409EFF"
          unique-opened
          :collapse="isCollapsed"
          :collapse-transition="false"
          router
          :default-active="activePath"
        >
          <!-- 一级菜单 -->
          <el-submenu
            :index="item.id + ''"
            v-for="item in menulist"
            :key="item.id"
          >
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-setting"></i>
              <!-- 文本 -->
              <span>{{ item.menuName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="changeMenu(subItem.path)"
            >
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>{{ subItem.menuName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div>
            <i
              @click="toggle()"
              class="toggleBtn"
              :class="isCollapsed ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
            >
            </i>
          </div>
          <div>
            <a>{{ user }}</a>
          </div>
        </el-header>
        <el-main>
          <!-- 路由占位符 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created() {
    this.activePath = window.sessionStorage.getItem('activePath');
  },
  computed: {
    user: function() {
      // 通过vuex的getters方法来获取state里面的数据
      //console.log(this.$store.state.user.userName);
      return this.$store.state.user.userName;
      // return this.$store.getters.getUserFn;
    },
  },
  data() {
    return {
      menulist: [
        {
          id: 1,
          menuName: '指令测试',
          children: [
            { id: 11, menuName: '指令测试1', path: '/order' },
            { id: 12, menuName: '指令测试2', path: '/order1' },
          ],
        },
        {
          id: 2,
          menuName: '事件测试',
          children: [{ id: 21, menuName: '组件传值', path: '/event' }],
        },
        {
          id: 3,
          menuName: '生命周期',
          children: [{ id: 31, menuName: '生命周期顺序', path: '/life' }],
        },
      ],
      // 是否折叠
      isCollapsed: false,
      // 被激活的链接地址
      activePath: '',
    };
  },
  methods: {
    changeMenu(path) {
      this.activePath = path;
      window.sessionStorage.setItem('activePath', path);
    },
    toggle() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style scoped>
.home {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.el-header > div {
  display: flex;
  align-items: center;
}
.toggleBtn {
  font-size: 28px;
  cursor: pointer;
  color: #409eff;
}
.el-aside {
  background-color: #000;
}
.logoContainer {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logoContainer img {
  width: 30px;
  height: 30px;
}
.logoContainer h4 {
  color: #fff;
  margin-left: 20px;
  letter-spacing: 0.2em;
}
.el-header {
  background-color: #000;
}
.el-menu {
  border-right: 0;
}
</style>
