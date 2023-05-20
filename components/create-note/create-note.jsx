import classes from "./create-note.module.css";

export default function CreateNote() {
  return (
    <div className={classes.note}>
      <form>
        <input type="text" name="title" placeholder="Title" />
        <textarea
          name="content"
          rows="7"
          placeholder="Take a note ..."
        ></textarea>
        <button>ADD</button>
      </form>
    </div>
  );
}
