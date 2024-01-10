import { Heading, Text } from "@chakra-ui/react";
import categories from "../constants/categories";
import { useCategory } from "../contexts/categoryContext";
import { useSearchText } from "../contexts/searchTextContext";

const HeadingComp = () => {
  const { selectedCategoryIndex } = useCategory();
  const { searchText } = useSearchText();
  return (
    <Heading
      fontFamily={"Montserrat"}
      fontWeight={"bold"}
      textAlign={{ base: "center", lg: "start" }}
    >
      {searchText
        ? "Search"
        : selectedCategoryIndex
        ? categories[selectedCategoryIndex]
        : "My"}{" "}
      notes{" "}
      {searchText && (
        <Text as="span">
          for{" "}
          <Text as="span" color={"brand.500"}>
            {searchText}
          </Text>
        </Text>
      )}
    </Heading>
  );
};

export default HeadingComp;
