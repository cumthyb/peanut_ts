<template>
  <div class="login-register-container">
    <div class="logon-tab clearfix">
      <span ref="longin" :class="{acitve:tabstate==='login'}" @click="onLogin">登录帐号</span>
      <span ref="register" :class="{acitve:tabstate==='register'}" @click="onRegister">注册帐号</span>
    </div>
    <div class="form">
      <Form
        ref="formLogin"
        class="formLogin"
        :model="formLogin"
        :rules="ruleformLogin"
        v-show="tabstate==='login'"
      >
        <FormItem prop="user" class="formItem user" label="用户名">
          <Input type="text" v-model="formLogin.user" placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password" class="formItem password" label="密码">
          <Input type="password" v-model="formLogin.password" placeholder="密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <div class>
          <Checkbox v-model="rememberPass">记住密码</Checkbox>
        </div>
        <FormItem class="formItem">
          <span class="loginBtn" type="primary" @click="handleSubmit('formLogin')">登 录</span>
        </FormItem>
      </Form>

      <Form
        ref="formRegister"
        class="formRegister"
        :model="formRegister"
        :rules="ruleformRegister"
        v-show="tabstate==='register'"
      >
        <FormItem prop="tel" class="formItem tel" label="手机号">
          <Input type="text" v-model="formRegister.tel" placeholder="手机号">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="user" class="formItem user" label="用户名">
          <Input type="text" v-model="formRegister.user" placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password" class="formItem password" label="密码">
          <Input type="password" v-model="formRegister.password" placeholder="密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem class="formItem">
          <span class="registerBtn" type="primary" @click="handleRegister('formRegister')">注 册</span>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop, Watch } from 'vue-property-decorator'
import Mock from 'mockjs'

@Component({
  components: {

  }
})

export default class Login extends Vue {
  @Prop({ default: '', type: String }) funType

  @Provide() tabstate: string = 'login'
  @Provide() formLogin: any = {}
  @Provide() formRegister: any = {}
  @Provide() rememberPass: boolean = false
  @Provide() ruleformLogin: any = {
    user: [
      { required: true, message: '请输入用户名', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码.', trigger: 'blur' },
      { type: 'string', min: 6, message: '密码长度最少6位', trigger: 'blur' }
    ]
  }

  @Provide() ruleformRegister: any = {
    tel: [
      { required: true, message: '请输入手机号', trigger: 'blur' }
    ],
    user: [
      { required: true, message: '请输入用户名', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码.', trigger: 'blur' },
      { type: 'string', min: 6, message: '密码长度最少6位', trigger: 'blur' }
    ]
  }

  @Watch('rememberPass')
  onRememberPassChanged(val: boolean, oldVal: boolean) {
    console.log('val  ', val);
    console.log('oldVal  ', oldVal);
  }


  mounted() {
    this.mockForm()
  }

  mockForm() {
    this.formRegister = {
      user: Mock.Random.first(),
      password: Mock.Random.word(6, 8),
      tel: getMoble()
    }
    function getMoble() {
      var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
      var i = parseInt(10 * Math.random());
      var prefix = prefixArray[i];
      for (var j = 0; j < 8; j++) {
        prefix = prefix + Math.floor(Math.random() * 10);
      }
      return prefix
    }
  }

  onLogin() {
    this.tabstate = 'login'
  }

  handleSubmit(name: string) {
    this.$refs[name].validate((valid: boolean) => {
      if (valid) {
        this.doLogin(this.formLogin)
      }
    })
  }

  doLogin(formLogin: any) {
    console.log('formLogin ', formLogin);
    this.$http
      .post('member-login', this.formLogin)
      .then(response => {
        this.$Notice.info({
          title: '登陆成功'
        })
        setTimeout(() => {
          this.$store.commit('login', response.data)

          this.$emit('login-success', response.data)
        }, 200)
      })
      .catch(error => {
        this.$Notice.error({
          title: error.message
        })
        this.$emit('login-fail')
      })
  }

  onRegister() {
    this.tabstate = 'register'

  }


  handleRegister(name: string) {
    this.$refs[name].validate((valid: boolean) => {
      if (valid) {
        this.doRegister(this.formRegister)
      }
    })
  }

  doRegister(formRegister: any) {
    console.log('formRegister ', formRegister);
    this.$http
      .post('member-register', this.formRegister)
      .then(response => {
        this.$Notice.info({
          title: '注册成功'
        })
        setTimeout(() => {
          this.$emit('register-success')
        }, 1000)
      })
      .catch(error => {
        this.$Notice.error({
          title: error.message
        })
        this.$emit('register-fail')
      })
  }

}
</script>

<style lang="less">
.login-register-container {
  margin: 50px auto;
  width: 460px;
  min-height: 400px;

  border-radius: 0;
  background: #fff;
  padding: 15px;
  border: 1px solid #e4ecf3;
  .logon-tab {
    margin: -15px -15px 0;
    height: 64px;
    span {
      display: block;
      padding: 20px;
      float: left;
      width: 50%;
      font-size: 16px;
      text-align: center;
      color: #616161;
      background-color: #f5f5f5;
      cursor: pointer;
      &:hover {
        transition: all 0.3s ease;
      }
    }
    .acitve {
      background-color: #fff;
      transition: all 0.3s ease;
    }
  }
  .form {
    padding: 40px 45px 20px;
    .formLogin,
    .formRegister {
      .formItem {
        margin-bottom: 30px !important;
        .loginBtn,
        .registerBtn {
          margin-top: 20px;
          cursor: pointer;
          text-align: center;
          display: block;
          width: 100%;
          border-color: #cc5b00;
          background-color: #ff7200;
          color: #fff;
          font-size: 14px;
          padding: 12px 35px;
          line-height: 1.3333333;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>