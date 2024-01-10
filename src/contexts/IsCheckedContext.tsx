import {
    ReactNode,
    createContext,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
  } from "react";
  
  interface IsCheckedContextType {
    isChecked: boolean;
    setIsChecked: Dispatch<SetStateAction<boolean>>;
  }
  
  interface Props {
    children: ReactNode;
  }
  
  const IsCheckedContext = createContext<IsCheckedContextType | null>(null);
  
  export const useIsChecked = () => {
    const context = useContext(IsCheckedContext);
    if (!context) {
      throw new Error("useIsChecked must be used within a IsCheckedProvider");
    }
    return context;
  };
  
  export const IsCheckedProvider = ({ children }: Props) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    return (
      <IsCheckedContext.Provider value={{ isChecked, setIsChecked }}>
        {children}
      </IsCheckedContext.Provider>
    );
  };
  