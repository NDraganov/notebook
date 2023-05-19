import { Fragment } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout(props) {
  return (
    <Fragment>
      <Header text={"NoteBook"} />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
