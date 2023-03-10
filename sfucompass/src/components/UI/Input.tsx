import React from "react";
import classes from "./Input.module.css";

export default function Input(props: any) {
  return (
    <input
      type={props.type}
      className={`${props.className} ${classes.input}`}
      placeholder={props.placeholder}
      name={props.name}
    />
  );
}
