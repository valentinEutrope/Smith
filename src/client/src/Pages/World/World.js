import React from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { H2 } from "@components/base/Headers";
import useRequest from "@helpers/useRequest";
import Dashboard from "./Dashboard";

const World = () => {
  const { id } = useParams();

  const {
    data: worldData,
    loading,
    error,
  } = useRequest({ request: window.api.getWorld(id) });

  if (error) {
    toast.error(error.message, { id: "errGetWorld" });
  }

  if (loading) {
    return <div>...</div>;
  }

  return (
    <div>
      <H2>{worldData.name}</H2>
      <Dashboard worldId={id} />
    </div>
  );
};

export default World;
