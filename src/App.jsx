import { Container, Divider } from "@chakra-ui/react";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Editor from "./components/Editor";
import PreHeader from "./components/PreHeader";

function App() {
  return (
    <Container minW="990px" m="0 auto" minH="100vh">
      <Header />
      <SubHeader />
      <Divider bg="#c4c4c4" h="1px" m="0px" />
      <Editor />
      <Divider bg="#c4c4c4" h="1px" m="0px" />
      <PreHeader></PreHeader>
    </Container>
  );
}

export default App;
