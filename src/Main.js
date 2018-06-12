import React,{ component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'
class Main extends React.Component {
    render(){
        return(
            <div className = "Main">
                <Sidebar />
                <Chat />
            </div>
        )
    }
}

export default Main