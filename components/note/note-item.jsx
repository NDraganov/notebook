import classes from "./note-item.module.css";

export default function NoteItem({ title, content }) {
  return (
    <div className={classes.note}>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <button>DELETE</button>
      </div>
    </div>
  );
}
