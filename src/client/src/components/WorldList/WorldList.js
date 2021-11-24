import React from "react";
import { useHistory } from "react-router-dom";

import Tags from "./Tags";
import { FlexCentered } from "../../components/base/Flex";
import { H2 } from "../../components/base/Headers";
import { ButtonPrimary } from "../../components/base/Buttons";
import { WorldImage, Worlds, World, WorldName, NoWorldMessage } from "./styled";

const WorldList = () => {
  const history = useHistory();

  const worlds = [];

  return (
    <>
      <H2>Vos mondes</H2>
      {worlds.length ? (
        <Worlds>
          {worlds.map((world) => {
            return (
              <World onClick={() => history.push(`/world/${world.id}`)}>
                <WorldName>{world.name}</WorldName>
                <Tags tags={world.tags} />
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
