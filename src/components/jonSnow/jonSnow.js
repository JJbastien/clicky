import React from "react";
import "./MrKrabsCard.css";

const jonSnow = () => (
  <div className="card">
    <div className="img-container">
      <img
        alt="Mr. Krabs"
        src="https://sp.yimg.com/ib/th?id=OIP.wdiBdzmSaVKpB67i4Q4EwwHaEU&pid=15.1&rs=1&c=1&qlt=95&w=189&h=110"
      />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> Jon Snow
        </li>
        <li>
          <strong>Occupation:</strong> Chief of the NightWatch
        </li>
        <li>
          <strong>Location:</strong> The North
        </li>
      </ul>
    </div>
  </div>
);

export default jonSnow;
