import { Flex, ScaleFade } from "@chakra-ui/react";
import DecisionTypePlayer from "../components/componentesDecision/DecisionTypePlayer";
import { useEffect, useState } from "react";
import FormNewUser from "../components/formularios/FromNewUser";
import FormOldUser from "../components/formularios/FormOldUser";

export const Player = () => {
  const [valor, setValor] = useState("");
  const getPlayer = (e) => {
    setValor(e.target.id.toLowerCase());
  };
  const changeValor = (value) => {
    setValor(value);
  };
  const renderSwicth = () => {
    switch (valor) {
      case "nuevo":
        return <FormNewUser changeValor={changeValor} />;

        break;
      case "viejo":
        return <FormOldUser changeValor={changeValor} />;

        break;

      default:
        return <DecisionTypePlayer getPlayer={getPlayer} />;

        break;
    }
  };

  return (
    <>
      <Flex
        w={"100vw"}
        h={"100vh"}
        bg={"red.600"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <ScaleFade initialScale={0.1} in={true}>
          {renderSwicth()}
        </ScaleFade>
      </Flex>
    </>
  );
};
export default Player;
