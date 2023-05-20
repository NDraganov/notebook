import { useState } from "react";

import classes from "./create-note.module.css";

export default function CreateNote() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setNote(value);
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
        <button>ADD</button>
      </form>
    </div>
  );
}
