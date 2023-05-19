import { CgNotes } from "react-icons/cg";

import classes from "./header.module.css";

export default function Header({ text }) {
  return (
    <header className={classes.header}>
      <CgNotes />
      <h2>{text}</h2>
    </header>
  );
}
