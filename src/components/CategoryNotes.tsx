import { useIsChecked } from "../contexts/IsCheckedContext";
import { useNotes } from "../contexts/notesContext";
import useSearch from "../hooks/useSearch";
import NoNotes from "./NoNotes";
import NoteCard from "./NoteCard";
import NoteCardContainer from "./NoteCardContainer";
import NotesGrid from "./NotesGrid";

interface Props {
  category: string;
}

const CategoryNotes = ({ category }: Props) => {
  const { notes } = useNotes();
  const { isChecked } = useIsChecked();
  const { includesSearch } = useSearch();
  return notes &&
    notes.filter(
      (note) =>
        note.category === category &&
        includesSearch(note) &&
        isChecked &&
        note.completed
    ).length === 0 &&
    isChecked ? (
    <NoNotes />
  ) : (
    <NotesGrid>
      {!isChecked &&
        notes
          ?.map(
            (note) =>
              note.category === category &&
              includesSearch(note) &&
              !note.completed && (
                <NoteCardContainer key={note.id}>
                  <NoteCard note={note} />
                </NoteCardContainer>
              )
          )
          .reverse()}
      {notes
        ?.map(
          (note) =>
            note.category === category &&
            includesSearch(note) &&
            note.completed && (
              <NoteCardContainer key={note.id}>
                <NoteCard note={note} />
              </NoteCardContainer>
            )
        )
        .reverse()}
    </NotesGrid>
  );
};

export default CategoryNotes;
