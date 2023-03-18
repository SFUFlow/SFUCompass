import React from "react";
import classes from "./Card.module.css";

export default function Card(props: any) {
  return (
    <div
      onClick={props.onClick}
      className={`${props.className} ${classes.card}`}
    >
      {props.children}
    </div>
  );
}
