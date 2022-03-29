import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import useRequest from "@helpers/useRequest";

import Tags from "./Tags";
import { Flex, FlexCentered } from "@components/base/Flex";
import { H2 } from "@components/base/Headers";
import { ButtonPrimary, ButtonDanger } from "@components/base/Buttons";
import { WorldImage, World, WorldName } from "./styled";

const WorldList = () => {
  const history = useHistory();
  const [reload, setReload] = useState(false);

  const { WorldModel } = window.api.models;

  // Calling useRequest hook for setting the worlds
  const {
    data: worlds,
    loading,
    error,
  } = useRequest(window.api.getAllWorlds(WorldModel.associations), [reload]);

  if (loading) {
    return <div>...</div>;
  }

  if (error) {
    toast.error(error.message, { id: "errGetWorldList" });
  }

  return (
    <>
      <H2>Vos mondes</H2>
      {worlds.length ? (
        <Flex direction="column" alignItems="center" gap="2rem">
          {worlds.map((world) => {
            return (
              <World
                key={`world-${world.dataValues.id}`}
                onClick={() => history.push(`/world/${world.id}`)}
              >
                <WorldName>{world.dataValues.name}</WorldName>
                {world.tags.length ? <Tags tags={world.tags} /> : null}
                <WorldImage src={world.dataValues.imageURL} />
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
        {!reload && (
          <ButtonDanger
            onClick={() => {
              // later, a confirmation dialog?
              window.api
                .initDB()
                .then(() => {
                  toast.success("DB reinitialized successfully", {
                    id: "successOnReinit",
                  });
                  setReload(true);
                })
                .catch((error) =>
                  toast.error(error.message, { id: "errorOnReinit" })
                );
            }}
          >
            Reinitialize db with dummy values
          </ButtonDanger>
        )}
      </FlexCentered>
    </>
  );
};

export default WorldList;
