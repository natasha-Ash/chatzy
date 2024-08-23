<template>
  <div class="login-bg">
    <div class="login-container">
      <div class="tabs">
        <button
          :class="{ active: isLogin }"
          @click="isLogin = true"
          style="border-top-left-radius: 10px;border-bottom-left-radius: 10px;"
        >
          Login
        </button>
        <button
          :class="{ active: !isLogin }"
          @click="isLogin = false"
          style="border-top-right-radius: 10px;border-bottom-right-radius: 10px;"

        >
          Sign Up
        </button>
      </div>

      <div v-if="isLogin" class="form">
        <h2     
          style="display: flex;
          justify-content: center;">
          Welcome Back</h2>
        <input
          type="text"
          placeholder="User ID"
          v-model="loginDetail.userId"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="loginDetail.password"
        />
        <div v-if="loginDetail.loginFailed" class="error">
          User ID and Password do not match.
        </div>
        <button @click="login()">Login</button>
        <div class="layout-row" style="margin: 15px;display: flex;justify-content: center;" >
          <div 
          style="font-size: small;">
          Dont have an account ?</div>
          <div 
            style="font-size: small; color: #6aadf5; padding-left: 5px;"
            @click="isLogin = false"> 
             SignUp for free
          </div>
        </div>
      </div>

      <div v-else class="form">
        <h2          
          style="display: flex;
          justify-content: center;">
          Sign Up Form
        </h2>
        <input
          type="text"
          placeholder="User ID"
          v-model="signUpDetail.userId"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="signUpDetail.password"
        />
        <input
          type="text"
          placeholder="User Name"
          v-model="signUpDetail.userName"
        />
        <input
          type="text"
          placeholder="Status"
          v-model="signUpDetail.status"
        />
        <button @click="signUp()">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  inject: ["api"],
  data() {
    return {
      isLogin: true, 
      loginDetail: {
        userId: "",
        password: "",
        loginFailed: false,
      },
      signUpDetail: {
        userId: "",
        password: "",
        userName: "",
        status: "",
      },
    };
  },
  methods: {
    async login() {
      let user = await this.api.login(
        this.loginDetail.userId,
        this.loginDetail.password
      );
      if (!user) {
        this.loginDetail.loginFailed = true;
      } else {
        this.$emit("login", user);
      }
    },
    async signUp() {

      console.log("Sign Up:", this.signUpDetail);
    },
  },
};
</script>

<style>
.login-bg {
  background: #f4f2ff;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../../images/doodle.svg);
}

.login-container {
  width: 400px;
  padding: 20px;
  background: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.tabs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-radius: 10px;
}

.tabs button {
  flex: 1;
  padding: 10px;
  background: #ddd;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;
}

.tabs button.active {
  background: #6aadf5;
  color: white;
}

.form {
  display: flex;
  flex-direction: column;
}

.form input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form button {
  padding: 10px;
  background: #6aadf5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.form button:hover {
  background: #0056b3;
}

.error {
  color: red;
  margin-bottom: 10px;
}

input:focus{
  outline: none;
}
</style>





