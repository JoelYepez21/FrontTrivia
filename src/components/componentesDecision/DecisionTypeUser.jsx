import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { GiBatMask, GiConqueror } from "react-icons/gi";

// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);
  const { getValor } = props;

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} onClick={getValor} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "blue.600",
          color: "white",
          borderColor: "blue.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={20}
        py={20}
      >
        {props.children}
      </Box>
    </Box>
  );
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
function Example(getValor) {
  const objeto = [
    { user: "Jugador", icono: <GiConqueror size={"5rem"} /> },
    { user: "Creador", icono: <GiBatMask size={"5rem"} /> },
  ];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "typeUser",
    defaultValue: "",
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {objeto.map((valor) => {
        const value = valor.user;
        const radio = getRadioProps({ value });

        return (
          <RadioCard key={valor.user} {...radio} getValor={getValor.getValor}>
            <Flex direction={"column"} gap={4}>
              <Text fontSize={20}>{valor.user}</Text>
              <Box>{valor.icono}</Box>
            </Flex>
          </RadioCard>
        );
      })}
    </HStack>
  );
}

export const DecisionTypeUser = () => {
  const [valor, setValor] = useState("");
  // const getValor = (e) => {
  //   setValor(e.target.value);
  // };
  // const handleValor = () => {
  //   console.log(valor);
  // };
  const get = (e) => {
    setValor(e.target.children[0].children[0].value);
  };
  return (
    <Flex gap={"4"} alignItems={"center"} flexDirection={"column"}>
      <Heading color={"white"}>Elige que clase de usuario eres</Heading>
      <Flex gap={4}>
        <ButtonGroup>
          <Button
            display={"flex"}
            flexDirection={"column"}
            border={"solid 1px"}
            colorScheme={valor === "Jugador" ? "blue" : "none"}
            p={28}
            gap={4}
            onClick={(e) => get(e)}
          >
            <InputGroup>
              <Input
                fontWeight={"600"}
                value={"Jugador"}
                type="text"
                textAlign={"center"}
                variant="unstyled"
                htmlSize={4}
              />
            </InputGroup>

            <Box>
              <GiConqueror size={"5rem"} />
            </Box>
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button
            display={"flex"}
            border={"solid 1px"}
            flexDirection={"column"}
            colorScheme={valor === "Creador" ? "blue" : "none"}
            p={28}
            gap={4}
            onClick={(e) => get(e)}
          >
            <InputGroup>
              <Input
                fontWeight={"600"}
                value={"Creador"}
                type="text"
                textAlign={"center"}
                variant="unstyled"
                htmlSize={4}
              />
            </InputGroup>
            <Box>
              <GiBatMask size={"5rem"} />
            </Box>
          </Button>
        </ButtonGroup>
      </Flex>

      {/* <Example getValor={getValor} />
      <Button
        w={"100%"}
        onClick={handleValor}
        isDisabled={!valor}
        colorScheme="green"
      >
        <FiCheck />
      </Button> */}
    </Flex>
  );
};
export default DecisionTypeUser;
