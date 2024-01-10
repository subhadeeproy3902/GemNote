import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { ReactNode } from "react";


const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("white.100", "gray.800")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.800")}
      width={"100%"}
      height={{ base: "120px", md: "70px" }}
      maxW={"1920px"}
      mx={"auto"}
    >
      <Container
        maxW={"1600px"}
        as={Stack}
        py={4}
        px={10}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text fontSize={{ base: 11, sm: "inherit" }}>
          Made by <a href="https://github.com/subhadeeproy3902" rel="noferrer" target="_blank" style={{ color: useColorModeValue("darkviolet", "violet"), fontWeight: "700" }} >Subhadeep Roy</a>. All rights reserved
        </Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Linkedin"} href={"https://www.linkedin.com/in/subhadeep3902/"}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={"Github"} href={"https://github.com/subhadeeproy3902"}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"https://www.instagram.com/mvp_subha/"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
