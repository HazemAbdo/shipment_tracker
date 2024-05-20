import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useLocale } from "../context/LocaleContext";
import { useShipment } from "../context/ShipmentContext";
import {
  formatDeliveryTimeDate,
  formatDetailsTableTime,
} from "../utils/dateUtils";

const ShipmentDetailsTable = () => {
  const { t } = useTranslation();
  const { dir, locale } = useLocale();
  const { shipment } = useShipment();
  return (
    <Box
      className="table"
      gridArea="table"
      width={{ base: "100%", md: "auto" }}
      display="flex"
      flexDirection="column"
      gap="1rem"
    >
      <Heading as="h3" size="md" color="text.bold" dir={dir}>
        {t("shipment.details.table.main_header")}
      </Heading>
      <TableContainer
        color="text.bold"
        dir={dir}
        border="1px solid"
        borderColor="border"
        boxShadow={{ base: "md", md: "xl" }}
        rounded="md"
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>{t("shipment.details.table.headers.first")}</Th>
              <Th>{t("shipment.details.table.headers.second")}</Th>
              <Th>{t("shipment.details.table.headers.third")}</Th>
              <Th>{t("shipment.details.table.headers.fourth")}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {shipment?.TransitEvents?.map((event) => (
              <Tr key={event.timestamp}>
                <Td>{event.hub || "N/A"}</Td>
                <Td>
                  {formatDeliveryTimeDate(event?.timestamp, locale) || "N/A"}
                </Td>
                <Td>
                  {formatDetailsTableTime(event?.timestamp, locale) || "N/A"}
                </Td>
                <Td>
                  {t(`shipment.details.card.state.${event?.state}`, "N/A")}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ShipmentDetailsTable;
