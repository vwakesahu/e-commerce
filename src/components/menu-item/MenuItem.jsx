import React from "react";
import "./menu-item.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-items`} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="content">
        <h1>{title}</h1>
        <span>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
