import { useIsChecked } from "../contexts/IsCheckedContext";
import { useNotes } from "../contexts/notesContext";
import useSearch from "../hooks/useSearch";
import NoNotes from "./NoNotes";
import NoteCard from "./NoteCard";
import NoteCardContainer from "./NoteCardContainer";
import NotesGrid from "./NotesGrid";

const AllNotes = () => {
  const { notes } = useNotes();
  const { isChecked } = useIsChecked();
  const { includesSearch } = useSearch();

  return notes &&
    notes.filter((note) => includesSearch(note) && isChecked && note.completed)
      .length === 0 &&
    isChecked ? (
    <NoNotes />
  ) : (
    <NotesGrid>
      {!isChecked &&
        notes
          ?.map(
            (note) =>
              includesSearch(note) &&
              !note.completed && (
                <NoteCardContainer key={note.id}>
                  <NoteCard note={note} key={note.id} />
                </NoteCardContainer>
              )
          )
          .reverse()}
      {notes
        ?.map(
          (note) =>
            includesSearch(note) &&
            note.completed && (
              <NoteCardContainer key={note.id}>
                <NoteCard note={note} key={note.id} />
              </NoteCardContainer>
            )
        )
        .reverse()}
    </NotesGrid>
  );
};

export default AllNotes;
