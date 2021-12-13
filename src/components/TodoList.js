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

export function TodoList({ todos, deleteTodo }) {
  if (!todos.length) {
    return (
        <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
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
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;