import {
  Box,
  Button,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { ReactNode } from "react";
import { MdInstallMobile } from "react-icons/md";
import { useState, useEffect } from "react";


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

  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const handleInstallPrompt = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    }
  };

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
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
        className="px-1 sm:px-10 py-4"
      >
        <div className="flex justify-between items-center gap-5">
          <Text fontSize={{ base: 11, sm: "inherit" }}>
            Made by <a href="https://github.com/subhadeeproy3902" rel="noferrer" target="_blank" style={{ color: useColorModeValue("darkviolet", "violet"), fontWeight: "700" }} >Subhadeep Roy</a>. All rights reserved
          </Text>
          <Button
            size={{ base: "sm", sm: "md" }}
            leftIcon={<MdInstallMobile />}
            colorScheme="primary"
            className="px-2"
            onClick={handleInstallPrompt}
          >
            Install
          </Button>
        </div>
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
