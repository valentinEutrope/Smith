import React from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { H2 } from "@components/base/Headers";
import Dashboard from "./Dashboard";

const World = () => {
  const { id } = useParams();
  const [worldData, setWorldData] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    window.api.getWorld(id).then(
      (response) => {
        setWorldData(response);
        setLoading(false);
      },
      (err) => {
        toast.error(err.message, { id: "errGetWorld" });
        setLoading(false);
      }
    );
  }, [id, setWorldData]);

  if (loading) {
    return <div>...</div>;
  }

  return (
    <div>
      <H2>{worldData.name}</H2>
      <Dashboard />
    </div>
  );
};

export default World;
