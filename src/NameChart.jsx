import React from "react";

function NameChart(props) {
  return (
    <div className="flex flex-col p-10 m-10 bg-green-600 text-white text-2xl gap-3 rounded-xl">
      {" "}
      <div className="flex"> Name: {props.name}</div>
      <div> Age: {props.age}</div>
      <div> City: {props.address}</div>
    </div>
  );
}

export default NameChart;
