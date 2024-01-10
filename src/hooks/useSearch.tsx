import { useSearchText } from "../contexts/searchTextContext";
import { Note } from "./useNotesHook";

const useSearch = () => {
  const { searchText } = useSearchText();

  const includesSearch = (note: Note) => {
    if (note) {
      const titleIncludesSearch =
        searchText &&
        note.title &&
        note.title.toLowerCase().includes(searchText.toLowerCase());
      const descriptionIncludesSearch =
        searchText &&
        note.description &&
        note.description.toLowerCase().includes(searchText.toLowerCase());

      return searchText
        ? titleIncludesSearch || descriptionIncludesSearch
        : true;
    }
  };
  return { includesSearch };
};

export default useSearch;
