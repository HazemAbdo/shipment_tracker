import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useLocale } from "../context/LocaleContext";
import { useShipment } from "../context/ShipmentContext";
import { formatLastUpdateDate } from "../utils/dateUtils";
const ShipmentDetailsCard = () => {
  const { t } = useTranslation();
  const { dir, locale } = useLocale();
  const { shipment } = useShipment();
  const pointsTitle = [
    `${t("shipment.details.card.shipment_id")} ${shipment.TrackingNumber}`,
    t("shipment.details.card.last_update"),
    t("shipment.details.card.merchant_name"),
    t("shipment.details.card.delivery_time"),
  ];
  const points = [
    `${shipment?.CurrentStatus?.state}`,
    `${formatLastUpdateDate(shipment?.CurrentStatus?.timestamp, locale)}`,
    `${shipment?.provider}`,
    `${shipment?.PromisedDate ? shipment.PromisedDate : "N/A"}`,
  ];
  return (
    <Box
      width="100%"
      py={{ base: 4, md: 10 }}
      px={{ base: 2, lg: 4 }}
      border="1px solid"
      borderColor="border"
    >
      <Box
        width="100%"
        dir={dir}
        display="flex"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 2, md: 4 }}
      >
        {pointsTitle.map((pointTitle, index) => (
          <VStack>
            <Text
              key={pointTitle}
              fontSize={{ base: "sm", md: "md" }}
              color="text.light"
            >
              {pointTitle}
            </Text>
            <Text
              key={points[index]}
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="bold"
              color="text.bold"
            >
              {points[index]}
            </Text>
          </VStack>
        ))}
      </Box>
    </Box>
  );
};

export default ShipmentDetailsCard;
