import Head from "next/head";
import { Fragment } from "react";

import classes from "./index.module.css";
import CreateNote from "@/components/create-note/create-note";

export default function Home() {
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
      </div>
    </Fragment>
  );
}
