import React from "react";
import { store } from "../../app/store";
import { notesApiSlice } from "../notes/notesApiSlice";
import { usersApiSlice } from "../users/usersApiSlice";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Prefetch() {
  useEffect(() => {
    // Keeps a subscription to the notes and users get all query
    const notes = store.dispatch(
      notesApiSlice.util.prefetch("getNotes", "notesList", { force: true })
    );
    const users = store.dispatch(
      usersApiSlice.util.prefetch("getUsers", "usersList", { force: true })
    );
  }, []);

  return <Outlet />;
}
