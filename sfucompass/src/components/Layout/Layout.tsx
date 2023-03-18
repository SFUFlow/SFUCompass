import React, { Fragment } from "react";
import MainHeader from "./MainHeader";

export default function Layout(props: any) {
  return (
    <Fragment>
      <MainHeader />
      {props.children}
    </Fragment>
  );
}
