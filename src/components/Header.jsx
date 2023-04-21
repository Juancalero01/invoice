import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

function Header() {
  const date = new Date().toLocaleDateString();
  return (
    <>
      <Box bg={"#29388F"} w={"100%"} h={"10px"} />
      <Flex flexDir={"column"} p={"4"}>
        <Text fontSize="25" color="#29388F" as="b">
          Presupuesto
        </Text>
        <Text fontSize="15" color="#EE4686" as="b">
          {date}
        </Text>
      </Flex>
    </>
  );
}

export default Header;
