import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import {
  ListItem,
  UnorderedList,
  Heading,
  FormControl,
  VStack,
  Box,
  Flex,
  useColorModeValue,
  Container,
  Checkbox,
  Center,
} from "@chakra-ui/react";
import { React } from "react";
import { Link } from "react-router-dom";
import Persona from "./dbpersona";
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

var us = localStorage.getItem("usuario");
console.log(us);

export function AddForm({ addTodo }) {
  const backgroundColor = useColorModeValue("gray.300", "gray.700");
  const backgroundColor2 = useColorModeValue("blue.300", "blue.800");

  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();

    if (!content && !content2 & !content3 & !content4) {
      toast({
        title: "No hay contenido",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
      return;
    }

    let todo = {
      id: nanoid(),
      body: [
        content,
        content2,
        content3,
        content4,
        checked,
        checked2,
        checked3,
        checked4,
        checked5,
        checked6,
        checked7,
        checked8,
      ],
    };

    let todo2 = [
      content,
      content2,
      content3,
      content4,
      checked,
      checked2,
      checked3,
      checked4,
      checked5,
      checked6,
      checked7,
      checked8,
    ];

    addTodo(todo);
    localStorage.setItem("formu", todo2);
    setContent("");
    setContent2("");
    setContent3("");
    setContent4("");
  }

  const [checked, setChecked] = useState(true);
  const toggleChecked = () => setChecked((value) => !value);

  const [checked2, setChecked2] = useState(false);
  const toggleChecked2 = () => setChecked2((value) => !value);

  const [checked3, setChecked3] = useState(false);
  const toggleChecked3 = () => setChecked3((value) => !value);

  const [checked4, setChecked4] = useState(false);
  const toggleChecked4 = () => setChecked4((value) => !value);

  const [checked5, setChecked5] = useState(false);
  const toggleChecked5 = () => setChecked5((value) => !value);

  const [checked6, setChecked6] = useState(true);
  const toggleChecked6 = () => setChecked6((value) => !value);

  const [checked7, setChecked7] = useState(false);
  const toggleChecked7 = () => setChecked7((value) => !value);

  const [checked8, setChecked8] = useState(false);
  const toggleChecked8 = () => setChecked8((value) => !value);

  const [content, setContent] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");
  const [content4, setContent4] = useState("");

  console.log(
    checked,
    checked2,
    checked3,
    checked4,
    checked5,
    checked6,
    checked7,
    checked8
  );

  if (checked === true) {
    let c1 = "true";
    console.log("valor c: ", c1);
  } else {
    let c1 = "false";
    console.log("valor c: ", c1);
  }

  const crearRegistro = async () => {
    const documentos = [];

    const formulario = localStorage.getItem("formu").split(",");

    try {
      const docRef = await addDoc(collection(db, "formulario"), {
        nombre: formulario[0],
        apellido: formulario[1],
        telefono: formulario[2],
        correo: formulario[3],
        habInd: formulario[4],
        habDob: formulario[5],
        habTri: formulario[6],
        habCua: formulario[7],
        habSuite: formulario[8],
        desayuno: formulario[9],
        almuerzo: formulario[10],
        cena: formulario[11],
      });

      documentos.push({ id: docRef.id, ...docRef.data() });

      //setPersonas(documentos);
    } catch (error) {
      console.log(error);
    }
  };
  ////////

  return (
    <Container maxW="container.xl">
      <Center color="white" height="10vh">
        <Heading size="lg" mb={3} margin-left="100px" marginBottom="5">
          Bienvenido {localStorage.getItem("usuario")}
        </Heading>
      </Center>
      <Flex height="10vh" justifyContent="center" alignItems="center"></Flex>
      <Flex height="45vh" justifyContent="center" alignItems="center">
        <Box maxW="40vw" bg={backgroundColor} p={6} borderRadius="md">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <VStack mt="8" spacing="5" variant="outline" justify="center">
                <Heading size="lg" mb={3}>
                  Nombre
                </Heading>
                <Input
                  placeholder="Nombre"
                  variant="filled"
                  mb={3}
                  type="text"
                  autoComplete="off"
                  id="nombre"
                  value={content}
                  onChange={(nom) => setContent(nom.target.value)}
                />
                <Heading size="lg" mb={3}>
                  Apellidos
                </Heading>
                <Input
                  placeholder="Apellidos"
                  variant="filled"
                  mb={3}
                  type="text"
                  autoComplete="off"
                  value={content2}
                  onChange={(ape) => setContent2(ape.target.value)}
                />
                <Heading size="lg" mb={3}>
                  Número de contacto
                </Heading>
                <Input
                  placeholder="#"
                  variant="filled"
                  mb={3}
                  type="text"
                  autoComplete="off"
                  value={content3}
                  onChange={(num) => setContent3(num.target.value)}
                />
                <Heading size="lg" mb={3}>
                  Correo electrónico
                </Heading>
                <Input
                  placeholder="@"
                  variant="filled"
                  mb={3}
                  type="text"
                  autoComplete="off"
                  value={content4}
                  onChange={(email) => setContent4(email.target.value)}
                />
              </VStack>
            </FormControl>
          </form>
        </Box>

        <Box maxW="100vh" bg={backgroundColor2} p={6} borderRadius="md">
          <form onSubmit={handleSubmit}>
            <Heading size="lg" mb={3}>
              Tipo de Habitación
            </Heading>
            <UnorderedList spacing={3}>
              <ListItem>
                <Checkbox
                  defaultIsChecked
                  checked={checked}
                  onChange={toggleChecked}
                >
                  Habitación Individual
                </Checkbox>
              </ListItem>
              <ListItem>
                <Checkbox
                  defaultIsUnchecked
                  checked={checked2}
                  onChange={toggleChecked2}
                >
                  Habitación Doble
                </Checkbox>
              </ListItem>
              <ListItem>
                <Checkbox
                  defaultIsUnchecked
                  checked={checked3}
                  onChange={toggleChecked3}
                >
                  Habitación Triple
                </Checkbox>
              </ListItem>
              <ListItem>
                <Checkbox
                  defaultIsUnchecked
                  checked={checked4}
                  onChange={toggleChecked4}
                >
                  Habitación Cuádruple
                </Checkbox>
              </ListItem>
              <ListItem>
                <Checkbox
                  defaultIsUnchecked
                  checked={checked5}
                  onChange={toggleChecked5}
                >
                  Suite
                </Checkbox>
              </ListItem>
            </UnorderedList>

            <Heading size="lg" mb={3} marginTop="5">
              Servicio de alimentación
            </Heading>
            <UnorderedList spacing={3}>
              <ListItem>
                <Checkbox
                  defaultIsChecked
                  checked={checked6}
                  onChange={toggleChecked6}
                >
                  Desayuno
                </Checkbox>
              </ListItem>
              <ListItem>
                <Checkbox
                  defaultIsUnchecked
                  checked={checked7}
                  onChange={toggleChecked7}
                >
                  Almuerzo
                </Checkbox>
              </ListItem>
              <ListItem>
                <Checkbox
                  defaultIsUnchecked
                  checked={checked8}
                  onChange={toggleChecked8}
                >
                  Cena
                </Checkbox>
              </ListItem>
            </UnorderedList>
            <Button
              margin="2"
              colorScheme="blue"
              variant="outline"
              justify="center"
              marginRight="60%"
              onClick="regresar"
            >
              <Link to="/inicio">Cancelar</Link>
            </Button>
            <Button
              margin="2"
              colorScheme="blue"
              px="2"
              type="submit"
              onClick={crearRegistro}
            >
              Registrar
            </Button>
          </form>
        </Box>
      </Flex>
    </Container>
  );
}

export default AddForm;
