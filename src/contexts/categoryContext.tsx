import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface CategoryContextType {
  selectedCategoryIndex: number;
  setSelectedCategoryIndex: Dispatch<SetStateAction<number>>;
}

interface Props {
  children: ReactNode;
}

const CategoryContext = createContext<CategoryContextType | null>(null);

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};

export const CategoryProvider = ({ children }: Props) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  return (
    <CategoryContext.Provider
      value={{ selectedCategoryIndex, setSelectedCategoryIndex }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
