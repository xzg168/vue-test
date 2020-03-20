<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <el-form
        label-width="70px"
        class="loginForm"
        :model="loginForm"
        :rules="rules"
        ref="loginRuleForm"
      >
        <el-form-item label="账号" prop="userName">
          <el-input v-model="loginForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm('loginRuleForm')"
            >登录</el-button
          >
          <el-button type="info" @click="resetForm('loginRuleForm')"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        userName: 'admin',
        password: '123',
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          {
            min: 3,
            max: 8,
            message: '长度在 3 到 8 个字符',
            trigger: 'change',
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 发起请求
          this.$http.post('/login', this.loginForm).then((res) => {
            if (res.status !== 200) return this.$message.error('登录失败！');
          });

          this.$message.success('登录成功');
          window.sessionStorage.setItem('token', '1234');
          this.$router.push('/home');
        } else {
          //this.$message.error('登录失败');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.login_container {
  background: #360033; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0b8793,
    #360033
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0b8793,
    #360033
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background: #ffffff;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
}
.avatar_box img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.loginForm {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
</style>
