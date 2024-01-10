import { Box, Flex, Show, Spacer, useColorModeValue } from "@chakra-ui/react";
import NotesDisplay from "./components/NotesDisplay";
import Footer from "./components/Footer";
import HeadingComp from "./components/HeadingComp";
import NavBar from "./components/NavBar";
import ShowCompletedCheckBox from "./components/ShowCompletedCheckBox";

function App() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} h={"100%"}>
      <NavBar />
      <Box
        mx={"auto"}
        px={{ base: 2, sm: 10 }}
        my={"50px"}
        maxW={"1600px"}
        className="main-body"
      >
        <Flex
          alignItems={{ base: "center", md: "end" }}
          direction={{ base: "column", md: "row" }}
        >
          <HeadingComp />
          <Spacer />
          <Show above="md">
            <ShowCompletedCheckBox />
          </Show>
        </Flex>
        <NotesDisplay />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
