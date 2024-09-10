import { Flex, Heading, Icon } from "@chakra-ui/react";
import { GiChessPawn, GiChessQueen } from "react-icons/gi";
import { Link, Link as ReactRouterLink } from "react-router-dom";

const NavItem = ({ icon, name, getPlayer, ...rest }) => {
  return (
    <Link
      as={ReactRouterLink}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      onClick={getPlayer}
    >
      <Flex
        id={name}
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

export const DecisionTypePlayer = (getPlayer) => {
  const objetos = [
    { user: "Nuevo", icono: GiChessPawn, to: "/new-player" },
    { user: "Viejo", icono: GiChessQueen, to: "/old-player" },
  ];

  return (
    <Flex gap={"4"} alignItems={"center"} flexDirection={"column"}>
      <Heading color={"white"}>Elige que tipo de jugador eres</Heading>
      <Flex gap={4}>
        {objetos.map((objeto) => (
          <NavItem
            key={objeto.user}
            icon={objeto.icono}
            name={objeto.user}
            getPlayer={getPlayer.getPlayer}
          />
        ))}
      </Flex>
    </Flex>
  );
};
export default DecisionTypePlayer;
