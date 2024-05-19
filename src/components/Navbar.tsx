import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import { useLocale } from "../context/LocaleContext";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      color: "brand",
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { locale } = useLocale();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  const Links = [
    t("navbar.main"),
    t("navbar.prices"),
    t("navbar.call_sales"),
    t("navbar.track_shipment"),
    t("navbar.login"),
  ];
  const { dir } = useLocale();
  return (
    <Box
      py={{ base: 4, md: 6 }}
      px={{ base: 8, lg: 32 }}
      width="100dvw"
      dir={dir}
      fontWeight="bold"
      borderBottom="1px solid"
      borderBottomColor="border"
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Box>
          <Image src="src/assets/logo-en.svg" width="100%" />
        </Box>
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link, index) =>
            index < 3 ? <NavLink key={link}>{link}</NavLink> : null
          )}
        </HStack>
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link, index) =>
            index == 3 ? (
              // TODO handle show shipmenty number search bar
              <NavLink key={link}>{link}</NavLink>
            ) : index == 4 ? (
              <NavLink key={link}>{link}</NavLink>
            ) : null
          )}
          <Button
            color="brand"
            bg="none"
            _hover={{ color: "white", bg: "brand" }}
          >
            {locale.toLocaleUpperCase()}
          </Button>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4} margin="auto">
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
