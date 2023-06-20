import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  const localStorageValue = localStorage.getItem("persist:root");
  const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
  const user = parsedValue.user || "";
  const currentUser = user ? JSON.parse(user).currentUser : {};
  const username = currentUser && currentUser.email ? currentUser.email : '';
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img src="http://143.110.234.115/public/images/logoIndustryluxLong.jpg" alt="Industrilux logo" />
        </div>
        <div className="topRight">
          <p>{username}</p>
        </div>
      </div>
    </div>
  );
}
