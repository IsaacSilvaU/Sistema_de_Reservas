import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { nanoid } from "nanoid";
import {
  Heading,
  FormControl,
  FormLabel,
  VStack,
  Box,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
// Import the functions you need from the SDKs you ne
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useEffect } from "react";
import { useUser } from "../providers/UserProvider";

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export function AddTodo({ addTodo }) {
  const backgroundColor = useColorModeValue("gray.300", "gray.700");

  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();
    if (!content && !content2) {
      toast({
        title: "No hay contenido",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      body: [content, content2, user.name],
    };
    console.log(todo);
    addTodo(todo);
    setContent("");
    setContent2("");
    contentus(todo.body.content);
    console.log(contentus);
  }

  const [content, setContent] = useState("");
  const [content2, setContent2] = useState("");
  const [usuario, contentus] = useState("");
  console.log(usuario);
  /////////////////////////////////////////////////////////////
  const [errorMessage, setErrorMessage] = useState("");
  const { user, setUser } =
    useUser(); /* Obtenemos el usuario y la función que obtiene los usuarios */

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((userCredentials) => {
        console.log(`Bienvenido ${userCredentials.user.displayName}`);
        setUser({
          name: userCredentials.user.displayName,
          profileImage: userCredentials.user.photoURL,
        }); /* Obtenemos el usuario. Dentro de User tenemos la propiedad de photoURL que nos dará la url de la foto de perfil*/
        toast({
          title: `Bienvenido ${userCredentials.user.displayName}`,
          description: "Nos alegra que estés aquí",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        localStorage.setItem("usuario", userCredentials.user.displayName);
        localStorage.setItem("UsImg", userCredentials.user.photoURL);
        return;
      })
      .catch((error) => {
        setErrorMessage(error.message);
        toast({
          title: "Error en acceder por Firebase",
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      });
  };

  useEffect(
    () => {
      auth.onAuthStateChanged(() => {
        /* onAuthStateChanged permite ver si el usuario esta autentificado */
        const user = auth.currentUser;

        if (user) {
          setUser({
            name: user.displayName,
            profileImage: user.photoURL,
          });
        }
      });
    } /* [] */
  );

  useEffect(() => {
    console.log(
      `Bienvenido user ${user.name}`
    ); /* Usamos el user para obtener la info del usuario */
  }, [user]);
  /////////////////////////////////////////////////
  const formulario = {
    pathname: "/formulario",
    state: { fromDashboard: true },
  };

  return (
    <Router>
      {/* <ProtectedRoute to="/formulario">
        <section className="container">
        <div>Cusos de: {localStorage.getItem("usuario")}</div>
        </section>
      </ProtectedRoute> */}
      <Flex height="75vh" justifyContent="center" alignItems="center">
        <Switch>
          <Box maxW="50vw" bg={backgroundColor} p={6} borderRadius="md">
            <VStack p={4}>
              <Heading>Login</Heading>
            </VStack>
            <form onSubmit={handleSubmit}>
              <FormControl
                id="username"
                spacing="10"
                variant="outline"
                justify="center"
              >
                <VStack mt="8" spacing="5" variant="outline" justify="center">
                  <FormLabel>Nombre de usuario</FormLabel>
                  <Input
                    name="username"
                    variant="filled"
                    placeholder="Username"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />

                  <FormLabel>Contraseña</FormLabel>
                  <Input
                    name="password"
                    variant="filled"
                    placeholder="Password"
                    type="password"
                    value={content2}
                    onChange={(f) => setContent2(f.target.value)}
                  />
                  <div className="card container sign-in-card">
                    <Button
                      onClick={handleGoogleSignIn}
                      className="sign-in-button"
                      colorScheme="green"
                      px="2"
                      type="submit"
                    >
                      Iniciar sesión con Google
                    </Button>
                    {errorMessage && (
                      <div className="error">{errorMessage}</div>
                    )}
                  </div>
                  <Button
                    colorScheme="blue"
                    px="2"
                    type="submit"
                    onClick={formulario}
                  >
                    <Link to="/formulario">Iniciar Sesión</Link> {/* No funciona del todo bien */}
                  </Button>
                </VStack>
              </FormControl>
            </form>
            <main className="App">
              <Route patch="/">
                <section className="container"></section>
              </Route>
              {/*               <ProtectedRoute to="./formulario">
                <section className="container">
                  <div>Cusos de: {user?.name}</div>
                  <Link to="/formulario">Formulario</Link>
                </section>
              </ProtectedRoute> */}
            </main>
          </Box>
        </Switch>
      </Flex>
    </Router>
  );
}

export default AddTodo;
