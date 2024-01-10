import { SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const NotesGrid = ({ children }: Props) => {
  return (
    <SimpleGrid
      mt={10}
      gap={5}
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      gridAutoFlow="dense"
    >
      {children}
    </SimpleGrid>
  );
};

export default NotesGrid;
