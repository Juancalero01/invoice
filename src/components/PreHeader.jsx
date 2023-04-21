import React from "react";
import { Text, Box, Input, Flex } from "@chakra-ui/react";
function PreHeader() {
  return (
    <>
      <Flex flexDirection="column" p={"4"} alignItems={"end"} gap={"2"}>
        <Flex gap={50} w={"40%"}>
          <Text fontSize="15" w={"50%"} color="#434345" as="b">
            Mano de obra
          </Text>
          <Input
            w={"50%"}
            variant="unstyled"
            color="#666666"
            placeholder="Monto"
            type="number"
          />
        </Flex>
        <Flex gap={50} w={"40%"}>
          <Text fontSize="15" w={"50%"} color="#434345" as="b">
            Material aproximado
          </Text>
          <Input
            w={"50%"}
            variant="unstyled"
            color="#666666"
            placeholder="Monto"
            type="number"
          />
        </Flex>
        <Flex gap={50} w={"40%"}>
          <Text fontSize="15" w={"50%"} color="#434345" as="b">
            Total
          </Text>
          <Input
            w={"50%"}
            variant="unstyled"
            color="#666666"
            placeholder="Monto"
            type="number"
          />
        </Flex>
      </Flex>
    </>
  );
}

export default PreHeader;
