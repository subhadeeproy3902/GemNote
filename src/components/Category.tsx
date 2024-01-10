import { Button } from "@chakra-ui/react";
import categories, { categoryColors } from "../constants/categories";
import { useCategory } from "../contexts/categoryContext";

interface Props {
  category: string;
}

const Category = ({ category }: Props) => {
  const { setSelectedCategoryIndex } = useCategory();

  const catColors = categoryColors[category];
  return (
    <Button
      className="card-category-button"
      onClick={() =>
        setSelectedCategoryIndex(categories.findIndex((c) => c === category))
      }
      size={"xs"}
      rounded={"xl"}
      px={3}
      fontSize={{ base: 10, sm: "xs" }}
      bg={catColors}
      color={"rgba(255,255,255, 0.7);"}
      _hover={{
        backgroundImage: "linear-gradient(rgb(0 0 0 / 30%) 0 0)",
        color: "white",
      }}
    >
      {category}
    </Button>
  );
};

export default Category;
