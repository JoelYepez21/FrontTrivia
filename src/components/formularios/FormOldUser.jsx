import {
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  ScaleFade,
  Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { FaGhost, FaLock } from "react-icons/fa";

export const FormOldUser = (changeValor) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const renderForm = () => {
    changeValor.changeValor("nuevo");
  };
  const login = () => {
    console.log(userName, password);
  };

  return (
    <ScaleFade initialScale={0.1} in={true}>
      <Flex
        gap={"4"}
        alignItems={"center"}
        flexDirection={"column"}
        bg={"rgba(20, 20, 20, .5)"}
        px={12}
        py={8}
        rounded={"lg"}
        color={"white"}
      >
        <FormControl>
          <FormLabel>Nombre de usuario:</FormLabel>
          <InputGroup
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <InputLeftElement pointerEvents="none">
              <FaGhost />
            </InputLeftElement>
            <Input
              autoComplete="off"
              type="text"
              placeholder="User Name"
              onChange={({ target }) => setUserName(target.value)}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Contraseña:</FormLabel>
          <InputGroup
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <InputLeftElement pointerEvents="none">
              <FaLock />
            </InputLeftElement>
            <Input
              type={showPassword ? "text" : "password"}
              autoComplete="off"
              placeholder="password"
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
        </FormControl>

        <ButtonGroup>
          <Button colorScheme="blue" onClick={login}>
            Log in
          </Button>
        </ButtonGroup>
        <Flex opacity={0.5} _hover={{ opacity: "1" }}>
          <Text onClick={renderForm} _hover={{ cursor: "pointer" }}>
            ¿Aun no has participado?
          </Text>
        </Flex>
      </Flex>
    </ScaleFade>
  );
};
export default FormOldUser;
