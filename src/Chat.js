import React from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class Chat extends React.Component{
    render(){
        return(
            <div className = "Chat">
                <ChatHeader />
                <MessageList />
                <MessageForm />
            </div>
        )
    }
}

export default Chat