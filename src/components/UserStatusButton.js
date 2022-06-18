import React from "react";
import { AppContext } from "../App";

export const UserStatusButton = (props) => {
    const { userStatus, setUserStatusTo } = React.useContext(AppContext);
  
    const handleOnClick = () => {
      setUserStatusTo(props.userStatus);
    }
  
    return (
      <button
        id={props.id}
        className="user-status-button clear-button"
        disabled={userStatus === props.userStatus}
        type="button"
        onClick={handleOnClick}
      >
        <i className={props.icon} />
      </button>
    )
  }