<template>
    <div @click="handleClick" class="UserItem layout-row flex" style="height:80px; padding:10px; align-items: center;">
        <div class="profile flex-noshrink" :style="profileBg"></div>
        <div class="layout-column" style="padding-left:10px;">
            <div style="font-weight: bold;">{{ user.userName }}</div>
            <div style="font-size: small;">{{ user.status }}</div>
        </div>
        <div v-if="user.unseenChatCount" class="unseen-count">{{ user.unseenChatCount }}</div>
    </div>
</template>

<script>
export default {
    name: "UserItem",
    props: {
        user: Object,
        messageCount: Number,
        unseenMessageCount : Number
    },
    emits: ["click"],
    data() {
        return {
            profileBg: {
                backgroundColor: this.user.profileBg,
                color: 'white',
            }
        };
    },
    methods: {
        handleClick(e) {
            this.$emit('click', this.user, e);
        }
    }
}
</script>

<style>
    .profile {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-left: 5px;
    }

    .UserItem {
        border-radius: 5px;
        transition: all 0.3s ease-in;
        margin: 5px;
    }

    .UserItem:hover {
        background-color: rgba(230, 229, 229, 0.639);
    }

    .UserItem.selected {
        background-color: rgba(215, 230, 249, 0.639);
    }

    .unseen-count {
        margin-left: auto;
        background-color: rgb(64, 162, 102);
        color: white;
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 12px;
    }
</style>
