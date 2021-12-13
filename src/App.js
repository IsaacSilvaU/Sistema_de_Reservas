import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Inicio } from "./components/inicio";
import { Login } from "./components/login";
import { Formulario } from "./components/formulario";
import {
  Box,
  Flex,
  HStack,
  Image,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";


function App( user, ProfileImage ) {
  return (
    <Router>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      {/* <Box px={4}> */}
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton size={"md"} display={{ md: "none" }} />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link to="/inicio">Inicio</Link>
            </Box>
            <Box>
              <Link to="/login">Login</Link>
            </Box>
{/*             <Box>
              <Link to="/formulario">Formulario</Link>
            </Box> */}
            <Image
              borderRadius="full"
              boxSize="45px"
              src={localStorage.getItem("UsImg")}
              alt="Profile Image"
              justify="right"
              left="100px"
            />
            {user.name && <ProfileImage />}
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            ></HStack>
          </HStack>
        </Flex>
      </Box>
      <Switch>
        <Route path={"/inicio"}>
          <Inicio />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/formulario">
          <Formulario />
        </Route>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
