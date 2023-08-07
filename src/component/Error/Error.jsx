import React from "react";
import './Error.css';
import { useRouteError } from "react-router-dom";
function Error() {
  // gives us error in router
  const error = useRouteError();
  console.log(error);
  return (
    <React.Fragment>
      <div className="bg-purple">
        <div className="stars">
          <div className="central-body">
            <img
              className="image-404"
              src="http://salehriaz.com/404Page/img/404.svg"
              width="300px"
            />
          </div>
          <div className="objects">
            <img
              className="object_rocket"
              src="http://salehriaz.com/404Page/img/rocket.svg"
              width="40px"
            />
            <div className="earth-moon">
              <img
                className="object_earth"
                src="http://salehriaz.com/404Page/img/earth.svg"
                width="100px"
              />
              <img
                className="object_moon"
                src="http://salehriaz.com/404Page/img/moon.svg"
                width="80px"
              />
            </div>
            <div className="box_astronaut">
              <img
                className="object_astronaut"
                src="http://salehriaz.com/404Page/img/astronaut.svg"
                width="140px"
              />
            </div>
          </div>
          <div className="glowing_stars">
            <div id="stars-group-1"></div>
            <div id="stars-group-2"></div>
            <div id="stars-group-3"></div>
            <div id="stars-group-4"></div>
            <div id="stars-group-5"></div>
            <div id="stars-group-6"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Error;
