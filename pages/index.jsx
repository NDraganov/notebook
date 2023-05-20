import Head from "next/head";
import { Fragment } from "react";
import { useState } from "react";
import CreateNote from "@/components/create-note/create-note";
import NoteItem from "@/components/note/note-item";

import classes from "./index.module.css";

export default function Home() {
  const [notes, setNotes] = useState([]);
  return (
    <Fragment>
      <Head>
        <title>NoteBook</title>
        <meta
          name="description"
          content="The perfect partner for your digital notes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.home}>
        <CreateNote />
        {notes.map((noteItem, id) => {
          return (
            <ul>
              <NoteItem
                key={id}
                id={id}
                title={noteItem.title}
                content={noteItem.content}
              />
            </ul>
          );
        })}
      </div>
    </Fragment>
  );
}
