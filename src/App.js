import React from 'react'
import { useCurrentDateEffect } from './hook/useCurrentDateEffect';
import "./App.css"
import { Background } from './components/Background';
import { Pin } from './components/Pin';
import { N, T } from './helper';
import { Menu } from './components/Menu';
import { Info } from './components/Info';
import { UserStatusButton } from './components/UserStatusButton';
import { Loading } from './components/Loading';


const script = document.createElement("script");

script.src = "https://kit.fontawesome.com/944eb371a4.js";

document.body.appendChild(script);

export const UserStatus ={
  LoggedIn : "Logged In",
  LoggingIn : "Logging In",
  LoggedOut : "Logged Out",
  LogInError : "Log In Error",
  VerifyingLogIn : "Verifying Log In"
}


export const AppContext = React.createContext(null);

export default function App() {
  const [userStatus, setUserStatusTo] = React.useState(UserStatus.LoggedOut);

  const getStatusClass = () => {
    return userStatus.replace(/\s+/g, "-").toLowerCase();
  } 

  return (
    <AppContext.Provider value={{ userStatus, setUserStatusTo }}>
      <div id="app"  className={getStatusClass()}>
        <Info id="app-info"/>
        <Pin />
        <Menu />
        <Background />
        <div id="sign-in-button-wrapper">
          <UserStatusButton
            icon="fa-solid fa-arrow-right-to-arc"
            id="sign-in-button"
            userStatus={UserStatus.LoggingIn}
          />
        </div>
        <Loading/>
      </div>
    </AppContext.Provider>
  )
}
