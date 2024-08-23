<template>
    <div class="layout-column flex chat-nav-bar">
        <div class="layout-column flex-noshrink">
            <div class="layout-row" style="position: relative; height: 60px;">
                <h2 style="padding-left:10px;">Chats</h2>
                <div class="flex"></div>
                <div class="avatar" ></div>

                    <div   class="currentUserProfile" >{{ userAccount.userName }}</div>

                <!-- <svg class="profile" style="margin: 8px;" xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 576 512"><path fill="#74C0FC" d="M288 64C64 64 0 160 0 272S80 448 176 448l8.4 0c24.2 0 46.4-13.7 57.2-35.4l23.2-46.3c4.4-8.8 13.3-14.3 23.2-14.3s18.8 5.5 23.2 14.3l23.2 46.3c10.8 21.7 33 35.4 57.2 35.4l8.4 0c96 0 176-64 176-176s-64-208-288-208zM96 256a64 64 0 1 1 128 0A64 64 0 1 1 96 256zm320-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> -->
            </div>
            <div class="layout-row" style="align-items: center; margin: 10px; border: 1.6px solid #d2d1d1cf; border-radius: 20px;">
                <input v-model="searchFriendName" @keydown.enter="getNameBySearch" @blur="getNameBySearch" class="searchBar flex-grow" placeholder="Search or start a new chat"/>
                <div class="flex-end-column" style="margin-right: 15px;" @click="getNameBySearch">
                    <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
                        <path 
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                            stroke="white"        
                            stroke-width="16"      
                            fill="grey"
                        />
                    </svg>
                </div>
            </div>
        </div>

        <div class="overflow-auto flex">
            <template v-if="userList && userList.length">
                <template v-for="user in userList" :key="user.userId">
                    <UserItem 
                        v-if="userAccount.userId !== user.userId" 
                        :class="selectedUser && selectedUser.userId === user.userId ? 'selected' : ''"
                        :user="user"
                        @click="handleUserSelected(user)"/>
                </template>
            </template>
            <div v-else>
                <p style="text-align: center;">No chats available.</p>
            </div>
        </div>
    </div>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
    name: 'ChatNavbar',
    components: {
        UserItem
    },
    props: {
        userAccount: Object,
        selectedUser: Object
    },
    inject: ["api"],
    data() {
        return {
            userList: null,
            searchFriendName :'',
        };
    },
    async mounted() {
        this.userList = await this.api.getChatedUserList(this.userAccount.userId);
    },
    methods: {
        handleUserSelected(userData) {
            this.$emit('update:selectedUser', userData);
        },  
        async getNameBySearch(){
            this.userList = await this.api.getChatedUserList(this.userAccount.userId,this.searchFriendName);

        }
    },
    
}
</script>

<style>
.avatar{
    display: flex; 
    align-items: center; 
    position: relative;
    right: 0; 
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 15px; 
    background-image: url(../../images/avatar.jpg) ;
    background-size: 100%;
}


.avatar:hover ~ .currentUserProfile{
    display: block;
}


.chat-nav-bar .searchBar {
    border: none;
    height: 20px;
    margin: 5px;
    border-radius: 10px;
}

.chat-nav-bar input:focus {
    outline: none;
}   

.chat-nav-bar .currentUserProfile{
    background-color: rgb(152, 180, 237);
    padding: 5px;
    margin: 19px 16px;
    color: rgb(26, 23, 23);
    display: none;
    position: absolute;
}
</style>


