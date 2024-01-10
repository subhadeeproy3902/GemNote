import {
  Box,
  Center,
  HStack,
  Heading,
  IconButton,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { MouseEvent, useRef } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import useNotesHook, { Note } from "../hooks/useNotesHook";
import Category from "./Category";
import DeleteForm from "./DeleteForm";
import EditForm from "./EditForm";

interface Props {
  note: Note;
}

const NoteCard = ({ note }: Props) => {
  const { updateNote } = useNotesHook();

  // Ref for external button
  const otherButtonRef = useRef<HTMLButtonElement | null>(null);

  const initiateDelete = (event: MouseEvent<HTMLButtonElement>) => {
    const cardNode =
      event.currentTarget.parentElement?.parentElement?.parentElement
        ?.parentElement?.parentElement;
    if (cardNode) {
      cardNode?.classList.replace("note-card-container", "delete-note");
    }
  };

  return (
    <Center className={note.completed ? "completed-note" : "note"}>
      <Box
        p={5}
        w={"100%"}
        h={{ base: "200px", sm: "300px" }}
        bg={useColorModeValue("rgba(255,255,255,0.3)", "rgba(32,32,32,0.1)")}
        boxShadow={"lg"}
        pos={"relative"}
        className="note-card"
      >
        <HStack justifyContent={"space-between"} mb={5}>
          <Category category={note.category} />
          <HStack spacing={0}>
            <Tooltip placement="top" label="Check">
              <IconButton
                size={{ base: "sm", sm: "md" }}
                isRound={true}
                variant="solid"
                bg={"transparent"}
                aria-label="Done"
                icon={
                  note.completed ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />
                }
                onClick={() => {
                  const updatedNote = { ...note, completed: !note.completed };
                  updateNote(updatedNote);
                }}
              />
            </Tooltip>
            <EditForm note={note} />
            <DeleteForm note={note} otherButtonRef={otherButtonRef} />
            <button
              ref={otherButtonRef}
              className="hidden"
              onClick={initiateDelete}
            >
              unseen
            </button>
          </HStack>
        </HStack>
        <Heading
          isTruncated
          fontFamily={"Montserrat"}
          fontWeight={"bold"}
          fontSize={{ base: "xl", sm: "2xl" }}
        >
          {note.title}
        </Heading>
        <Text mt={2} fontSize={{ base: 10, sm: "sm" }}>
          {note.description}
        </Text>
        <Text
          color={"white"}
          position={"absolute"}
          right={5}
          bottom={{ base: 2, sm: 4 }}
          fontSize={"2xs"}
        >
          {note.date}
        </Text>
      </Box>
    </Center>
  );
};

export default NoteCard;
