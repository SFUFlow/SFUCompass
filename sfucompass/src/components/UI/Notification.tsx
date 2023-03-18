import React from "react";
import classes from "./Notification.module.css";

export default function Notification(props: any) {
  let specialClass = "";

  if (props.status === "success") {
    specialClass = "success";
  } else if (props.status === "error") {
    specialClass = "error";
  }

  const notificationClass = `${specialClass} ${classes.notification}`;

  return (
    <div className={notificationClass}>
      <h1>{props.message}</h1>
    </div>
  );
}
