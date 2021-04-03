// import React, { Component, useState } from "react";
// import "../styles/App.css";
// class Timer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { time: 0, x: 0, y: 0 };
//   }
//   componentDidMount() {
    
//   }

//   componentWillUnmount() {
    
//   }



//   render() {
//     return (
//  <>
// </>
//     );
//   }
// }

// export default Timer;
import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [moveBall, setMoveBall] = useState(true);
  const [time, setTime] = useState(0);
  const [interval,setinter]=useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: 0,
    top: 0,
  });
  const handleListener = (event) => {
    console.log("in func");
    switch (event.key) {
      case "ArrowRight":
        setBallPosition((ball) => ({
          left: ball.left + 5,
          top: ball.top
        }));
        break;
      case "ArrowDown":
        setBallPosition((ball) => ({

          left: ball.left,
          top: ball.top + 5
        }));
        break;
      case "ArrowUp":
        setBallPosition((ball) => ({
          top: ball.top - 5,
          left: ball.left
        }));
        break;
      case "ArrowLeft":
        setBallPosition((ball) => ({
          left: ball.left - 5,
          top: ball.top
        }));
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    if (ballPosition.left === 250 && ballPosition.top === 250) {
      clearInterval(interval);
      setMoveBall(moveBall=> false)}
      if(moveBall){
        document.addEventListener("keydown",handleListener);
        return()=>(
          document.removeEventListener("keydown",handleListener)
        )
      }
    
  }, [ballPosition,time,moveBall])
 

  
  const start = () => {
   
    document.addEventListener("keydown", handleListener);
    setMoveBall(moveBall=>true)
    // if(moveBall){
    //   document.removeEventListener("keydown", handleListener);
    // }
     setinter(setInterval(() => {
      setTime((t) => t + 1);
    }, 1000))
    

  };
  


  return (
    <div className="playground">
      <div
        className="ball"
        style={{
          left: ballPosition.left + "px",
          top: ballPosition.top + "px",
          position: "absolute",
        }}
      ></div>
      <button onClick={start} className="start">
        Start
      </button>
      <div className="hole"></div>
      <div className="heading-timer">{time}</div>
    </div>
  );
};

export default App;