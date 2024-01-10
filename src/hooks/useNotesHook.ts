import { useEffect } from "react";
import { useNotes } from "../contexts/notesContext";

export interface Note {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  completed: boolean;
}

const useNotesHook = () => {
  const { notes, setNotes } = useNotes();

  useEffect(() => {
    const data = localStorage.getItem("notesData");
    if (data) setNotes(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("notesData", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note: Note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const updateNote = (note: Note) => {
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== note.id));
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const deleteNote = (note: Note) => {
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== note.id));
  };

  return { addNote, updateNote, deleteNote };
};

export default useNotesHook;
