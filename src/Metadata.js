import React from 'react'

const Metadata = (props) => {
    return(
        <div class="Metadata" style = {styles.Metadata}>
              <div class="user" style = {styles.user}>{props.user}</div>
              <div class="time" style = {styles.time}>{Date.now()}</div>
        </div>
    )
}

const styles = {
    Metadata: {
        display: "flex",
        alignItems: "baseline",
      },

      user: {
        fontWeight: "bold",
        marginRight: "0.5rem",
      },

      time: {
        color:" #999",
        fontSize:" 0.8rem",
      }
}
export default Metadata