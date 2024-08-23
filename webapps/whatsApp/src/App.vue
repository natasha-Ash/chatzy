<template>
  <div class="layout-row " style="width: 100vw; height: 100vh;" v-if="user">
    <div class="flex-3 layout-column" style="border-right: 1.5px solid #e6e6e6;">
      <ChatNavbar  v-model:selectedUser="selectedFriend"  :userAccount="user"  />
    </div>

    <ChatBox v-if="selectedFriend" :friend="selectedFriend" :user="user" :key="selectedFriend.userId"></ChatBox>  
  </div>
  <LoginForm v-else-if="isUserNotLoggedIn" @login="userLogin"></LoginForm>
</template>

<script>
import ChatNavbar from './components/chatlist/ChatNavbar.vue';
import LoginForm from './components/login/LoginForm.vue';
import ChatBox from './components/chatbox/ChatBox.vue';
import api from './api/sample_api';
export default{
  name: 'App',
  provide(){
    return {
      api : api
    }

  },
  async mounted(){
    this.user = await this.api.getCurrentUser();
    if(!this.user){
      this.isUserNotLoggedIn = true;
      return;
    }
    let hash = window.location.hash;
    if(hash){
      let userId = hash.substring(1);
      this.selectedFriend = await this.api.getUserDetail(userId)
    }
  },
  data() {
    return {
      api : api,
      user : null,
      isUserNotLoggedIn : false,
      selectedFriend: null,
    }
  },
  watch:{
    selectedFriend(){
      if(this.selectedFriend){
        window.location.hash = this.selectedFriend.userId
      }else{
        window.location.hash = null;
      }
    }
  },
  components : {
    ChatNavbar,
    ChatBox,
    LoginForm
  },
  methods: {
    userLogin(user){
      this.user = user;
      this.isUserNotLoggedIn = false;

    }
  },
};
</script>

<style>
  .sendBtn{
    width: 50px; 
    display: flex; 
    align-items: center; 
    justify-content: center;
    background-color: rgb(125, 173, 247); 
    border-bottom-left-radius: 10px;
    /* border-top-left-radius: 10px; */
  }
</style>