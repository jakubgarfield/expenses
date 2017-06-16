import React, { Component } from "react";

class LoadingBar extends Component {
  render() {
    return (
      <div className="center">
        <svg
          width="80px"
          height="80px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle cx="84" cy="50" r="0" fill="#c0f6d2">
            <animate
              attributeName="r"
              values="11;0;0;0;0"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            />
            <animate
              attributeName="cx"
              values="84;84;84;84;84"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            />
          </circle>
          <circle cx="40.0957" cy="50" r="11" fill="#ff7c81">
            <animate
              attributeName="r"
              values="0;11;11;11;0"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.5s"
            />
            <animate
              attributeName="cx"
              values="16;16;50;84;84"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.5s"
            />
          </circle>
          <circle cx="16" cy="50" r="7.79567" fill="#fac090">
            <animate
              attributeName="r"
              values="0;11;11;11;0"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.25s"
            />
            <animate
              attributeName="cx"
              values="16;16;50;84;84"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.25s"
            />
          </circle>
          <circle cx="84" cy="50" r="3.20433" fill="#ffffcb">
            <animate
              attributeName="r"
              values="0;11;11;11;0"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            />
            <animate
              attributeName="cx"
              values="16;16;50;84;84"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            />
          </circle>
          <circle cx="74.0957" cy="50" r="11" fill="#c0f6d2">
            <animate
              attributeName="r"
              values="0;0;11;11;11"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            />
            <animate
              attributeName="cx"
              values="16;16;16;50;84"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            />
          </circle>
        </svg>
      </div>
    );
  }
}

export default LoadingBar;
