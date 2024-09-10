import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { GiBatMask, GiConqueror } from "react-icons/gi";
import { useNavigate } from "react-router";
import { Link, Link as ReactRouterLink } from "react-router-dom";

const NavItem = ({ icon, name, to, ...rest }) => {
  return (
    <Link
      as={ReactRouterLink}
      to={to}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        flexDirection={"column-reverse"}
        gap={4}
        justifyContent={"center"}
        alignItems={"center"}
        p="16"
        fontWeight={600}
        color={"white"}
        bg="rgba(20, 20, 20, .5)"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "blue.600",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            fontSize="8rem"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {name}
      </Flex>
    </Link>
  );
};

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
    { user: "Jugador", icono: <GiConqueror />, to: "/player" },
    { user: "Creador", icono: <GiBatMask />, to: "/creador" },
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
  const navigate = useNavigate();
  // const getValor = (e) => {
  //   setValor(e.target.value);
  // };
  // const handleValor = () => {
  //   console.log(valor);
  // };
  const objetos = [
    { user: "Jugador", icono: GiConqueror, to: "/player" },
    { user: "Creador", icono: GiBatMask, to: "/creador" },
  ];

  return (
    <Flex gap={"4"} alignItems={"center"} flexDirection={"column"}>
      <Heading color={"white"}>Elige que clase de usuario eres</Heading>
      <Flex gap={4}>
        {objetos.map((objeto) => (
          <NavItem
            key={objeto.user}
            icon={objeto.icono}
            to={objeto.to}
            name={objeto.user}
          />
        ))}

        {/* <ButtonGroup>
          <Button
            display={"flex"}
            flexDirection={"column"}
            colorScheme={valor === "jugador" ? "blue" : "blackAlpha"}
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
            flexDirection={"column"}
            colorScheme={valor === "creador" ? "blue" : "blackAlpha"}
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
        </ButtonGroup> */}
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
