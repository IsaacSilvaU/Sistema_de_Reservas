import { Box, Center, Image, Heading } from "@chakra-ui/react";
import Persona from "./dbpersona";
import Listado from "./dblistado";

//import Listado from "./components/listado";

export function Inicio() {
  return (
    <Box p={4}>
      <Center h="100px" color="white" height="20vh">
        <Heading size="lg" mb={3} margin-left="100px">
          Bienvenidos al Hotel Ada Suite
        </Heading>
      </Center>
      <Center>
        <Box boxSize="sm" width="40vw">
          <div>
            <Image
              justifyContent="Center"
              src="./ada.png"
              alt="Logo Adad Suite"
            />
          </div>
        </Box>
      </Center>
      {/* <Listado /> */}
    </Box>
  );
}

export default Inicio;
