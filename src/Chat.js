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

    addMessage = (body) => {
        const messages = [...this.state.messages]
        messages.push({
            id: Date.now(),
            userName: this.props.user.userName,
            body,
            
        })
        this.setState({messages})
    }

    render(){
        return(
            <div className = "Chat" style = {styles}>
                <ChatHeader />
                <MessageList messages = {this.state.messages}/>
                <MessageForm addMessage = {this.addMessage}/>
            </div>
        )
    }
}

const styles = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
}

export default Chat