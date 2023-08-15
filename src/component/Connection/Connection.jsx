import React from "react";
import Lottie from "lottie-react";
import "./Connection.css";
import animaton from "../../../images/animation_ll544q9r.json";
function Connection() {
  return (
    <React.Fragment>
      <div className="noNet">
        <div>
          <h1 className="title">Connection Error</h1>
          <h1 className="title">No Internet Connection</h1>
          <Lottie className="net" animationData={animaton}></Lottie>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Connection;
