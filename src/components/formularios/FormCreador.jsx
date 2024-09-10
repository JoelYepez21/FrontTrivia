import {
  Button,
  ButtonGroup,
  Flex,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { GiCapybara, GiChest, GiMonkey } from "react-icons/gi";
import { Link, Link as ReactRouterLink } from "react-router-dom";

export const FormCreador = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    console.log(userName, password);
  };

  return (
    <Flex
      gap={"6"}
      alignItems={"center"}
      flexDirection={"column"}
      bg={"rgba(20, 20, 20, .5)"}
      px={12}
      py={8}
      rounded={"lg"}
      color={"white"}
    >
      <InputGroup
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <InputLeftElement pointerEvents="none">
          <GiMonkey size={"1.5rem"} />
        </InputLeftElement>
        <Input
          type="text"
          autoComplete="off"
          placeholder="User Name"
          onChange={({ target }) => setUserName(target.value)}
        />
      </InputGroup>
      <InputGroup
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <InputLeftElement pointerEvents="none">
          <GiChest size={"1.5rem"} />
        </InputLeftElement>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="password"
          autoComplete="off"
          onChange={({ target }) => setPassword(target.value)}
        />
        <InputRightElement h={"full"} bg={"none"}>
          <Button
            color={"white"}
            bg={"none"}
            _hover={{
              bg: "none",
              color: "white",
            }}
            onMouseEnter={() => setShowPassword(true)}
            onMouseLeave={() => setShowPassword(false)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <ButtonGroup>
        <Button colorScheme="blue" onClick={login}>
          Log In
        </Button>
      </ButtonGroup>
      <Flex opacity={0.5} _hover={{ opacity: "1" }}>
        <Link as={ReactRouterLink} to={"/player"}>
          ¿No eres creador?
        </Link>
      </Flex>
    </Flex>
  );
};
export default FormCreador;
