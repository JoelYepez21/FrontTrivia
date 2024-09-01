import { Flex, ScaleFade } from "@chakra-ui/react";
import DecisionTypeUser from "../components/componentesDecision/decisionTypeUser";

export const Home = () => {
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
          <DecisionTypeUser />
        </ScaleFade>
      </Flex>
    </>
  );
};
export default Home;
