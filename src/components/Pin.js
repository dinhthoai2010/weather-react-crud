import React from "react";
import { AppContext, UserStatus } from "../App";
import classNames from 'classnames';
import { Default } from "../constants";
import { N } from "../helper";

const LogInUtility = {
    verify: async (pin) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (pin === Default.PIN) {
            resolve(true);
          } else {
            reject(`Invalid pin: ${pin}`);
          }
        }, N.rand(300, 700));
      });
    }
  }
  

const PinDigit= (props) => {
    const [hidden, setHiddenTo] = React.useState(false);
  
    React.useEffect(() => {
      if (props.value) {
        const timeout = setTimeout(() => {
          setHiddenTo(true);
        }, 500);
  
        return () => {
          setHiddenTo(false);
  
          clearTimeout(timeout);
        }
      }
    }, [props.value]);
  
    return (
      <div className={classNames("app-pin-digit", { focused: props.focused, hidden })}>
        <span className="app-pin-digit-value">{props.value || ""}</span>
      </div>
    )
  }

export const Pin = () => {
    const { userStatus, setUserStatusTo } = React.useContext(AppContext);
  
    const [pin, setPinTo] = React.useState("");
  
    const ref = React.useRef(null);
  
    React.useEffect(() => {
      if (userStatus === UserStatus.LoggingIn || userStatus === UserStatus.LogInError) {
        ref.current.focus();
      } else {
        setPinTo("");
      }
    }, [userStatus]);
  
    React.useEffect(() => {
      if (pin.length === 4) {
        const verify = async ()=> {
          try {
            setUserStatusTo(UserStatus.VerifyingLogIn);
  
            if (await LogInUtility.verify(pin)) {
              setUserStatusTo(UserStatus.LoggedIn);
            }
          } catch (err) {
            console.error(err);
  
            setUserStatusTo(UserStatus.LogInError);
          }
        }
  
        verify();
      }
  
      if (userStatus === UserStatus.LogInError) {
        setUserStatusTo(UserStatus.LoggingIn);
      }
    }, [pin]);
  
    const handleOnClick = () => {
      ref.current.focus();
    }
  
    const handleOnCancel = () => {
      setUserStatusTo(UserStatus.LoggedOut);
    }
  
    const handleOnChange = (e) => {
      if (e.target.value.length <= 4) {
        setPinTo(e.target.value.toString());
      }
    }
  
    const getCancelText = () => {
      return (
        <span id="app-pin-cancel-text" onClick={handleOnCancel}>Cancel</span>
      )
    }
  
    const getErrorText = () => {
      if (userStatus === UserStatus.LogInError) {
        return (
          <span id="app-pin-error-text">Invalid</span>
        )
      }
    }
  
    return (
      <div id="app-pin-wrapper">
        <input
          disabled={userStatus !== UserStatus.LoggingIn && userStatus !== UserStatus.LogInError}
          id="app-pin-hidden-input"
          maxLength={4}
          ref={ref}
          type="number"
          value={pin}
          onChange={handleOnChange}
        />
        <div id="app-pin" onClick={handleOnClick}>
          <PinDigit focused={pin.length === 0} value={pin[0]} />
          <PinDigit focused={pin.length === 1} value={pin[1]} />
          <PinDigit focused={pin.length === 2} value={pin[2]} />
          <PinDigit focused={pin.length === 3} value={pin[3]} />
        </div>
        <h3 id="app-pin-label">Enter PIN (1234) {getErrorText()} {getCancelText()}</h3>
      </div>
    )
  }