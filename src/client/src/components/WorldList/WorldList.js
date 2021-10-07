import React from "react";

import { H2 } from "../../components/base/Headers";
import { WorldImage, Worlds, World } from "./styled";

const WorldList = () => {
  const worlds = [
    {
      id: 0,
      name: "World 1",
      imgUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/95c73850815079.58da751bb31b7.jpg",
    },
    {
      id: 1,
      name: "World 2",
      imgUrl:
        "https://img.etsystatic.com/il/9056ab/904031544/il_fullxfull.904031544_gx1f.jpg?version=0",
    },
  ];

  return (
    <div>
      <H2>Vos mondes</H2>
      <Worlds>
        {worlds.map((world) => {
          return (
            <World>
              <span>{world.name}</span>
              <WorldImage src={world.imgUrl} />
            </World>
          );
        })}
      </Worlds>
    </div>
  );
};

export default WorldList;
