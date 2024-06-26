import { ReactNode } from "react";
import {
  Box,
  Flex,
  Link,
  IconButton,
  Button,
  HStack,
  Image,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import { useLocale } from "../context/LocaleContext";
import LogoArabic from "../assets/logo-ar.svg";
import LogoEnglish from "../assets/logo-en.svg";
import ShipmentSearch from "./ShipmentSearch";
export const NavLink = ({ children }: { children: ReactNode }) => (
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
  const {
    onOpen: onOpenNav,
    onClose: onCloseNav,
    isOpen: isOpenNav,
  } = useDisclosure();
  const {
    onOpen: onOpenPop,
    onClose: onClosePop,
    isOpen: isOpenPop,
  } = useDisclosure();
  const { locale, dir, toggleLocale } = useLocale();
  const { t } = useTranslation();
  const Links = [
    t("navbar.main"),
    t("navbar.prices"),
    t("navbar.call_sales"),
    t("navbar.track_shipment"),
    t("navbar.login"),
  ];
  return (
    <Box
      py={{ base: 4, md: 6 }}
      px={{ base: 8, xl: 32, lg: 24 }}
      dir={dir}
      fontWeight="bold"
      borderBottom="1px solid"
      borderBottomColor="border"
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpenNav ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpenNav ? onCloseNav : onOpenNav}
        />
        <Box>
          <Image src={locale == "ar" ? LogoArabic : LogoEnglish} width="100%" />
        </Box>
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link, index) =>
            index < 3 ? <NavLink key={link}>{link}</NavLink> : null
          )}
        </HStack>
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link, index) =>
            index == 3 ? (
              <ShipmentSearch
                onOpen={onOpenPop}
                onClose={onClosePop}
                isOpen={isOpenPop}
                dir={dir}
                link={link}
                key={link}
              />
            ) : index == 4 ? (
              <NavLink key={link}>{link}</NavLink>
            ) : null
          )}
          <Button
            color="brand"
            bg="none"
            _hover={{ color: "white", bg: "brand" }}
            onClick={() => toggleLocale()}
          >
            {locale === "en" ? "عربي" : "English"}
          </Button>
        </HStack>
      </Flex>

      {isOpenNav ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4} margin="auto">
            {Links.map((link, index) =>
              index === 3 ? (
                <ShipmentSearch
                  onOpen={onOpenPop}
                  onClose={onClosePop}
                  isOpen={isOpenPop}
                  dir={dir}
                  link={link}
                  key={link}
                />
              ) : (
                <NavLink key={link}>{link}</NavLink>
              )
            )}
            <Button
              color="brand"
              alignSelf="start"
              bg="none"
              onClick={() => toggleLocale()}
              key="change-language"
            >
              {locale === "en" ? "عربي" : "English"}
            </Button>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
