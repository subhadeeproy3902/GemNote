import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { ChangeEvent } from "react";
import { BsSearch } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { useSearchText } from "../contexts/searchTextContext";

interface Props {
  showSearch: boolean;
  setShowSearch: (ss: boolean) => void;
}

const SearchInput = ({ showSearch, setShowSearch }: Props) => {
  const { setSearchText } = useSearchText();

  const isSearchVisible = useBreakpointValue({ base: true, md: false });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchText(inputValue);
  };

  return (
    <>
      {isSearchVisible ? (
        <Box pos={"relative"}>
          <IconButton
            pos={"absolute"}
            top={"-20px"}
            right={{ base: 0, sm: 4 }}
            onClick={() => setShowSearch(!showSearch)}
            isRound={true}
            variant="solid"
            bg={"transparent"}
            aria-label="Search"
            icon={showSearch ? <MdClose /> : <BsSearch />}
          />
          <AnimatePresence>
            {showSearch && (
              <motion.form
                initial={{ opacity: 0, y: -90 }}
                animate={
                  showSearch ? { opacity: 1, y: -50 } : { opacity: 0, y: -90 }
                }
                exit={{ opacity: 0, y: -80 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  pos={"absolute"}
                  top="110px"
                  right={{ base: "-132px", sm: "-160px" }}
                  mx={"auto"}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <InputGroup width={{ base: "270px", sm: "350px" }}>
                    <InputLeftElement children={<BsSearch />} />
                    <Input
                      bg={useColorModeValue("white", "#353F4F")}
                      onChange={handleInputChange}
                      borderRadius={20}
                      placeholder="Search notes..."
                      variant="filled"
                    />
                  </InputGroup>
                </Box>
              </motion.form>
            )}
          </AnimatePresence>
        </Box>
      ) : (
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            borderRadius={20}
            placeholder="Search notes..."
            variant="filled"
          />
        </InputGroup>
      )}
    </>
  );
};

export default SearchInput;
