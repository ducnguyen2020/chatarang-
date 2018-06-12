import React,{component} from 'react'

import ChatHeader from './ChatHeader'

class Chat extends React.Component{
    render(){
        return(
            <div className = "Chat">
                <ChatHeader />
            </div>
        )
    }
}

export default Chat