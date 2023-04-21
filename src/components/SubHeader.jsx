import React from "react";
import { Text, Textarea, Box, Input, Flex } from "@chakra-ui/react";

function SubHeader() {
  return (
    <>
      <Flex flexDir={"row"} px={"4"}>
        <Box w={"50%"} h={"100%"}>
          <Text fontSize={"15"} color={"#434345"} as={"b"}>
            A la atención de
          </Text>
          <Input
            variant={"unstyled"}
            color={"#666666"}
            placeholder={"Empresa"}
          />
          <Input
            variant={"unstyled"}
            color={"#666666"}
            placeholder={"Dirección"}
          />
          <Input variant={"unstyled"} color={"#666666"} placeholder={"CP"} />
        </Box>
        <Box w={"100%"} h={"100%"}>
          <Text fontSize={"15"} color={"#434345"} as={"b"}>
            Proyecto
          </Text>
          <Textarea
            py={"0px"}
            color={"#666666"}
            h={"100%"}
            variant={"unstyled"}
            placeholder={"Ingrese una descripción del proyecto."}
            resize={"none"}
          />
        </Box>
      </Flex>
    </>
  );
}

export default SubHeader;
