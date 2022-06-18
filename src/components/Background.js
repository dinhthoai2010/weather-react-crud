import React from "react";
import { AppContext, UserStatus } from "../App";

export const Background = () => {
  const { userStatus, setUserStatusTo } = React.useContext(AppContext);

  const handleOnClick = () => {
    if (userStatus === UserStatus.LoggedOut) {
      setUserStatusTo(UserStatus.LoggingIn);
    }
  }

  return (
    <div id="app-background" onClick={handleOnClick}>
      <div id="app-background-image" className="background-image" />
    </div>
  )
}