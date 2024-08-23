<template>
    <div class="chat-body">
        <!-- <img src="../images/chatArea.png"/> -->
         <template v-for="chat in chatHistory">
            <div :class="chat.from!==user.userId?'fromBox':'toBox'">
                <div class="message"> 
                    <div>
                        {{ chat.message }}
                    </div>

                    <TimeViewer :time="new Date(chat.time)">
                    </TimeViewer>
                </div>
            </div>
         </template>
    </div>
    
</template>

<script>
import TimeViewer from './TimeViewer.vue';
export default {
name : 'ChatArea',
props:{
    chatHistory : Array,
    user : Object
},
data(){
    return{
        from : null,
        to : null
    }
},
components :{
    TimeViewer
}
}
</script>

<style scoped>
.chat-body {
    justify-content: flex-end;
    background-image: url(../../images/doodle.svg);
    height: 553px;
    overflow-y: auto;
}
    .chat-body img{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .toBox{
        display: flex;
        width: 100%;
        justify-content: flex-end;
        padding: 10px;  
    }
    
    .fromBox{
       display: flex;
       width: 100%;
       padding: 10px;  
    }
    .fromBox .message{
        background-color:#ece8e8;    
       
    }
    
    .toBox .message{
        background-color: rgb(189, 227, 187);    
    }

    .message{
        min-height: 40px;
        min-width: 100px ;
        max-width: 70%;
        border-radius: 10px;  
        padding: 7px;  
    }
</style>