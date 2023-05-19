import classes from "./header.module.css";

export default function Header({ text }) {
  return (
    <header className={classes.header}>
      <h2>{text}</h2>
    </header>
  );
}
