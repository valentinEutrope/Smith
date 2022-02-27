import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

import Tags from "./Tags";
import { Flex, FlexCentered } from "@components/base/Flex";
import { H2 } from "@components/base/Headers";
import { ButtonPrimary } from "@components/base/Buttons";
import { WorldImage, World, WorldName } from "./styled";

const WorldList = () => {
  const history = useHistory();
  const [worlds, setWorlds] = useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(true);
    window.api.getWorldList().then(
      (response) => {
        setWorlds(response);
        setLoading(false);
      },
      (err) => {
        toast.error(err.message, { id: "errGetWorldList" });
      }
    );
  }, [setWorlds]);

  if (loading) {
    return <div>...</div>;
  }

  return (
    <>
      <H2>Vos mondes</H2>
      {worlds.length ? (
        <Flex direction="column" alignItems="center" gap="2rem">
          {worlds.map((world) => {
            return (
              <World
                key={`world-${world.id}`}
                onClick={() => history.push(`/world/${world.id}`)}
              >
                <WorldName>{world.name}</WorldName>
                {world.tags.length ? <Tags tags={world.tags} /> : null}
                <WorldImage src={world.imgUrl} />
              </World>
            );
          })}
        </Flex>
      ) : (
        <FlexCentered>
          Vous n'avez pas de mondes disponibles, vous pouvez en importer ou en
          créer un nouveau
        </FlexCentered>
      )}
      <FlexCentered>
        <ButtonPrimary onClick={() => history.push("/new-world")}>
          Créer un monde
        </ButtonPrimary>
      </FlexCentered>
    </>
  );
};

export default WorldList;
