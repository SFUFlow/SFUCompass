import React from 'react'
import classes from "./Modal.module.css"

export default function Modal() {
  return (
    <>
    <div className={classes.backdrop}></div>
    <div className={classes.modal}>
      <h1>Modal</h1>
    </div>
    </>
  )
}
