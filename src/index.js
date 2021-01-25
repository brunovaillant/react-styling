//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

var date = new Date(2023, 1, 1, 2);
var currentTime = date.getHours();
console.log(currentTime);

var customStyle = {
  color: ""
};

var greeting;
if (currentTime < 12) {
  greeting = "Good morning";
  customStyle = { color: "blue" };
} else if (currentTime > 18) {
  greeting = "Good evening";
  customStyle = { color: "pink" };
} else {
  greeting = "Good afternoon";
  customStyle = { color: "red" };
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
