import React from "react";
import { useParams } from "react-router-dom";
import EditUserForm from "./EditUserForm";

import { useGetUsersQuery } from "./usersApiSlice";
import PulseLoader from "react-spinners/PulseLoader";

export default function EditUser() {
  const { id } = useParams();
  // useSelector is not keeping an active subscription so this causes the loading screen to pop up
  // again in the editor

  const { user } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      user: data?.entities[id],
    }),
  });

  if (!user) return <PulseLoader color={"#FFF"} />;
  const content = <EditUserForm user={user} />;

  return content;
}
