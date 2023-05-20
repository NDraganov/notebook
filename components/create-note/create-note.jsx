import { useState } from "react";

import classes from "./create-note.module.css";

export default function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((allNotes) => {
      return { ...allNotes, [name]: value };
    });
  };

  const submitNote = (event) => {
    event.preventDefault();
    setNote({ title: "", content: "" });
    props.onAdd(note);
  };
  return (
    <div className={classes.note}>
      <form>
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          rows="7"
          placeholder="Take a note ..."
        ></textarea>
        <div>
          <button onClick={submitNote}>ADD</button>
        </div>
      </form>
    </div>
  );
}
