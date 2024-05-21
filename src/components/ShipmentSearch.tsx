import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { NavLink } from "./Navbar";
import { useTranslation } from "react-i18next";
import { useShipment } from "../context/ShipmentContext";
import { SearchIcon } from "@chakra-ui/icons";

const ShipmentSearch = ({
  onOpen,
  onClose,
  isOpen,
  dir,
  link,
}: {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  dir: "ltr" | "rtl";
  link: string;
}) => {
  const { t } = useTranslation();
  const { setTrackingNumber } = useShipment();
  const [currentTrackingNumber, setCurrentTrackingNumber] =
    useState<string>("");
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTrackingNumber(currentTrackingNumber);
      setCurrentTrackingNumber("");
      onClose();
    }
  };
  const handleClickSearchIcon = () => {
    setTrackingNumber(currentTrackingNumber);
    setCurrentTrackingNumber("");
    onClose();
  };
  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      placement="bottom"
    >
      <PopoverTrigger>
        <Button
          bg="transparent"
          _hover={{
            color: "brand",
          }}
          fontWeight="bold"
          width={{ base: "fit-content", md: "auto" }}
          padding="0"
        >
          <NavLink key={link}>{link}</NavLink>
        </Button>
      </PopoverTrigger>
      <PopoverContent p={5} dir={dir}>
        <PopoverArrow />
        <PopoverCloseButton />
        <FormControl marginTop="10px">
          <FormLabel htmlFor="search-field">
            {t("shipment.search_label")}
          </FormLabel>
          <InputGroup>
            <InputLeftAddon
              bgColor="brand"
              dir={dir}
              _hover={{
                bgColor: "brandDark",
                cursor: "pointer",
              }}
              onClick={handleClickSearchIcon}
            >
              <SearchIcon color="white" />
            </InputLeftAddon>
            <Input
              placeholder={t("shipment.search_placeholder")}
              id="search-field"
              onChange={(e) => setCurrentTrackingNumber(e.target.value)}
              onKeyDown={handleKeyPress}
              value={currentTrackingNumber}
            />
          </InputGroup>
        </FormControl>
      </PopoverContent>
    </Popover>
  );
};
export default ShipmentSearch;
