import classes from "./note-item.module.css";

export default function NoteItem({ title, content, click }) {
  return (
    <li>
      <div className={classes.note}>
        <div>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <button onClick={click}>DELETE</button>
      </div>
    </li>
  );
}
