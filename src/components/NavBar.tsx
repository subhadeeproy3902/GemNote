"use client";

import {
  Box,
  Grid,
  GridItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import AddForm from "./AddForm";
import SearchInput from "./SearchInput";
import ThemeSwitch from "./ThemeSwitch";
import { useCategory } from "../contexts/categoryContext";
import { useState } from "react";
import logo from "../assets/notes.webp";

const NavBar = () => {
  const { setSelectedCategoryIndex } = useCategory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"lg"}
        h={"70px"}
        px={{ base: 2, sm: 10 }}
        mb={showSearch ? "80px" : 0}
        transition={"margin-bottom 0.25s ease-in-out"}
      >
        <Grid
          templateColumns={"1fr 2fr 1fr"}
          h={"100%"}
          alignItems={"center"}
          maxWidth={"1600px"}
          mx={"auto"}
        >
          <GridItem onClick={() => setSelectedCategoryIndex(0)} display={"flex"} gap={"0.5rem"} alignItems={"center"}>
              <img src={logo} alt="" width={40} height={40} />
              <Text fontWeight={"700"} cursor={"pointer"} fontStyle={"text-sm sm:text-2xl"}>
                Notes
              </Text>
          </GridItem>
          <GridItem>
            <SearchInput
              showSearch={showSearch}
              setShowSearch={setShowSearch}
            />
          </GridItem>
          <GridItem justifySelf={"end"}>
            <Stack
              direction={"row"}
              spacing={{ base: 4, sm: 7 }}
              alignItems={"center"}
            >
              <ThemeSwitch />
              <AddForm />
            </Stack>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default NavBar;
