import React from "react";

const Dashboard = ({ addItem, onButtonEnter }) => {
  return (
    <div>
      <p className="center f2">{"Add your Goals"}</p>
      <div className="center">
        <div className="center f3 br-6 shadow-5 pa3 ">
          <input
            type="text"
            className="f4 pa w-80 center"
            placeholder="Enter Here"
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-warning text-dark"
            onClick={onButtonEnter}
            onSubmit={addItem}
          >
            {"Add"}
          </button>
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-warning text-dark"
            onClick={onButtonEnter}
            onSubmit={addItem}
          >
            {"Edit"}
          </button>
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-warning text-dark"
            onClick={onButtonEnter}
            onSubmit={addItem}
          >
            {"Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
