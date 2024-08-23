<template>
  <div class="flex layout-column">
    <ChatHeader :profileBg="friend.profileBg" :userName="friend.userName" />
    <ChatArea  :user="user" :friend="friend" :chatHistory="chatHistory" />
    <!-- CHAT BOX -->
    <div class="layout-row" style="border: 1.5px solid #e6e6e6; border-left: none; width: 100%; height: 50px;">
      <input v-model="typing"  @keyup.enter="sendMessage" class="flex-grow" style="border: none; font-size: small; padding-left: 10px;" placeholder="Type a message"  />
      <div v-if="typing" class="sendBtn" @click="sendMessage">
        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 320 512">
          <path fill="white" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import ChatArea from './ChatArea.vue';
import ChatHeader from './ChatHeader.vue';

export default {
  name: 'ChatBox',
  components: { ChatArea, ChatHeader },
  inject: ['api'],
  props: {
    friend: Object,
    user: Object
  },
  data() {
    return {
      typing: '',
      chatHistory: []
    };
  },
  mounted() {
    
    this.api.getChatHistory(this.user, this.friend).then(list => {
      this.chatHistory = list;
    });
  },
  methods: {
    sendMessage() {
      if (this.typing.trim()) {
        const newMessage = {
          from: this.user.userId,
          to : this.friend.userId,
          message: this.typing,
          time: Date.now()
        };
        this.chatHistory.push(newMessage);
        this.api.setMessage(this.friend.userId,this.typing);
        this.typing = '';
      }
      console.log("entered")
    }
  }
};
</script>
