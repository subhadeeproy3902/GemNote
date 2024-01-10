import { Box, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const NoteCardContainer = ({ children }: Props) => {
  return (
    <Box
      cursor={"pointer"}
      overflow="hidden"
      rounded={"lg"}
      className={"note-card-container"}
      _hover={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: useColorModeValue("gray.200", "gray.800"),
        borderRadius: "8px",
        opacity: 1,
        transition:
          "box-shadow .15s ease-in, border-radius .2s ease-in, background-color .1s ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default NoteCardContainer;
