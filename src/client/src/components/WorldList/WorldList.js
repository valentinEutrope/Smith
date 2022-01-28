import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Tags from "./Tags";
import { FlexCentered } from "@components/base/Flex";
import { H2 } from "@components/base/Headers";
import { ButtonPrimary } from "@components/base/Buttons";
import { WorldImage, Worlds, World, WorldName, NoWorldMessage } from "./styled";
import toast from "react-hot-toast";

const WorldList = () => {
  const history = useHistory();

  // prepare worlds to be set by async backend query
  const [worlds, setWorlds] = useState([]);

  // Set the worlds only once
  useEffect(() => {
    window.api.getWorldList().then(
      (result) => {
        setWorlds(result);
      },
      (err) => {
        toast.error(err.message, { id: "errGetWorldList" });
      }
    );
  }, [worlds]);

  return (
    <>
      <H2>Vos mondes</H2>
      {worlds.length ? (
        <Worlds>
          {worlds.map((world) => {
            return (
              <World onClick={() => history.push(`/world/${world.id}`)}>
                <WorldName>{world.name}</WorldName>
                {world.tags.length ? <Tags tags={world.tags} /> : null}
                <WorldImage src={world.imgUrl} />
              </World>
            );
          })}
        </Worlds>
      ) : (
        <NoWorldMessage>
          Vous n'avez pas de mondes disponibles, vous pouvez en importer ou en
          créer un nouveau
        </NoWorldMessage>
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
