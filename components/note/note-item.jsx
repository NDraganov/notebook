import classes from "./note-item.module.css";

export default function NoteItem(props) {
  const handleClick = () => {
    props.onDelete(props.id);
  };
  return (
    <li>
      <div className={classes.note}>
        <div>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
        </div>
        <button onClick={handleClick}>DELETE</button>
      </div>
    </li>
  );
}
