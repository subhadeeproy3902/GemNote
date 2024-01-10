import {
  ReactNode,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface SearchTextContextType {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
}

interface Props {
  children: ReactNode;
}

const SearchTextContext = createContext<SearchTextContextType | null>(null);

export const useSearchText = () => {
  const context = useContext(SearchTextContext);
  if (!context) {
    throw new Error("useSearchText must be used within a SearchTextProvider");
  }
  return context;
};

export const SearchTextProvider = ({ children }: Props) => {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <SearchTextContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchTextContext.Provider>
  );
};
