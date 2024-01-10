import { Checkbox } from "@chakra-ui/react";
import { useIsChecked } from "../contexts/IsCheckedContext";
import { ChangeEvent } from "react";

const ShowCompletedCheckBox = () => {
  const { setIsChecked } = useIsChecked();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setIsChecked(e.target.checked);

  return (
    <Checkbox
      mt={{ base: 5, md: 0 }}
      colorScheme="brand"
      onChange={handleChange}
    >
      Show completed notes
    </Checkbox>
  );
};

export default ShowCompletedCheckBox;
