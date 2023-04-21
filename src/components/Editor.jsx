import { Tooltip, Button, Text, Flex, Box, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor() {
  const emptyHTML = /^<[^\/][^>]*>(<br\/?>)?<\/[^>]+>$/;
  const toast = useToast();
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "image"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"],
    ],
  };
  const [showEditor, setShowEditor] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [content, setContent] = useState("");

  const handleToggleEditor = () => {
    if (showEditor) {
      if (!content || emptyHTML.test(content)) {
        toast({
          position: "top",
          title: `Texto no guardado`,
          status: "error",
          isClosable: true,
          duration: 1500,
        });
      } else {
        setIsSaved(true);
        setShowEditor(false);
        toast({
          position: "top",
          title: `Texto guardado`,
          status: "success",
          isClosable: true,
          duration: 1500,
        });
      }
    } else {
      setShowEditor(true);
    }
  };

  return (
    <>
      <Flex flexDir={"column"} p={"4"} gap={"2"} w={"100%"}>
        <Text fontSize={"15"} color={"#434345"} as={"b"}>
          Descripción
        </Text>
        {showEditor && (
          <Flex flexDir={"column"} gap={"2"}>
            <ReactQuill
              value={content}
              onChange={setContent}
              modules={modules}
            />
            <Button maxW={"100px"} onClick={handleToggleEditor}>
              Guardar
            </Button>
          </Flex>
        )}
        {isSaved && !showEditor ? (
          <Tooltip label="Click para editar el texto" placement="auto">
            <Box
              px={"4"}
              dangerouslySetInnerHTML={{ __html: content }}
              onClick={handleToggleEditor}
              cursor={"pointer"}
            />
          </Tooltip>
        ) : null}
      </Flex>
    </>
  );
}

export default Editor;
