import classNames from "classnames";
import React from "react";
import { defaultPosition } from "../constants";

  
export const ScrollableComponent = (props) => {
    const ref=React.useRef(null);
  
    const [state, setStateTo] = React.useState({
      grabbing: false,
      position: defaultPosition()
    });
  
    const handleOnMouseDown = (e) => {
        setStateTo({
          ...state,
          grabbing: true,
          position: {
            x: e.clientX,
            left: ref.current.scrollLeft
          }
        });
    }
    
    const handleOnMouseMove = (e) => {
        if(state.grabbing) {
          const left = Math.max(0, state.position.left + (state.position.x - e.clientX));
          
          ref.current.scrollLeft = left;
        }
    }
 
    const handleOnMouseUp = () => {
      if (state.grabbing) {
        setStateTo({ ...state, grabbing: false });
      }
    }
  
    return (
      <div
        ref={ref}
        className={classNames("scrollable-component", props.className)}
        id={props.id}
        onMouseDown={handleOnMouseDown}
        onMouseMove={handleOnMouseMove}
        onMouseUp={handleOnMouseUp}
        onMouseLeave={handleOnMouseUp}
      >
        {props.children}
      </div>
    );
  }