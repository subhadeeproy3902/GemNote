import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Spacer,
  Text,
  Textarea,
  Tooltip,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FaPencil } from "react-icons/fa6";
import categories from "../constants/categories";
import useNotesHook, { Note } from "../hooks/useNotesHook";

import { z } from "zod";

interface Props {
  note: Note;
}

const schema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must contain at least 3 characters" })
    .max(50),
  description: z.string().min(0).max(200),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});

type FormData = z.infer<typeof schema>;

const EditForm = ({ note }: Props) => {
  const { updateNote } = useNotesHook();
  const [charLeft, setCharLeft] = useState(0);
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

  const handleCharChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setCharLeft(e.target.value.length);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    if (data) {
      const updatedNote = {
        ...note,
        ...data,
        date: new Date().toISOString().slice(0, 10),
      };
      updateNote(updatedNote);
    }
    setTimeout(() => {
      toast({
        title: "Note updated.",
        description: note.title,
        variant: "solid",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }, 600);
    onClose();
  };

  return (
    <>
      <Tooltip placement="top" label="Edit">
        <IconButton
          size={{ base: "sm", sm: "md" }}
          isRound={true}
          variant="solid"
          bg={"transparent"}
          aria-label="Done"
          icon={<FaPencil />}
          onClick={() => {
            setOverlay(<OverlayOne />);
            onOpen();
          }}
        />
      </Tooltip>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            <ModalHeader>Edit Note</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel fontSize={{ base: "sm", sm: "inherit" }}>
                  Title
                </FormLabel>
                <Input
                  {...register("title")}
                  fontSize={{ base: "sm", sm: "inherit" }}
                  autoFocus
                  defaultValue={note.title}
                  placeholder="Note title"
                  maxLength={50}
                />
                {errors.title && (
                  <Text color="red.300" mt={2}>
                    {errors.title.message}
                  </Text>
                )}
              </FormControl>

              <FormControl mt={4}>
                <Flex alignItems={"center"}>
                  <FormLabel fontSize={{ base: "xs", sm: "inherit" }}>
                    Description (optional)
                  </FormLabel>
                  <Spacer />
                  <Text
                    fontSize={{ base: "2xs", sm: "xs" }}
                    color={"gray"}
                  >{`${charLeft}/200`}</Text>
                </Flex>
                <Textarea
                  {...register("description")}
                  fontSize={{ base: "xs", sm: "inherit" }}
                  defaultValue={note.description}
                  maxLength={200}
                  minH={"150px"}
                  placeholder="Description..."
                  onChange={handleCharChange}
                />
                {errors.description && (
                  <Text color="red.300" mt={2}>
                    {errors.description.message}
                  </Text>
                )}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel fontSize={{ base: "xs", sm: "inherit" }}>
                  Category
                </FormLabel>
                <Select
                  {...register("category")}
                  defaultValue={note.category}
                  fontSize={{ base: "xs", sm: "inherit" }}
                >
                  {categories.map(
                    (cat, index) =>
                      index > 0 && (
                        <option key={index} value={cat}>
                          {cat}
                        </option>
                      )
                  )}
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                disabled={!isValid}
                type={"submit"}
                colorScheme="primary"
                mr={3}
              >
                Update
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default EditForm;
