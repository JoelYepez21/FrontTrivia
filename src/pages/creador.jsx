import { Flex, ScaleFade } from "@chakra-ui/react";
import FormCreador from "../components/formularios/FormCreador.JSX";

export const Creador = () => {
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
          <FormCreador />
        </ScaleFade>
      </Flex>
    </>
  );
};
export default Creador;
