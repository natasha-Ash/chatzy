<template>
    <div>
      <div class="chatHeader layout-row" style="height: 60px; border: 1.5px solid #e6e6e6; border-left: none; align-items: center;">
        <div class="profile flex-noshrink" :style="{ backgroundColor: profileBg }"></div>
        <div class="layout-column" style="padding-left: 10px;">
          <div style="font-weight: bold;">{{ userName }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChatHeader',
    props: {
      profileBg: {
        type: String,
      },
      userName:  String,
    },
  };
  </script>
  
  <style>
    .profile {
      border-radius: 50%;
      width: 45px;
      height:45px;
      margin-left: 15px;
    }
  </style>
  