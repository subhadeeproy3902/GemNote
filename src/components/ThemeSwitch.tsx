import { IconButton, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";

const ThemeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      isRound={true}
      variant="solid"
      bg={"transparent"}
      aria-label="Change Theme"
      icon={colorMode === "dark" ? <MdDarkMode /> : <MdOutlineWbSunny />}
    />
  );
};

export default ThemeSwitch;
