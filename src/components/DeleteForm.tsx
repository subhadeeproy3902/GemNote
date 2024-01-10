import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { MutableRefObject, useState } from "react";
import useNotesHook, { Note } from "../hooks/useNotesHook";

import { DeleteIcon } from "@chakra-ui/icons";

interface Props {
  note: Note;
  otherButtonRef: MutableRefObject<HTMLButtonElement | null>;
}

const DeleteForm = ({ note, otherButtonRef }: Props) => {
  const { deleteNote } = useNotesHook();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter={`blur(10px) hue-rotate(0)`}
      transition="background-color 0.3s ease-in-out"
    />
  );
  const [overlay, setOverlay] = useState(<OverlayOne />);

  const handleManualClick = () => {
    if (otherButtonRef.current) {
      otherButtonRef.current.click();
    }
  };

  const handleDelete = () => {
    handleManualClick();
    setTimeout(() => {
      deleteNote(note);
      toast({
        title: "Note deleted.",
        description: note.title,
        variant: "solid",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }, 600);
    onClose();
  };

  return (
    <>
      <Tooltip placement="top" label="Delete">
        <IconButton
          size={{ base: "sm", sm: "md" }}
          isRound={true}
          variant="solid"
          bg={"transparent"}
          aria-label="Done"
          icon={<DeleteIcon />}
          onClick={() => {
            setOverlay(<OverlayOne />);
            onOpen();
          }}
        />
      </Tooltip>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Delete Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>Are you sure you want to delete this note?</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleDelete}>
              Delete
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteForm;
