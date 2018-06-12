import React from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class Chat extends React.Component{
    constructor(){
        super()
        this.state = {
            messages : [
                {
                    id: 1,
                    userName: 'stephen',
                    body: 'Cool',
                },
                {
                    id: 2,
                    userName: 'dpalazo',
                    body: 'this guy is so annoying, I hate my job',
                },
            ],

        }
    }

    addMessage = () => {
        const messages = [...this.state.messages]
        messages.push({
            id: Date.now(),
            userName: 'Jieun',
            body: 'I\'m excited for dinner',
        })
        this.setState({messages})
    }

    render(){
        return(
            <div className = "Chat">
                <ChatHeader />
                <MessageList messages = {this.state.messages}/>
                <MessageForm addMessage = {this.addMessage}/>
            </div>
        )
    }
}

export default Chat