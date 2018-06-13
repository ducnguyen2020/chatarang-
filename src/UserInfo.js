import React from 'react'

import Avatar from './Avatar'
const UserInfo = (props) => {
    return(
        <div
        className="UserInfo"
        style= {styles.UserInfo}
        >
            <Avatar style ={styles.Avatar}/>
            <div className="user" style = {styles.user}>
              {props.userName}
            </div>
            <a href="#" style = {styles.a}>
                <i className="fas fa-sign-out-alt"></i>
            </a>
        </div>
    )
}

const styles ={
    UserInfo: {
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center",
      },

    Avatar: {
        marginRight: "0.5rem",
        paddingLeft: "1rem",
    },

    user: {
        flex: 1,
    },

    a: {
        border: 0,
        paddingRight: "1rem",
        backgroundColor: "transparent",
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: "1.2rem",
        transition: "color 0.25s ease-out",
        
      }
    }

export default UserInfo