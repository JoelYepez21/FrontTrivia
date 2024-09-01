import { Box, Flex, Text } from "@chakra-ui/react";
import { GiBatMask, GiConqueror } from "react-icons/gi";

export const DecisionTypeUser = () => {
  const [backgroundColor, setBackgroundColor] = useState("teal.500");
  const ChangeColor = () => {
    console.log(header.current);
  };
  return (
    <Flex gap={"4"} alignItems={"center"}>
      <Box
        p="20"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={4}
        color="white"
        bg="teal.500"
        rounded="md"
        shadow="md"
        cursor={"pointer"}
        onClick={ChangeColor}
      >
        <Text>Jugador</Text>
        <GiConqueror size={"30%"} />
      </Box>
      <Text>o</Text>
      <Box
        p="20"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={4}
        color="white"
        bg="teal.500"
        rounded="md"
        shadow="md"
        cursor={"pointer"}
        onClick={ChangeColor}
      >
        <Text>Creador</Text>
        <GiBatMask size={"30%"} />
      </Box>
    </Flex>
  );
};
export default DecisionTypeUser;
