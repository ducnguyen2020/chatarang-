import React from 'react'

import Avatar from './Avatar'
import Metadata from './Metadata';
const Message = (props) => {
    return(
        <div class="Message" style = {styles.message}>
        <Avatar />
        <div class="details" style = {styles.details}>
            <Metadata user = {props.message.userName}/>
            <div class="body">
                {props.message.body}
            </div>
        </div>
        </div>
    )
}

const styles ={
    message:{
        display: "flex",
        marginTop: "1rem",
        padding: "0 1rem",
    },

    details:{
        flex: 1,
        paddingLeft: "0.5rem",
    }
}
export default Message