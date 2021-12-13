import React from "react";
import {
  HStack,
  VStack,
  Text,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

export function ListaDatos({ todos2, deleteTodo }) {
  if (!todos2.length) {
    return (
      /* <Badge colorScheme="green" p="4" m="4" borderRadius="lg"> */
      <Badge p="4" m="4" borderRadius="lg">
        No hay nada
      </Badge>
    );
  }
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      alignItems="stretch"
      >
      {todos2.map((todo2) => (
        <HStack key={todo2.id}>
          <Text>{todo2.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            onClick={() => deleteTodo(todo2.id)}
            />
        </HStack>
      ))}
    </VStack>
  );
}

export default ListaDatos;