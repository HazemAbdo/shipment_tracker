import { Box, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useLocale } from "../context/LocaleContext";
import { useShipment } from "../context/ShipmentContext";
import { DropOffAddress } from "../types/shipment";

const DropOffAddressCard = () => {
  const { t } = useTranslation();
  const { dir } = useLocale();
  const { shipment } = useShipment();
  const formatDropOffAddress = (dropOffAddress: DropOffAddress) => {
    return !dropOffAddress
      ? "N/A"
      : dropOffAddress.city.name !== dropOffAddress.zone.name
      ? `${dropOffAddress.firstLine}, ${t(
          `cities.${dropOffAddress.city.name}`
        )}, ${t(`cities.${dropOffAddress.zone.name}`)}`
      : `${dropOffAddress.firstLine}, ${t(
          `cities.${dropOffAddress.city.name}`
        )}`;
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="1rem"
      gridArea="drop-off-address"
      width={{ base: "100%", md: "auto" }}
      dir={dir}
    >
      <Heading as="h3" size="md" color="text.bold" dir={dir}>
        {t("shipment.drop_off_header")}
      </Heading>
      <Box
        py={{ base: 4, md: 6 }}
        px={{ base: 4, lg: 6 }}
        border="1px solid"
        borderColor="border"
      >
        <Text width={{ base: "20ch", sm: "30ch" }}>
          {formatDropOffAddress(shipment?.DropOffAddress)}
        </Text>
      </Box>
    </Box>
  );
};

export default DropOffAddressCard;
