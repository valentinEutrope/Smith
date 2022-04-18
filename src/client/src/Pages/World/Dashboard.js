import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { FlexCentered } from "@components/base/Flex";
import {
  DashboardContainer,
  DashboardItem,
  DashboardItemTitle,
  DashboardItemOverlay,
} from "./styled";

const Dashboard = ({ worldId }) => {
  const history = useHistory();

  const dashboardItems = [
    {
      title: "Modèles de fiches",
      backgroundUrl:
        "https://lh3.googleusercontent.com/-WziC2h5zVSQ/WSVY5DyoMtI/AAAAAAAACvk/0y9QO0txb707vHRbT79XGbaLsSXPXl_DwCL0B/h760/2017-05-24.png",
      url: `/world/${worldId}/templates`,
    },
    {
      title: "Personnages",
      backgroundUrl:
        "https://www.blog.leroliste.com/wp-content/uploads/header-conseils-maitre-du-jeu-jdr.jpg",
    },
    {
      title: "Bestiaire",
      backgroundUrl:
        "https://omnis-bibliotheca.com/images/thumb/0/0e/D%C3%A9monSanguinaire.jpg/500px-D%C3%A9monSanguinaire.jpg",
    },
    {
      title: "Equipements / Objets",
      backgroundUrl:
        "https://www.blog.leroliste.com/wp-content/uploads/header-acheter-materiel-jdr-1600x899.jpg",
    },
    {
      title: "Cartographie / Lieux",
      backgroundUrl:
        "https://cosmo-orbus.net/blog/wp-content/uploads/2014/12/carte-jdr.jpg",
    },
    {
      title: "Histoires",
      backgroundUrl:
        "https://www.blog.leroliste.com/wp-content/uploads/header-personnage-jdr-attachant.jpg",
    },
  ];

  return (
    <FlexCentered>
      <DashboardContainer>
        {dashboardItems.map((item) => (
          <DashboardItem
            key={`dashboard-item-${item.title}`}
            backgroundUrl={item.backgroundUrl}
            onClick={() => history.push(item.url)}
          >
            <DashboardItemTitle>{item.title}</DashboardItemTitle>
            <DashboardItemOverlay></DashboardItemOverlay>
          </DashboardItem>
        ))}
      </DashboardContainer>
    </FlexCentered>
  );
};

Dashboard.propTypes = {
  worldId: PropTypes.string.isRequired,
};

export default Dashboard;
