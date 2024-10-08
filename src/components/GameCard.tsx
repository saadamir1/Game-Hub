import Game from "../entities/Game";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height="350px">
      {" "}
      <Image
        // objectFit="cover"
        // height="180px"
        src={getCroppedImageUrl(game.background_image)}
      />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          {game.parent_platforms && ( //if exist then proceed
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          )}
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={{ base: "xl", md: "2xl" }} textAlign="left">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
