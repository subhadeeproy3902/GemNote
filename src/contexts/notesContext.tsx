import {
  ReactNode,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { Note } from "../hooks/useNotesHook";

interface NotesContextType {
  notes?: Note[];
  setNotes: Dispatch<SetStateAction<Note[]>>;
}

interface Props {
  children: ReactNode;
}

const NotesContext = createContext<NotesContextType | null>(null);

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
};

export const NotesProvider = ({ children }: Props) => {
  const [notes, setNotes] = useState<Note[]>(() => {
    // Load data from localStorage on mount
    const storedData = localStorage.getItem("notesData");
    return storedData ? JSON.parse(storedData) : [];
  });

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};
