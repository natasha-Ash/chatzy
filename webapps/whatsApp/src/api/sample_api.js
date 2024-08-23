import {chatHistory} from "./chatHistory";
import userList from '../api/userLists.js';
import unseenMessageCount from './unseenMessageCount.js'
function returnAfter(value,time=300){
    return new Promise((res,rej)=>{
        setTimeout(()=>{res(value)},time)

    })
}
let  api =  {

    getCurrentUser(){
        return returnAfter(userList.find(each=>each.userId===window.localStorage.loginUser));
    },

    getUserDetail(userId){
        return returnAfter(userList.find(user=>user.userId===userId))
    },
    login(userId,password){
        window.localStorage.loginUser = userId;
        return returnAfter(userList.find(user=>user.userId===userId))
    },

    logOut(){
        delete window.localStorage.loginUser;
        return returnAfter({})
    },
    createAccount(){

    },

    setMessage(to,message){

        return returnAfter({})
    },

    getChatHistory(user,friend){
        let list = chatHistory.filter((history=>{
      
          return (history.from === user.userId && history.to === friend.userId) || (history.to === user.userId && history.from === friend.userId)
        }));
        // return new Promise((res,rej)=>{res(list)})
        return returnAfter(list )
        
      },
      getUserList(){
        return returnAfter(userList)
      },

      getChatedUserList(userId,search){
        let messageCounts = {};
        chatHistory.forEach(chat => {
            if (chat.to === userId) {
                // let fromChatCount =messageCounts[chat.from];
                messageCounts[chat.from] = messageCounts[chat.from] ? messageCounts[chat.from] + 1 : 1;
            }
        });
    
        let unseenCounts = {};
        unseenMessageCount.forEach(unseenChat=>{
            if(unseenChat.userId===userId){
                unseenCounts[unseenChat.friendId] = unseenChat.unseenCount
            }
        });
        let list = [];
        for(let user of userList){
            let unseenChatCount = unseenCounts[user.userId];
            let messageCount = messageCounts[user.userId];
            if(!messageCount && !unseenChatCount){
                continue;
            }
            if(search && !(user.userName.includes(search) || user.userName.toLowerCase().includes(search.toLowerCase()))){
                continue
            }
            let userObj = Object.assign({},user);
            list.push(userObj);
            userObj.unseenChatCount = unseenChatCount ||0;
            userObj.chatCount = messageCount ||0;

        }

        return returnAfter(list)
      },

    


}

export default api;